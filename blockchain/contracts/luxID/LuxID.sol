// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../identity/interface/IClaimIssuer.sol";
import "../identity/proxy/access/Ownable.sol";
import "./Factory.sol";

contract LuxID is Ownable {

    event IdentityRegistered(address wallet, address identity);
    event TrustedIssuerAdded(address issuer, uint[] claimTopics);
    event TrustedIssuerUpdated(address issuer, uint[] claimTopics);
    event TrustedIssuerRemoved(address issuer);
    event ClaimRequirementAdded (uint checkType, uint[] claimTopics);


    address public factory;

    /// correspondence between wallet and identity
    mapping(address => address) public linkedIdentity;

    mapping(uint => uint[]) public requiredClaims;

    mapping(address => uint[]) public trustedIssuerClaims;

    constructor () {
        // claim check corresponding to an owner role on the LuxID contract (similar to owner role)
        requiredClaims[1] = [42];
    }

    /// function used by the factory to register a newly created identity with the wallet of the creator
    function registerIdentity (address _wallet, address _identity) public {
        require (msg.sender == factory || this.owner() == msg.sender || check(1, linkedIdentity[msg.sender])
        , 'invalid sender');
        require(linkedIdentity[_wallet] == address(0), 'wallet already registered');
        linkedIdentity[_wallet] = _identity;
        emit IdentityRegistered(_wallet, _identity);
    }

    /// function checking if a wallet is corresponding to an identity or not
    function isRegistered (address _wallet) public view returns (bool) {
        if (linkedIdentity[_wallet] != address(0)){
            return true;
        }
        return false;
    }

    ///
    function requireClaims(uint _checkType, uint[] memory _claimTopics) external {
        require (this.owner() == msg.sender || check(1, linkedIdentity[msg.sender]), 'invalid sender');
        require ((requiredClaims[_checkType]).length == 0, 'checkType already exists');
        requiredClaims[_checkType] = _claimTopics;
        emit ClaimRequirementAdded (_checkType, _claimTopics);
    }

    function check(uint _checkType, address _identity) public view returns(bool) {
        require((Factory(factory)).isValidLuxID(_identity), 'invalid identity contract');
        uint[] memory requiredClaimTopics = requiredClaims[_checkType];
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

    function checkWithClaims(uint[] calldata _claims, address _identity) public view returns(bool) {
        require((Factory(factory)).isValidLuxID(_identity), 'invalid identity contract');
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
