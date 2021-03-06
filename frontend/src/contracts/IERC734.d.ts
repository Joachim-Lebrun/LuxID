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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IERC734Interface extends ethers.utils.Interface {
  functions: {
    "addKey(bytes32,uint256,uint256)": FunctionFragment;
    "approve(uint256,bool)": FunctionFragment;
    "execute(address,uint256,bytes)": FunctionFragment;
    "getKey(bytes32)": FunctionFragment;
    "getKeyPurposes(bytes32)": FunctionFragment;
    "getKeysByPurpose(uint256)": FunctionFragment;
    "keyHasPurpose(bytes32,uint256)": FunctionFragment;
    "removeKey(bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addKey",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getKey", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getKeyPurposes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getKeysByPurpose",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "keyHasPurpose",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeKey",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addKey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getKey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getKeyPurposes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getKeysByPurpose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "keyHasPurpose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removeKey", data: BytesLike): Result;

  events: {
    "Approved(uint256,bool)": EventFragment;
    "Executed(uint256,address,uint256,bytes)": EventFragment;
    "ExecutionFailed(uint256,address,uint256,bytes)": EventFragment;
    "ExecutionRequested(uint256,address,uint256,bytes)": EventFragment;
    "KeyAdded(bytes32,uint256,uint256)": EventFragment;
    "KeyRemoved(bytes32,uint256,uint256)": EventFragment;
    "KeysRequiredChanged(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "KeyAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "KeyRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "KeysRequiredChanged"): EventFragment;
}

export type ApprovedEvent = TypedEvent<
  [BigNumber, boolean] & { executionId: BigNumber; approved: boolean }
>;

export type ExecutedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string] & {
    executionId: BigNumber;
    to: string;
    value: BigNumber;
    data: string;
  }
>;

export type ExecutionFailedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string] & {
    executionId: BigNumber;
    to: string;
    value: BigNumber;
    data: string;
  }
>;

export type ExecutionRequestedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string] & {
    executionId: BigNumber;
    to: string;
    value: BigNumber;
    data: string;
  }
>;

export type KeyAddedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    key: string;
    purpose: BigNumber;
    keyType: BigNumber;
  }
>;

export type KeyRemovedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    key: string;
    purpose: BigNumber;
    keyType: BigNumber;
  }
>;

export type KeysRequiredChangedEvent = TypedEvent<
  [BigNumber, BigNumber] & { purpose: BigNumber; number: BigNumber }
>;

export class IERC734 extends BaseContract {
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

  interface: IERC734Interface;

  functions: {
    /**
     * Adds a _key to the identity. The _purpose specifies the purpose of the key. Triggers Event: `KeyAdded` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it's the identity itself, the approval process will determine its approval.
     */
    addKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      _keyType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Approves an execution or claim addition. Triggers Event: `Approved`, `Executed` Specification: This SHOULD require n of m approvals of keys purpose 1, if the _to of the execution is the identity contract itself, to successfully approve an execution. And COULD require n of m approvals of keys purpose 2, if the _to of the execution is another contract, to successfully approve an execution.
     */
    approve(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Passes an execution instruction to an ERC725 identity. Triggers Event: `ExecutionRequested`, `Executed` Specification: SHOULD require approve to be called with one or more keys of purpose 1 or 2 to approve this execution. Execute COULD be used as the only accessor for `addKey` and `removeKey`.
     */
    execute(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Returns the full key data, if present in the identity.
     */
    getKey(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber, string] & {
        purposes: BigNumber[];
        keyType: BigNumber;
        key: string;
      }
    >;

    /**
     * Returns the list of purposes associated with a key.
     */
    getKeyPurposes(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { _purposes: BigNumber[] }>;

    /**
     * Returns an array of public key bytes32 held by this identity.
     */
    getKeysByPurpose(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { keys: string[] }>;

    /**
     * Returns TRUE if a key is present and has the given purpose. If the key is not present it returns FALSE.
     */
    keyHasPurpose(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { exists: boolean }>;

    /**
     * Removes _purpose for _key from the identity. Triggers Event: `KeyRemoved` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it's the identity itself, the approval process will determine its approval.
     */
    removeKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * Adds a _key to the identity. The _purpose specifies the purpose of the key. Triggers Event: `KeyAdded` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it's the identity itself, the approval process will determine its approval.
   */
  addKey(
    _key: BytesLike,
    _purpose: BigNumberish,
    _keyType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Approves an execution or claim addition. Triggers Event: `Approved`, `Executed` Specification: This SHOULD require n of m approvals of keys purpose 1, if the _to of the execution is the identity contract itself, to successfully approve an execution. And COULD require n of m approvals of keys purpose 2, if the _to of the execution is another contract, to successfully approve an execution.
   */
  approve(
    _id: BigNumberish,
    _approve: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Passes an execution instruction to an ERC725 identity. Triggers Event: `ExecutionRequested`, `Executed` Specification: SHOULD require approve to be called with one or more keys of purpose 1 or 2 to approve this execution. Execute COULD be used as the only accessor for `addKey` and `removeKey`.
   */
  execute(
    _to: string,
    _value: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Returns the full key data, if present in the identity.
   */
  getKey(
    _key: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber, string] & {
      purposes: BigNumber[];
      keyType: BigNumber;
      key: string;
    }
  >;

  /**
   * Returns the list of purposes associated with a key.
   */
  getKeyPurposes(
    _key: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Returns an array of public key bytes32 held by this identity.
   */
  getKeysByPurpose(
    _purpose: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  /**
   * Returns TRUE if a key is present and has the given purpose. If the key is not present it returns FALSE.
   */
  keyHasPurpose(
    _key: BytesLike,
    _purpose: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Removes _purpose for _key from the identity. Triggers Event: `KeyRemoved` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it's the identity itself, the approval process will determine its approval.
   */
  removeKey(
    _key: BytesLike,
    _purpose: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Adds a _key to the identity. The _purpose specifies the purpose of the key. Triggers Event: `KeyAdded` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it's the identity itself, the approval process will determine its approval.
     */
    addKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      _keyType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Approves an execution or claim addition. Triggers Event: `Approved`, `Executed` Specification: This SHOULD require n of m approvals of keys purpose 1, if the _to of the execution is the identity contract itself, to successfully approve an execution. And COULD require n of m approvals of keys purpose 2, if the _to of the execution is another contract, to successfully approve an execution.
     */
    approve(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Passes an execution instruction to an ERC725 identity. Triggers Event: `ExecutionRequested`, `Executed` Specification: SHOULD require approve to be called with one or more keys of purpose 1 or 2 to approve this execution. Execute COULD be used as the only accessor for `addKey` and `removeKey`.
     */
    execute(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the full key data, if present in the identity.
     */
    getKey(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber, string] & {
        purposes: BigNumber[];
        keyType: BigNumber;
        key: string;
      }
    >;

    /**
     * Returns the list of purposes associated with a key.
     */
    getKeyPurposes(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Returns an array of public key bytes32 held by this identity.
     */
    getKeysByPurpose(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    /**
     * Returns TRUE if a key is present and has the given purpose. If the key is not present it returns FALSE.
     */
    keyHasPurpose(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Removes _purpose for _key from the identity. Triggers Event: `KeyRemoved` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it's the identity itself, the approval process will determine its approval.
     */
    removeKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Approved(uint256,bool)"(
      executionId?: BigNumberish | null,
      approved?: null
    ): TypedEventFilter<
      [BigNumber, boolean],
      { executionId: BigNumber; approved: boolean }
    >;

    Approved(
      executionId?: BigNumberish | null,
      approved?: null
    ): TypedEventFilter<
      [BigNumber, boolean],
      { executionId: BigNumber; approved: boolean }
    >;

    "Executed(uint256,address,uint256,bytes)"(
      executionId?: BigNumberish | null,
      to?: string | null,
      value?: BigNumberish | null,
      data?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { executionId: BigNumber; to: string; value: BigNumber; data: string }
    >;

    Executed(
      executionId?: BigNumberish | null,
      to?: string | null,
      value?: BigNumberish | null,
      data?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { executionId: BigNumber; to: string; value: BigNumber; data: string }
    >;

    "ExecutionFailed(uint256,address,uint256,bytes)"(
      executionId?: BigNumberish | null,
      to?: string | null,
      value?: BigNumberish | null,
      data?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { executionId: BigNumber; to: string; value: BigNumber; data: string }
    >;

    ExecutionFailed(
      executionId?: BigNumberish | null,
      to?: string | null,
      value?: BigNumberish | null,
      data?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { executionId: BigNumber; to: string; value: BigNumber; data: string }
    >;

    "ExecutionRequested(uint256,address,uint256,bytes)"(
      executionId?: BigNumberish | null,
      to?: string | null,
      value?: BigNumberish | null,
      data?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { executionId: BigNumber; to: string; value: BigNumber; data: string }
    >;

    ExecutionRequested(
      executionId?: BigNumberish | null,
      to?: string | null,
      value?: BigNumberish | null,
      data?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { executionId: BigNumber; to: string; value: BigNumber; data: string }
    >;

    "KeyAdded(bytes32,uint256,uint256)"(
      key?: BytesLike | null,
      purpose?: BigNumberish | null,
      keyType?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { key: string; purpose: BigNumber; keyType: BigNumber }
    >;

    KeyAdded(
      key?: BytesLike | null,
      purpose?: BigNumberish | null,
      keyType?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { key: string; purpose: BigNumber; keyType: BigNumber }
    >;

    "KeyRemoved(bytes32,uint256,uint256)"(
      key?: BytesLike | null,
      purpose?: BigNumberish | null,
      keyType?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { key: string; purpose: BigNumber; keyType: BigNumber }
    >;

    KeyRemoved(
      key?: BytesLike | null,
      purpose?: BigNumberish | null,
      keyType?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { key: string; purpose: BigNumber; keyType: BigNumber }
    >;

    "KeysRequiredChanged(uint256,uint256)"(
      purpose?: null,
      number?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { purpose: BigNumber; number: BigNumber }
    >;

    KeysRequiredChanged(
      purpose?: null,
      number?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { purpose: BigNumber; number: BigNumber }
    >;
  };

  estimateGas: {
    /**
     * Adds a _key to the identity. The _purpose specifies the purpose of the key. Triggers Event: `KeyAdded` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it's the identity itself, the approval process will determine its approval.
     */
    addKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      _keyType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Approves an execution or claim addition. Triggers Event: `Approved`, `Executed` Specification: This SHOULD require n of m approvals of keys purpose 1, if the _to of the execution is the identity contract itself, to successfully approve an execution. And COULD require n of m approvals of keys purpose 2, if the _to of the execution is another contract, to successfully approve an execution.
     */
    approve(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Passes an execution instruction to an ERC725 identity. Triggers Event: `ExecutionRequested`, `Executed` Specification: SHOULD require approve to be called with one or more keys of purpose 1 or 2 to approve this execution. Execute COULD be used as the only accessor for `addKey` and `removeKey`.
     */
    execute(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Returns the full key data, if present in the identity.
     */
    getKey(_key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the list of purposes associated with a key.
     */
    getKeyPurposes(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns an array of public key bytes32 held by this identity.
     */
    getKeysByPurpose(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns TRUE if a key is present and has the given purpose. If the key is not present it returns FALSE.
     */
    keyHasPurpose(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Removes _purpose for _key from the identity. Triggers Event: `KeyRemoved` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it's the identity itself, the approval process will determine its approval.
     */
    removeKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Adds a _key to the identity. The _purpose specifies the purpose of the key. Triggers Event: `KeyAdded` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it's the identity itself, the approval process will determine its approval.
     */
    addKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      _keyType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Approves an execution or claim addition. Triggers Event: `Approved`, `Executed` Specification: This SHOULD require n of m approvals of keys purpose 1, if the _to of the execution is the identity contract itself, to successfully approve an execution. And COULD require n of m approvals of keys purpose 2, if the _to of the execution is another contract, to successfully approve an execution.
     */
    approve(
      _id: BigNumberish,
      _approve: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Passes an execution instruction to an ERC725 identity. Triggers Event: `ExecutionRequested`, `Executed` Specification: SHOULD require approve to be called with one or more keys of purpose 1 or 2 to approve this execution. Execute COULD be used as the only accessor for `addKey` and `removeKey`.
     */
    execute(
      _to: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the full key data, if present in the identity.
     */
    getKey(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the list of purposes associated with a key.
     */
    getKeyPurposes(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns an array of public key bytes32 held by this identity.
     */
    getKeysByPurpose(
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns TRUE if a key is present and has the given purpose. If the key is not present it returns FALSE.
     */
    keyHasPurpose(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Removes _purpose for _key from the identity. Triggers Event: `KeyRemoved` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it's the identity itself, the approval process will determine its approval.
     */
    removeKey(
      _key: BytesLike,
      _purpose: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
