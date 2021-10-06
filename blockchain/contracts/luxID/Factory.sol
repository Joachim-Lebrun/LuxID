// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../identity/interface/IImplementationAuthority.sol";
import "../identity/proxy/IdentityProxy.sol";
import "./LuxID.sol";
import "./interface/IFactory.sol";

contract Factory is IFactory {

    event IdentityDeployed(address identity);
    /// event emitted whenever a single contract is deployed by the factory
    event Deployed(address _addr);

    /// mapping containing the addresses of all identity contracts deployed by the factory
    /// identities deployed outside the factory will not be allowed to interact with the protocol
    mapping(address => bool) public validLuxID;

    /// address of luxembourg administration
    address luxAdmin;

    /// address of the LuxID protocol contract
    address luxIDProtocol;

    /// address of the implementationAuthority contract making the link to the implementation contract
    address implementationAuthority;

    uint nonceID;

    /// setting
    constructor (address _luxID, address _luxAdmin, address _implementationAuthority) {
        luxIDProtocol = _luxID;
        luxAdmin = _luxAdmin;
        implementationAuthority = _implementationAuthority;
        nonceID = 1;
    }

    /// deploy function with create2 opcode call
    /// returns the address of the contract created
    function deploy(uint salt, bytes memory bytecode) internal returns (address) {
        bytes memory implInitCode = bytecode;
        address addr;
        assembly {
            let encoded_data := add(0x20, implInitCode) // load initialization code.
            let encoded_size := mload(implInitCode)     // load init code's length.
            addr := create2(0, encoded_data, encoded_size, salt)
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }
        emit Deployed(addr);
        return addr;
    }

    /// function used to deploy a trusted issuers registry using CREATE2
    function deployIdentity
    (
        uint _salt,
        address _implementationAuthority,
        address _wallet
    ) internal returns (address){
        bytes memory _code = type(IdentityProxy).creationCode;
        bytes memory _constructData = abi.encode(_implementationAuthority, _wallet);
        bytes memory bytecode = abi.encodePacked(_code, _constructData);
        return deploy(_salt, bytecode);
    }



    /// function used to create a new identity contract
    /// the function is deploying a proxy contract linked to the implementation contract
    /// previously deployed
    function createIdentity(address _wallet) public override returns (address) {
        require(!LuxID(luxIDProtocol).isRegistered(_wallet), 'user already registered');
        address identity = deployIdentity(nonceID, implementationAuthority, _wallet);
        (LuxID(luxIDProtocol)).registerIdentity(_wallet, identity);
        validLuxID[identity] = true;
        emit IdentityDeployed (identity);
        nonceID++;
        return identity;
    }

    function isValidLuxID(address _identity) public override view returns (bool) {
        return validLuxID[_identity];
    }
}
