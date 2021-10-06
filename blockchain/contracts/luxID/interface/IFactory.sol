pragma solidity ^0.8.0;

interface IFactory {
    function createIdentity(address _wallet) external returns (address);

    function isValidLuxID(address _identity) external view returns (bool);
}
