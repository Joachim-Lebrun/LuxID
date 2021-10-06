// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../identity/interface/IClaimIssuer.sol";
import "../identity/proxy/access/Ownable.sol";
import "./interface/IFactory.sol";

contract LuxID is Ownable {

    /// event emitted when an identity is registered
    event IdentityRegistered(address wallet, address identity);
    /// event emitted when a new issuer is added
    event TrustedIssuerAdded(address issuer, uint[] claimTopics);
    /// event emitted when an existing issuer is updated
    event TrustedIssuerUpdated(address issuer, uint[] claimTopics);
    /// event emitted when trust is revoked for an issuer
    event TrustedIssuerRemoved(address issuer);
    /// event emitted when a claim requirement pattern is created
    event ClaimRequirementAdded(uint checkType, uint[] claimTopics);
    /// event emitted when a claim requirement pattern is updated
    event ClaimRequirementUpdated(uint checkType, uint[] claimTopics);
    /// event emitted when the factory address is set
    event FactorySet(address _factory);

    /// address of the identity contracts factory
    address public factory;

    /// correspondence table linking wallets and identities
    mapping(address => address) public linkedIdentity;
    /// claims required to validate a pattern
    mapping(uint => uint[]) public requiredClaims;
    /// correspondence table linking trusted issuers and the claim topics they are trusted for
    mapping(address => uint[]) public trustedIssuerClaims;

    constructor () {
        // claim pattern corresponding to an owner role on the LuxID contract (similar to owner role)
        requiredClaims[1] = [42];
    }

    function setFactory(address _factory) external onlyOwner {
        factory = _factory;
        emit FactorySet(_factory);
    }

    /// function used by the factory to register a newly created identity with the wallet of the creator
    function registerIdentity (address _wallet, address _identity) public {
        // check if the caller of function is owner, factory or corresponding to the owner claim pattern
        require (msg.sender == factory || this.owner() == msg.sender || check(1, linkedIdentity[msg.sender])
        , 'invalid sender');
        // check if the wallet is already registered with an identity
        // one wallet cannot be linked to multiple identities
        require(linkedIdentity[_wallet] == address(0), 'wallet already registered');
        // link wallet with identity
        linkedIdentity[_wallet] = _identity;
        // emit event related to identity addition
        emit IdentityRegistered(_wallet, _identity);
    }

    /// function checking if a wallet is corresponding to an identity or not
    function isRegistered (address _wallet) public view returns (bool) {
        // check if the wallet is linked with an identity in the mapping
        if (linkedIdentity[_wallet] != address(0)){
            return true;
        }
        return false;
    }

    /// create a claim requirement pattern
    function requireClaims(uint _checkType, uint[] memory _claimTopics) external {
        // check if the caller of function is owner, factory or corresponding to the owner claim pattern
        require (this.owner() == msg.sender || check(1, linkedIdentity[msg.sender]), 'invalid sender');
        // check if the claim requirement pattern already exists,
        require ((requiredClaims[_checkType]).length == 0, 'checkType already exists');
        // set the array of topics corresponding to the pattern id
        requiredClaims[_checkType] = _claimTopics;
        emit ClaimRequirementAdded (_checkType, _claimTopics);
    }

    /// create a claim requirement pattern
    function updateRequiredClaims(uint _checkType, uint[] memory _claimTopics) external {
        // check if the caller of function is owner, factory or corresponding to the owner claim pattern
        require (this.owner() == msg.sender || check(1, linkedIdentity[msg.sender]), 'invalid sender');
        // check if the claim requirement pattern already exists,
        require ((requiredClaims[_checkType]).length != 0, 'checkType does not exist');
        // set the array of topics corresponding to the pattern id
        requiredClaims[_checkType] = _claimTopics;
        emit ClaimRequirementUpdated (_checkType, _claimTopics);
    }

    // function to check if an identity is valid for a claim pattern
    function check(uint _checkType, address _identity) public view returns(bool) {
        // check that the identity was deployed by the factory, other identities are not allowed
        require((IFactory(factory)).isValidLuxID(_identity), 'invalid identity contract');
        // fetch the claim topics required for this pattern
        uint[] memory requiredClaimTopics = requiredClaims[_checkType];
        // verify that the claim pattern to check exists
        require(requiredClaimTopics.length != 0, 'invalid checkType');
        // claim variables
        uint256 foundClaimTopic;
        uint256 scheme;
        address issuer;
        bytes memory sig;
        bytes memory data;
        uint256 claimTopic;
        // for loop on the claims required by the pattern
        for (claimTopic = 0; claimTopic < requiredClaimTopics.length; claimTopic++) {
            // fetch claim IDs held by the identity
            bytes32[] memory claimIds = (IIdentity(_identity)).getClaimIdsByTopic(requiredClaimTopics[claimTopic]);
            // if identity is not containing any claim, check is returning false
            if (claimIds.length == 0) {
                return false;
            }
            // for loop on the claims held by the identity to compare with the required claim currently checked
            for (uint256 j = 0; j < claimIds.length; j++) {
                (foundClaimTopic, scheme, issuer, sig, data, ) = (IIdentity(_identity)).getClaim(claimIds[j]);

                try IClaimIssuer(issuer).isClaimValid(IIdentity(_identity), requiredClaimTopics[claimTopic], sig,
                    data) returns(bool _validity){
                    if (
                        _validity
                        && hasClaimTopic(issuer, requiredClaimTopics[claimTopic])
                    ) {
                        j = claimIds.length;
                    }
                    if (!hasClaimTopic(issuer, requiredClaimTopics[claimTopic]) && j == (claimIds.length - 1)) {
                        return false;
                    }
                    if (!_validity && j == (claimIds.length - 1)) {
                        return false;
                    }
                }
                catch {
                    if (j == (claimIds.length - 1)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    function checkWithClaims(uint[] calldata _claims, address _identity) public view returns(bool) {
        require((IFactory(factory)).isValidLuxID(_identity), 'invalid identity contract');
        uint[] memory requiredClaimTopics = _claims;
        require(requiredClaimTopics.length != 0, 'invalid checkType');
        uint256 foundClaimTopic;
        uint256 scheme;
        address issuer;
        bytes memory sig;
        bytes memory data;
        uint256 claimTopic;
        for (claimTopic = 0; claimTopic < requiredClaimTopics.length; claimTopic++) {
            bytes32[] memory claimIds = (IIdentity(_identity)).getClaimIdsByTopic(requiredClaimTopics[claimTopic]);
            if (claimIds.length == 0) {
                return false;
            }
            for (uint256 j = 0; j < claimIds.length; j++) {
                (foundClaimTopic, scheme, issuer, sig, data, ) = (IIdentity(_identity)).getClaim(claimIds[j]);

                try IClaimIssuer(issuer).isClaimValid(IIdentity(_identity), requiredClaimTopics[claimTopic], sig,
                    data) returns(bool _validity){
                    if (
                        _validity
                        && hasClaimTopic(issuer, requiredClaimTopics[claimTopic])
                    ) {
                        j = claimIds.length;
                    }
                    if (!hasClaimTopic(issuer, requiredClaimTopics[claimTopic]) && j == (claimIds.length - 1)) {
                        return false;
                    }
                    if (!_validity && j == (claimIds.length - 1)) {
                        return false;
                    }
                }
                catch {
                    if (j == (claimIds.length - 1)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    function addTrustedIssuer(address _issuer, uint[] memory _claimTopics) external {
        require (this.owner() == msg.sender || check(1, linkedIdentity[msg.sender]), 'invalid sender');
        require ((trustedIssuerClaims[_issuer]).length == 0, 'trusted issuer already exists');
        trustedIssuerClaims[_issuer] = _claimTopics;
        emit TrustedIssuerAdded(_issuer, _claimTopics);
    }

    function removeTrustedIssuer(address _issuer) external {
        require (this.owner() == msg.sender || check(1, linkedIdentity[msg.sender]), 'invalid sender');
        require ((trustedIssuerClaims[_issuer]).length != 0, 'issuer does not exist');
        delete trustedIssuerClaims[_issuer];
        emit TrustedIssuerRemoved(_issuer);

    }

    function updateTrustedIssuer(address _issuer, uint[] memory _claimTopics) external {
        require (this.owner() == msg.sender || check(1, linkedIdentity[msg.sender]), 'invalid sender');
        require ((trustedIssuerClaims[_issuer]).length != 0, 'issuer does not exist');
        trustedIssuerClaims[_issuer] = _claimTopics;
        emit TrustedIssuerAdded(_issuer, _claimTopics);
    }

    function isTrustedIssuer(address _issuer) public view returns(bool) {
        if ((trustedIssuerClaims[_issuer]).length != 0){
            return true;
        }
        return false;
    }

    function hasClaimTopic(address _issuer, uint _topic) public view returns (bool) {
        require (isTrustedIssuer(_issuer), 'address is not issuer');
        uint length = trustedIssuerClaims[_issuer].length;
        uint[] memory claimTopics = trustedIssuerClaims[_issuer];
        for (uint256 i = 0; i < length; i++) {
            if (claimTopics[i] == _topic) {
                return true;
            }
        }
        return false;
    }

}
