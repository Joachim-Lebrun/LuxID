/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FactoryInterface extends ethers.utils.Interface {
  functions: {
    "validLuxID(address)": FunctionFragment;
    "createIdentity(address)": FunctionFragment;
    "isValidLuxID(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "validLuxID", values: [string]): string;
  encodeFunctionData(
    functionFragment: "createIdentity",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidLuxID",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "validLuxID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidLuxID",
    data: BytesLike
  ): Result;

  events: {
    "IdentityDeployed(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "IdentityDeployed"): EventFragment;
}

export type IdentityDeployedEvent = TypedEvent<[string] & { identity: string }>;

export class Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FactoryInterface;

  functions: {
    /**
     * mapping containing the addresses of all identity contracts deployed by the factory identities deployed outside the factory will not be allowed to interact with the protocol
     */
    validLuxID(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    /**
     * function used to create a new identity contract the function is deploying a proxy contract linked to the implementation contract previously deployed
     */
    createIdentity(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isValidLuxID(
      _identity: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  /**
   * mapping containing the addresses of all identity contracts deployed by the factory identities deployed outside the factory will not be allowed to interact with the protocol
   */
  validLuxID(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  /**
   * function used to create a new identity contract the function is deploying a proxy contract linked to the implementation contract previously deployed
   */
  createIdentity(
    _wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isValidLuxID(_identity: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    /**
     * mapping containing the addresses of all identity contracts deployed by the factory identities deployed outside the factory will not be allowed to interact with the protocol
     */
    validLuxID(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    /**
     * function used to create a new identity contract the function is deploying a proxy contract linked to the implementation contract previously deployed
     */
    createIdentity(_wallet: string, overrides?: CallOverrides): Promise<void>;

    isValidLuxID(
      _identity: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "IdentityDeployed(address)"(
      identity?: null
    ): TypedEventFilter<[string], { identity: string }>;

    IdentityDeployed(
      identity?: null
    ): TypedEventFilter<[string], { identity: string }>;
  };

  estimateGas: {
    /**
     * mapping containing the addresses of all identity contracts deployed by the factory identities deployed outside the factory will not be allowed to interact with the protocol
     */
    validLuxID(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * function used to create a new identity contract the function is deploying a proxy contract linked to the implementation contract previously deployed
     */
    createIdentity(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isValidLuxID(
      _identity: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * mapping containing the addresses of all identity contracts deployed by the factory identities deployed outside the factory will not be allowed to interact with the protocol
     */
    validLuxID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * function used to create a new identity contract the function is deploying a proxy contract linked to the implementation contract previously deployed
     */
    createIdentity(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isValidLuxID(
      _identity: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
