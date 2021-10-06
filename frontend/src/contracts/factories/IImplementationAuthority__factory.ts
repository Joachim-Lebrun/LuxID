/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IImplementationAuthority,
  IImplementationAuthorityInterface,
} from "../IImplementationAuthority";

const _abi = [
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IImplementationAuthority__factory {
  static readonly abi = _abi;
  static createInterface(): IImplementationAuthorityInterface {
    return new utils.Interface(_abi) as IImplementationAuthorityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IImplementationAuthority {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IImplementationAuthority;
  }
}