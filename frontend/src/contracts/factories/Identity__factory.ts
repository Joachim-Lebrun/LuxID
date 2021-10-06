/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Identity, IdentityInterface } from "../Identity";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialManagementKey",
        type: "address",
      },
      {
        internalType: "address",
        name: "_luxAdmin",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isLibrary",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "executionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "Approved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "claimId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "topic",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheme",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "ClaimAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "claimId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "topic",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheme",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "ClaimChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "claimId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "topic",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheme",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "ClaimRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "claimRequestId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "topic",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheme",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "ClaimRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "executionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "executionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ExecutionFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "executionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ExecutionRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "purpose",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "keyType",
        type: "uint256",
      },
    ],
    name: "KeyAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "purpose",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "keyType",
        type: "uint256",
      },
    ],
    name: "KeyRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "purpose",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "KeysRequiredChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initialManagementKey",
        type: "address",
      },
      {
        internalType: "address",
        name: "_luxAdmin",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "getKey",
    outputs: [
      {
        internalType: "uint256[]",
        name: "purposes",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "keyType",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "getKeyPurposes",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_purposes",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_purpose",
        type: "uint256",
      },
    ],
    name: "getKeysByPurpose",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "_keys",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_purpose",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
    ],
    name: "addKey",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_approve",
        type: "bool",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "uint256",
        name: "executionId",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_purpose",
        type: "uint256",
      },
    ],
    name: "removeKey",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_purpose",
        type: "uint256",
      },
    ],
    name: "keyHasPurpose",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_topic",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_scheme",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_issuer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "addClaim",
    outputs: [
      {
        internalType: "bytes32",
        name: "claimRequestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
    ],
    name: "removeClaim",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
    ],
    name: "getClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "topic",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "scheme",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_topic",
        type: "uint256",
      },
    ],
    name: "getClaimIdsByTopic",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "claimIds",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526006805461ffff60a01b1916600160a81b1790553480156200002557600080fd5b506040516200272d3803806200272d833981016040819052620000489162000378565b6006805460ff60a81b19168215600160a81b908102919091179182905560ff9104161562000082576200007c83836200009f565b62000096565b6006805460ff60a01b1916600160a01b1790555b505050620003ca565b600654600160a01b900460ff161580620000b85750303b155b620001095760405162461bcd60e51b815260206004820152601e60248201527f496e697469616c206b65792077617320616c72656164792073657475702e0000604482015260640160405180910390fd5b6006805461ffff60a01b191661010160a01b179055604080516001600160a01b03841660208201526000910160408051601f198184030181528282528051602091820120600081815260018084528482206002810184905586850190955280865290829052918290529350620001809290620002ef565b506000818152600160208181526040808420830183905560029091526000805160206200270d83398151915280548084018255908452600080516020620026ed83398151915201849055519091829184917f480000bb1edad8ca1470381cc334b1917fbd51c6531f3a623ea8e0ec7e38a6e991a4604080516001600160a01b03841660208201526000910160408051601f198184030181528282528051602091820120600081815260018084528482206002810184905586850190955280865290829052918290529350620002569290620002ef565b506000818152600160208181526040808420830183905560029091526000805160206200270d83398151915280548084018255908452600080516020620026ed83398151915201849055519091829184917f480000bb1edad8ca1470381cc334b1917fbd51c6531f3a623ea8e0ec7e38a6e991a45050600680546001600160a01b0319166001600160a01b039290921691909117905550565b82805482825590600052602060002090810192821562000332579160200282015b8281111562000332578251829060ff1690559160200191906001019062000310565b506200034092915062000344565b5090565b5b8082111562000340576000815560010162000345565b80516001600160a01b03811681146200037357600080fd5b919050565b6000806000606084860312156200038e57600080fd5b62000399846200035b565b9250620003a9602085016200035b565b915060408401518015158114620003bf57600080fd5b809150509250925092565b61231380620003da6000396000f3fe6080604052600436106100dd5760003560e01c806380e9e9e11161007f578063b61d27f611610059578063b61d27f61461027b578063c9100bcb1461028e578063d202158d146102c0578063fb307b34146102e057600080fd5b806380e9e9e1146102005780639010f7261461022d578063b1a34e0d1461024d57600080fd5b80634eee424a116100bb5780634eee424a1461016c57806353d413c51461018c57806354fd4d50146101ac578063747442d3146101e057600080fd5b806312aaac70146100e25780631d3812401461011a578063485cc9551461014a575b600080fd5b3480156100ee57600080fd5b506101026100fd366004611b99565b61030d565b60405161011193929190611bed565b60405180910390f35b34801561012657600080fd5b5061013a610135366004611c12565b610386565b6040519015158152602001610111565b34801561015657600080fd5b5061016a610165366004611c55565b6105a7565b005b34801561017857600080fd5b5061013a610187366004611b99565b6105b5565b34801561019857600080fd5b5061013a6101a7366004611c88565b6108ce565b3480156101b857600080fd5b5060408051808201825260058152640312e342e360dc1b602082015290516101119190611d06565b3480156101ec57600080fd5b5061013a6101fb366004611d20565b610c6b565b34801561020c57600080fd5b5061022061021b366004611b99565b610f0f565b6040516101119190611d55565b34801561023957600080fd5b50610220610248366004611b99565b610f71565b34801561025957600080fd5b5061026d610268366004611e45565b610fd1565b604051908152602001610111565b61026d610289366004611f04565b6112c9565b34801561029a57600080fd5b506102ae6102a9366004611b99565b611442565b60405161011196959493929190611f5b565b3480156102cc57600080fd5b5061013a6102db366004611c88565b611643565b3480156102ec57600080fd5b506103006102fb366004611b99565b611741565b6040516101119190611fbb565b60008181526001602081815260408084209283015460028401548454835181860281018601909452808452606096958695909491859183018282801561037257602002820191906000526020600020905b81548152602001906001019080831161035e575b505050505092509250925092509193909250565b600654600090600160a81b900460ff1615156001146103c05760405162461bcd60e51b81526004016103b790611fce565b60405180910390fd5b33301461041057604080513360208201526103f491015b604051602081830303815290604052805190602001206001611643565b6104105760405162461bcd60e51b81526004016103b790612021565b6000848152600160205260409020600201548414156105025760005b6000858152600160205260409020548110156104dc57600085815260016020526040812080548390811061046257610462612071565b90600052602060002001549050848114156104c95760405162461bcd60e51b815260206004820152602160248201527f436f6e666c6963743a204b657920616c72656164792068617320707572706f736044820152606560f81b60648201526084016103b7565b50806104d48161209d565b91505061042c565b50600084815260016020818152604083208054928301815583529091200183905561054e565b600084815260016020818152604080842060028101899055815180840190925287825293889052908290526105379291611a2b565b506000848152600160208190526040909120018290555b60008381526002602090815260408083208054600181018255908452918320909101869055518391859187917f480000bb1edad8ca1470381cc334b1917fbd51c6531f3a623ea8e0ec7e38a6e991a45060019392505050565b6105b182826117a1565b5050565b600654600090600160a81b900460ff1615156001146105e65760405162461bcd60e51b81526004016103b790611fce565b33301461067a576040805133602082015261061a91015b604051602081830303815290604052805190602001206003611643565b61067a5760405162461bcd60e51b815260206004820152602b60248201527f5065726d697373696f6e733a2053656e64657220646f6573206e6f742068617660448201526a6520434c41494d206b657960a81b60648201526084016103b7565b6000828152600460205260409020546106e95760405162461bcd60e51b815260206004820152602b60248201527f4e6f6e4578697374696e673a205468657265206973206e6f20636c61696d207760448201526a1a5d1a081d1a1a5cc8125160aa1b60648201526084016103b7565b60005b60008381526004602090815260408083205483526005909152902080548491908390811061071c5761071c612071565b90600052602060002001541461073e57806107368161209d565b9150506106ec565b6000838152600460209081526040808320548352600590915290208054610767906001906120b8565b8154811061077757610777612071565b6000918252602080832090910154858352600482526040808420548452600590925291208054839081106107ad576107ad612071565b60009182526020808320909101929092558481526004825260408082205482526005909252208054806107e2576107e26120cf565b60008281526020808220830160001990810183905590920190925584825260049081905260409182902060028101548154600183015494516001600160a01b0390921694909388937f3cf57863a89432c61c4a27073c6ee39e8a764bff5a05aebfbcdcdc80b2e6130a9361086593926003830192908101916005909101906121c1565b60405180910390a46000838152600460205260408120818155600181018290556002810180546001600160a01b0319169055906108a56003830182611a76565b6108b3600483016000611a76565b6108c1600583016000611a76565b505060019150505b919050565b600654600090600160a81b900460ff1615156001146108ff5760405162461bcd60e51b81526004016103b790611fce565b60008381526001602052604090206002015483146109695760405162461bcd60e51b815260206004820152602160248201527f4e6f6e4578697374696e673a204b65792069736e2774207265676973746572656044820152601960fa1b60648201526084016103b7565b3330146109a0576040805133602082015261098491016103d7565b6109a05760405162461bcd60e51b81526004016103b790612021565b6000838152600160205260409020546109cb5760405162461bcd60e51b81526004016103b790612200565b60005b60008481526001602052604090208054849190839081106109f1576109f1612071565b906000526020600020015414610a2f5780610a0b8161209d565b60008681526001602052604090205490925082109050610a2a57610a2f565b6109ce565b6000848152600160205260409020548110610a5c5760405162461bcd60e51b81526004016103b790612200565b600084815260016020819052604090912080549091610a7a916120b8565b81548110610a8a57610a8a612071565b9060005260206000200154600160008681526020019081526020016000206000018281548110610abc57610abc612071565b6000918252602080832090910192909255858152600190915260409020805480610ae857610ae86120cf565b6001900381819060005260206000200160009055905560005b6000848152600260205260409020805486919083908110610b2457610b24612071565b906000526020600020015414610b465780610b3e8161209d565b915050610b01565b60008481526002602052604090208054610b62906001906120b8565b81548110610b7257610b72612071565b9060005260206000200154600260008681526020019081526020016000208281548110610ba157610ba1612071565b906000526020600020018190555060026000858152602001908152602001600020805480610bd157610bd16120cf565b6000828152602080822083016000199081018390559092019092558682526001908190526040909120908101549054610c2e57600086815260016020526040812090610c1d8282611ab3565b506000600182018190556002909101555b8085877f585a4aef50f8267a92b32412b331b20f7f8b96f2245b253b9cc50dcc621d339760405160405180910390a4600193505050505b92915050565b600654600090600160a81b900460ff161515600114610c9c5760405162461bcd60e51b81526004016103b790611fce565b60408051336020820152610cc991015b604051602081830303815290604052805190602001206002611643565b610d155760405162461bcd60e51b815260206004820152601f60248201527f53656e64657220646f6573206e6f74206861766520616374696f6e206b65790060448201526064016103b7565b827fb3932da477fe5d6c8ff2eafef050c0f3a1af18fc07121001482600f36f3715d883604051610d49911515815260200190565b60405180910390a260018215151415610eee576000838152600360208181526040808420928301805460ff1916600190811790915583549084015491516001600160a01b03909116949193610da593600290910192910161224a565b60408051601f1981840301815290829052610dbf9161226f565b60006040518083038185875af1925050503d8060008114610dfc576040519150601f19603f3d011682016040523d82523d6000602084013e610e01565b606091505b50909150508015610e8657600083815260036020819052604091829020908101805461ff00191661010017905560018101548154925190926001600160a01b03169186917f1f920dbda597d7bf95035464170fa58d0a4b57f13a1c315ace6793b9f63688b891610e769160029091019061228b565b60405180910390a4506001610c65565b6000838152600360205260409081902060018101548154925190926001600160a01b03169186917fe10c49d9f7c71da23262367013434763cfdb2332267641728d25cd712c5c6a6891610ede9160029091019061228b565b60405180910390a4506000610c65565b5050600090815260036020819052604090912001805460ff19169055600190565b600081815260056020908152604091829020805483518184028101840190945280845260609392830182828015610f6557602002820191906000526020600020905b815481526020019060010190808311610f51575b50505050509050919050565b600081815260026020908152604091829020805483518184028101840190945280845260609392830182828015610f655760200282019190600052602060002090815481526020019060010190808311610f515750505050509050919050565b600654600090600160a81b900460ff1615156001146110025760405162461bcd60e51b81526004016103b790611fce565b604080516001600160a01b0387166020808301919091528183018a9052825180830384018152606090920190925280519101203033146110b7576040805133602082015261105091016105fd565b6110b75760405162461bcd60e51b815260206004820152603260248201527f5065726d697373696f6e733a2053656e64657220646f6573206e6f74206861766044820152716520636c61696d207369676e6572206b657960701b60648201526084016103b7565b6000818152600460205260409020600201546001600160a01b038781169116146111db576000888152600560209081526040808320805460018082018355918552838520018590558484526004835292208a81559182018990556002820180546001600160a01b0319166001600160a01b038a1617905586516111409260030191880190611ad1565b506000818152600460208181526040909220865161116693919092019190870190611ad1565b506000818152600460209081526040909120845161118c92600590920191860190611ad1565b50856001600160a01b031688827f46149b18aa084502c3f12bc75e19eda8bda8d102b82cce8474677a6d0d5f43c58a8989896040516111ce949392919061229e565b60405180910390a46112be565b6000818152600460209081526040909120898155600181018990556002810180546001600160a01b0319166001600160a01b038a16179055865161122792600390920191880190611ad1565b506000818152600460208181526040909220865161124d93919092019190870190611ad1565b506000818152600460209081526040909120845161127392600590920191860190611ad1565b50856001600160a01b031688827f3bab293fc00db832d7619a9299914251b8747c036867ec056cbd506f60135b138a8989896040516112b5949392919061229e565b60405180910390a45b979650505050505050565b600654600090600160a81b900460ff1615156001146112fa5760405162461bcd60e51b81526004016103b790611fce565b6000805481526003602081905260409091200154610100900460ff16156113565760405162461bcd60e51b815260206004820152601060248201526f105b1c9958591e48195e1958dd5d195960821b60448201526064016103b7565b60008054815260036020908152604080832080546001600160a01b0319166001600160a01b038916179055825483528083206001018690558254835290912083516113a992600290920191850190611ad1565b5082846001600160a01b03166000547f8afcfabcb00e47a53a8fc3e9f23ff47ee1926194bb1350dd007c50b412a6cee8856040516113e79190611d06565b60405180910390a4604080513360208201526114039101610cac565b15611417576114156000546001610c6b565b505b6000805490806114268361209d565b9190505550600160005461143a91906120b8565b949350505050565b600081815260046020819052604082208054600182015460028301546003840180548796879660609687968796919590946001600160a01b03909216939092908101916005909101908390611496906120e5565b80601f01602080910402602001604051908101604052809291908181526020018280546114c2906120e5565b801561150f5780601f106114e45761010080835404028352916020019161150f565b820191906000526020600020905b8154815290600101906020018083116114f257829003601f168201915b50505050509250818054611522906120e5565b80601f016020809104026020016040519081016040528092919081815260200182805461154e906120e5565b801561159b5780601f106115705761010080835404028352916020019161159b565b820191906000526020600020905b81548152906001019060200180831161157e57829003601f168201915b505050505091508080546115ae906120e5565b80601f01602080910402602001604051908101604052809291908181526020018280546115da906120e5565b80156116275780601f106115fc57610100808354040283529160200191611627565b820191906000526020600020905b81548152906001019060200180831161160a57829003601f168201915b5050505050905095509550955095509550955091939550919395565b600082815260016020908152604080832081518154608094810282018501909352606081018381528594919384928491908401828280156116a357602002820191906000526020600020905b81548152602001906001019080831161168f575b5050509183525050600182015460208201526002909101546040918201528101519091506116d5576000915050610c65565b60005b815151811015611736576000826000015182815181106116fa576116fa612071565b60200260200101519050806001148061171257508481145b156117235760019350505050610c65565b508061172e8161209d565b9150506116d8565b506000949350505050565b600081815260016020908152604091829020805483518184028101840190945280845260609392830182828015610f655760200282019190600052602060002090815481526020019060010190808311610f515750505050509050919050565b600654600160a01b900460ff1615806117b95750303b155b6118055760405162461bcd60e51b815260206004820152601e60248201527f496e697469616c206b65792077617320616c72656164792073657475702e000060448201526064016103b7565b6006805461ffff60a01b191661010160a01b179055604080516001600160a01b03841660208201526000910160408051601f19818403018152828252805160209182012060008181526001808452848220600281018490558685019095528086529082905291829052935061187a9290611b44565b506000818152600160208181526040808420830183905560029091527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0805480840182559084527f7fef4bf8f63cf9dd467136c679c02b5c17fcf6322d9562512bf5eb952cf7cc5301849055519091829184917f480000bb1edad8ca1470381cc334b1917fbd51c6531f3a623ea8e0ec7e38a6e991a4604080516001600160a01b03841660208201526000910160408051601f1981840301815282825280516020918201206000818152600180845284822060028101849055868501909552808652908290529182905293506119709290611b44565b506000818152600160208181526040808420830183905560029091527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0805480840182559084527f7fef4bf8f63cf9dd467136c679c02b5c17fcf6322d9562512bf5eb952cf7cc5301849055519091829184917f480000bb1edad8ca1470381cc334b1917fbd51c6531f3a623ea8e0ec7e38a6e991a45050600680546001600160a01b0319166001600160a01b039290921691909117905550565b828054828255906000526020600020908101928215611a66579160200282015b82811115611a66578251825591602001919060010190611a4b565b50611a72929150611b84565b5090565b508054611a82906120e5565b6000825580601f10611a92575050565b601f016020900490600052602060002090810190611ab09190611b84565b50565b5080546000825590600052602060002090810190611ab09190611b84565b828054611add906120e5565b90600052602060002090601f016020900481019282611aff5760008555611a66565b82601f10611b1857805160ff1916838001178555611a66565b82800160010185558215611a665791820182811115611a66578251825591602001919060010190611a4b565b828054828255906000526020600020908101928215611a66579160200282015b82811115611a66578251829060ff16905591602001919060010190611b64565b5b80821115611a725760008155600101611b85565b600060208284031215611bab57600080fd5b5035919050565b600081518084526020808501945080840160005b83811015611be257815187529582019590820190600101611bc6565b509495945050505050565b606081526000611c006060830186611bb2565b60208301949094525060400152919050565b600080600060608486031215611c2757600080fd5b505081359360208301359350604090920135919050565b80356001600160a01b03811681146108c957600080fd5b60008060408385031215611c6857600080fd5b611c7183611c3e565b9150611c7f60208401611c3e565b90509250929050565b60008060408385031215611c9b57600080fd5b50508035926020909101359150565b60005b83811015611cc5578181015183820152602001611cad565b83811115611cd4576000848401525b50505050565b60008151808452611cf2816020860160208601611caa565b601f01601f19169290920160200192915050565b602081526000611d196020830184611cda565b9392505050565b60008060408385031215611d3357600080fd5b8235915060208301358015158114611d4a57600080fd5b809150509250929050565b6020808252825182820181905260009190848201906040850190845b81811015611d8d57835183529284019291840191600101611d71565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611dca57611dca611d99565b604051601f8501601f19908116603f01168101908282118183101715611df257611df2611d99565b81604052809350858152868686011115611e0b57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611e3657600080fd5b611d1983833560208501611daf565b60008060008060008060c08789031215611e5e57600080fd5b8635955060208701359450611e7560408801611c3e565b9350606087013567ffffffffffffffff80821115611e9257600080fd5b611e9e8a838b01611e25565b94506080890135915080821115611eb457600080fd5b611ec08a838b01611e25565b935060a0890135915080821115611ed657600080fd5b508701601f81018913611ee857600080fd5b611ef789823560208401611daf565b9150509295509295509295565b600080600060608486031215611f1957600080fd5b611f2284611c3e565b925060208401359150604084013567ffffffffffffffff811115611f4557600080fd5b611f5186828701611e25565b9150509250925092565b86815285602082015260018060a01b038516604082015260c060608201526000611f8860c0830186611cda565b8281036080840152611f9a8186611cda565b905082810360a0840152611fae8185611cda565b9998505050505050505050565b602081526000611d196020830184611bb2565b60208082526033908201527f496e746572616374696e67207769746820746865206c69627261727920636f6e6040820152723a3930b1ba1034b9903337b93134b23232b71760691b606082015260800190565b60208082526030908201527f5065726d697373696f6e733a2053656e64657220646f6573206e6f742068617660408201526f65206d616e6167656d656e74206b657960801b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156120b1576120b1612087565b5060010190565b6000828210156120ca576120ca612087565b500390565b634e487b7160e01b600052603160045260246000fd5b600181811c908216806120f957607f821691505b6020821081141561211a57634e487b7160e01b600052602260045260246000fd5b50919050565b8054600090600181811c908083168061213a57607f831692505b602080841082141561215c57634e487b7160e01b600052602260045260246000fd5b8388528180156121735760018114612187576121b5565b60ff198616898301526040890196506121b5565b876000528160002060005b868110156121ad5781548b8201850152908501908301612192565b8a0183019750505b50505050505092915050565b8481526080602082015260006121da6080830186612120565b82810360408401526121ec8186612120565b905082810360608401526112be8185612120565b6020808252602a908201527f4e6f6e4578697374696e673a204b657920646f65736e27742068617665207375604082015269636820707572706f736560b01b606082015260800190565b60408152600061225d6040830185612120565b905060ff831660208301529392505050565b60008251612281818460208701611caa565b9190910192915050565b602081526000611d196020830184612120565b8481526080602082015260006122b76080830186611cda565b82810360408401526122c98186611cda565b905082810360608401526112be8185611cda56fea26469706673582212206b4e5b057f5ca6881c04acebdf395e9345f72dab403ca84b9176206e5ad67f4a64736f6c634300080900337fef4bf8f63cf9dd467136c679c02b5c17fcf6322d9562512bf5eb952cf7cc53e90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0";

export class Identity__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    initialManagementKey: string,
    _luxAdmin: string,
    _isLibrary: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Identity> {
    return super.deploy(
      initialManagementKey,
      _luxAdmin,
      _isLibrary,
      overrides || {}
    ) as Promise<Identity>;
  }
  getDeployTransaction(
    initialManagementKey: string,
    _luxAdmin: string,
    _isLibrary: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialManagementKey,
      _luxAdmin,
      _isLibrary,
      overrides || {}
    );
  }
  attach(address: string): Identity {
    return super.attach(address) as Identity;
  }
  connect(signer: Signer): Identity__factory {
    return super.connect(signer) as Identity__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IdentityInterface {
    return new utils.Interface(_abi) as IdentityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Identity {
    return new Contract(address, _abi, signerOrProvider) as Identity;
  }
}