// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../identity/interface/IImplementationAuthority.sol";
import "../identity/proxy/IdentityProxy.sol";
import "./LuxID.sol";

contract Factory {

    event IdentityDeployed(address identity);

    /// mapping containing the addresses of all identity contracts deployed by the factory
    /// identities deployed outside the factory will not be allowed to interact with the protocol
    mapping(address => bool) public validLuxID;

    /// address of luxembourg administration
    address luxAdmin;

    /// address of the LuxID protocol contract
    address luxIDProtocol;

    /// address of the implementationAuthority contract making the link to the implementation contract
    address implementationAuthority;

    /// setting
    constructor (address _luxID, address _luxAdmin) {
        luxIDProtocol = _luxID;
        luxAdmin = _luxAdmin;
    }

    /// function used to create a new identity contract
    /// the function is deploying a proxy contract linked to the implementation contract
    /// previously deployed
    function createIdentity(address _wallet) public {
        require(!LuxID(luxIDProtocol).isRegistered(_wallet), 'user already registered');
        IdentityProxy identity = new IdentityProxy(implementationAuthority, _wallet, luxAdmin);
        LuxID(luxIDProtocol).registerIdentity(_wallet, address(identity));
        validLuxID[address(identity)] = true;
        emit IdentityDeployed (address(identity));
    }

    function isValidLuxID(address _identity) public view returns (bool) {
        return validLuxID[_identity];
    }
}
