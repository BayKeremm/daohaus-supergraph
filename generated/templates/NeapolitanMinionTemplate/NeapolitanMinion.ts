// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ActionCanceled extends ethereum.Event {
  get params(): ActionCanceled__Params {
    return new ActionCanceled__Params(this);
  }
}

export class ActionCanceled__Params {
  _event: ActionCanceled;

  constructor(event: ActionCanceled) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ActionDeleted extends ethereum.Event {
  get params(): ActionDeleted__Params {
    return new ActionDeleted__Params(this);
  }
}

export class ActionDeleted__Params {
  _event: ActionDeleted;

  constructor(event: ActionDeleted) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ChangeOwner extends ethereum.Event {
  get params(): ChangeOwner__Params {
    return new ChangeOwner__Params(this);
  }
}

export class ChangeOwner__Params {
  _event: ChangeOwner;

  constructor(event: ChangeOwner) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CrossWithdraw extends ethereum.Event {
  get params(): CrossWithdraw__Params {
    return new CrossWithdraw__Params(this);
  }
}

export class CrossWithdraw__Params {
  _event: CrossWithdraw;

  constructor(event: CrossWithdraw) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class DoWithdraw extends ethereum.Event {
  get params(): DoWithdraw__Params {
    return new DoWithdraw__Params(this);
  }
}

export class DoWithdraw__Params {
  _event: DoWithdraw;

  constructor(event: DoWithdraw) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ExecuteAction extends ethereum.Event {
  get params(): ExecuteAction__Params {
    return new ExecuteAction__Params(this);
  }
}

export class ExecuteAction__Params {
  _event: ExecuteAction;

  constructor(event: ExecuteAction) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get target(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get executor(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class ExecuteEscapeHatch extends ethereum.Event {
  get params(): ExecuteEscapeHatch__Params {
    return new ExecuteEscapeHatch__Params(this);
  }
}

export class ExecuteEscapeHatch__Params {
  _event: ExecuteEscapeHatch;

  constructor(event: ExecuteEscapeHatch) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get executor(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class ExecuteSignature extends ethereum.Event {
  get params(): ExecuteSignature__Params {
    return new ExecuteSignature__Params(this);
  }
}

export class ExecuteSignature__Params {
  _event: ExecuteSignature;

  constructor(event: ExecuteSignature) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get executor(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProposeAction extends ethereum.Event {
  get params(): ProposeAction__Params {
    return new ProposeAction__Params(this);
  }
}

export class ProposeAction__Params {
  _event: ProposeAction;

  constructor(event: ProposeAction) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get target(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class ProposeNewAction extends ethereum.Event {
  get params(): ProposeNewAction__Params {
    return new ProposeNewAction__Params(this);
  }
}

export class ProposeNewAction__Params {
  _event: ProposeNewAction;

  constructor(event: ProposeNewAction) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get withdrawToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get withdrawAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get moloch(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get memberOrModule(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }
}

export class ProposeSignature extends ethereum.Event {
  get params(): ProposeSignature__Params {
    return new ProposeSignature__Params(this);
  }
}

export class ProposeSignature__Params {
  _event: ProposeSignature;

  constructor(event: ProposeSignature) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get msgHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get proposer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PulledFunds extends ethereum.Event {
  get params(): PulledFunds__Params {
    return new PulledFunds__Params(this);
  }
}

export class PulledFunds__Params {
  _event: PulledFunds;

  constructor(event: PulledFunds) {
    this._event = event;
  }

  get moloch(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SetModule extends ethereum.Event {
  get params(): SetModule__Params {
    return new SetModule__Params(this);
  }
}

export class SetModule__Params {
  _event: SetModule;

  constructor(event: SetModule) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SignatureCanceled extends ethereum.Event {
  get params(): SignatureCanceled__Params {
    return new SignatureCanceled__Params(this);
  }
}

export class SignatureCanceled__Params {
  _event: SignatureCanceled;

  constructor(event: SignatureCanceled) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get msgHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class NeapolitanMinion__actionsResult {
  value0: Bytes;
  value1: Address;
  value2: boolean;
  value3: Address;
  value4: BigInt;
  value5: Address;
  value6: boolean;

  constructor(
    value0: Bytes,
    value1: Address,
    value2: boolean,
    value3: Address,
    value4: BigInt,
    value5: Address,
    value6: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    return map;
  }
}

export class NeapolitanMinion__signaturesResult {
  value0: Bytes;
  value1: Bytes;

  constructor(value0: Bytes, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    return map;
  }
}

export class NeapolitanMinion extends ethereum.SmartContract {
  static bind(address: Address): NeapolitanMinion {
    return new NeapolitanMinion("NeapolitanMinion", address);
  }

  actions(param0: BigInt): NeapolitanMinion__actionsResult {
    let result = super.call(
      "actions",
      "actions(uint256):(bytes32,address,bool,address,uint256,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new NeapolitanMinion__actionsResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toBoolean(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toBoolean()
    );
  }

  try_actions(
    param0: BigInt
  ): ethereum.CallResult<NeapolitanMinion__actionsResult> {
    let result = super.tryCall(
      "actions",
      "actions(uint256):(bytes32,address,bool,address,uint256,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NeapolitanMinion__actionsResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toBoolean(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toBoolean()
      )
    );
  }

  changeOwner(_moloch: Address): boolean {
    let result = super.call("changeOwner", "changeOwner(address):(bool)", [
      ethereum.Value.fromAddress(_moloch)
    ]);

    return result[0].toBoolean();
  }

  try_changeOwner(_moloch: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("changeOwner", "changeOwner(address):(bool)", [
      ethereum.Value.fromAddress(_moloch)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  deleteAction(_proposalId: BigInt): boolean {
    let result = super.call("deleteAction", "deleteAction(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_proposalId)
    ]);

    return result[0].toBoolean();
  }

  try_deleteAction(_proposalId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("deleteAction", "deleteAction(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_proposalId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  escapeHatch(
    actionTo: Address,
    actionValue: BigInt,
    actionData: Bytes
  ): boolean {
    let result = super.call(
      "escapeHatch",
      "escapeHatch(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(actionTo),
        ethereum.Value.fromUnsignedBigInt(actionValue),
        ethereum.Value.fromBytes(actionData)
      ]
    );

    return result[0].toBoolean();
  }

  try_escapeHatch(
    actionTo: Address,
    actionValue: BigInt,
    actionData: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "escapeHatch",
      "escapeHatch(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(actionTo),
        ethereum.Value.fromUnsignedBigInt(actionValue),
        ethereum.Value.fromBytes(actionData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  executeAction(
    proposalId: BigInt,
    actionTos: Array<Address>,
    actionValues: Array<BigInt>,
    actionDatas: Array<Bytes>
  ): boolean {
    let result = super.call(
      "executeAction",
      "executeAction(uint256,address[],uint256[],bytes[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromAddressArray(actionTos),
        ethereum.Value.fromUnsignedBigIntArray(actionValues),
        ethereum.Value.fromBytesArray(actionDatas)
      ]
    );

    return result[0].toBoolean();
  }

  try_executeAction(
    proposalId: BigInt,
    actionTos: Array<Address>,
    actionValues: Array<BigInt>,
    actionDatas: Array<Bytes>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "executeAction",
      "executeAction(uint256,address[],uint256[],bytes[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromAddressArray(actionTos),
        ethereum.Value.fromUnsignedBigIntArray(actionValues),
        ethereum.Value.fromBytesArray(actionDatas)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  hashOperation(
    targets: Array<Address>,
    values: Array<BigInt>,
    datas: Array<Bytes>
  ): Bytes {
    let result = super.call(
      "hashOperation",
      "hashOperation(address[],uint256[],bytes[]):(bytes32)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytesArray(datas)
      ]
    );

    return result[0].toBytes();
  }

  try_hashOperation(
    targets: Array<Address>,
    values: Array<BigInt>,
    datas: Array<Bytes>
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashOperation",
      "hashOperation(address[],uint256[],bytes[]):(bytes32)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytesArray(datas)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isMember(user: Address): boolean {
    let result = super.call("isMember", "isMember(address):(bool)", [
      ethereum.Value.fromAddress(user)
    ]);

    return result[0].toBoolean();
  }

  try_isMember(user: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMember", "isMember(address):(bool)", [
      ethereum.Value.fromAddress(user)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isValidSignature(permissionHash: Bytes, signature: Bytes): Bytes {
    let result = super.call(
      "isValidSignature",
      "isValidSignature(bytes32,bytes):(bytes4)",
      [
        ethereum.Value.fromFixedBytes(permissionHash),
        ethereum.Value.fromBytes(signature)
      ]
    );

    return result[0].toBytes();
  }

  try_isValidSignature(
    permissionHash: Bytes,
    signature: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "isValidSignature",
      "isValidSignature(bytes32,bytes):(bytes4)",
      [
        ethereum.Value.fromFixedBytes(permissionHash),
        ethereum.Value.fromBytes(signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  minQuorum(): BigInt {
    let result = super.call("minQuorum", "minQuorum():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minQuorum(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minQuorum", "minQuorum():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  module(): Address {
    let result = super.call("module", "module():(address)", []);

    return result[0].toAddress();
  }

  try_module(): ethereum.CallResult<Address> {
    let result = super.tryCall("module", "module():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  moloch(): Address {
    let result = super.call("moloch", "moloch():(address)", []);

    return result[0].toAddress();
  }

  try_moloch(): ethereum.CallResult<Address> {
    let result = super.tryCall("moloch", "moloch():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  molochDepositToken(): Address {
    let result = super.call(
      "molochDepositToken",
      "molochDepositToken():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_molochDepositToken(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "molochDepositToken",
      "molochDepositToken():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  proposeAction(
    actionTos: Array<Address>,
    actionValues: Array<BigInt>,
    actionDatas: Array<Bytes>,
    withdrawToken: Address,
    withdrawAmount: BigInt,
    details: string,
    memberOrModule: boolean
  ): BigInt {
    let result = super.call(
      "proposeAction",
      "proposeAction(address[],uint256[],bytes[],address,uint256,string,bool):(uint256)",
      [
        ethereum.Value.fromAddressArray(actionTos),
        ethereum.Value.fromUnsignedBigIntArray(actionValues),
        ethereum.Value.fromBytesArray(actionDatas),
        ethereum.Value.fromAddress(withdrawToken),
        ethereum.Value.fromUnsignedBigInt(withdrawAmount),
        ethereum.Value.fromString(details),
        ethereum.Value.fromBoolean(memberOrModule)
      ]
    );

    return result[0].toBigInt();
  }

  try_proposeAction(
    actionTos: Array<Address>,
    actionValues: Array<BigInt>,
    actionDatas: Array<Bytes>,
    withdrawToken: Address,
    withdrawAmount: BigInt,
    details: string,
    memberOrModule: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposeAction",
      "proposeAction(address[],uint256[],bytes[],address,uint256,string,bool):(uint256)",
      [
        ethereum.Value.fromAddressArray(actionTos),
        ethereum.Value.fromUnsignedBigIntArray(actionValues),
        ethereum.Value.fromBytesArray(actionDatas),
        ethereum.Value.fromAddress(withdrawToken),
        ethereum.Value.fromUnsignedBigInt(withdrawAmount),
        ethereum.Value.fromString(details),
        ethereum.Value.fromBoolean(memberOrModule)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  setModule(_module: Address): boolean {
    let result = super.call("setModule", "setModule(address):(bool)", [
      ethereum.Value.fromAddress(_module)
    ]);

    return result[0].toBoolean();
  }

  try_setModule(_module: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("setModule", "setModule(address):(bool)", [
      ethereum.Value.fromAddress(_module)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  signatures(param0: Bytes): NeapolitanMinion__signaturesResult {
    let result = super.call(
      "signatures",
      "signatures(bytes32):(bytes32,bytes4)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new NeapolitanMinion__signaturesResult(
      result[0].toBytes(),
      result[1].toBytes()
    );
  }

  try_signatures(
    param0: Bytes
  ): ethereum.CallResult<NeapolitanMinion__signaturesResult> {
    let result = super.tryCall(
      "signatures",
      "signatures(bytes32):(bytes32,bytes4)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NeapolitanMinion__signaturesResult(
        value[0].toBytes(),
        value[1].toBytes()
      )
    );
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class CancelActionCall extends ethereum.Call {
  get inputs(): CancelActionCall__Inputs {
    return new CancelActionCall__Inputs(this);
  }

  get outputs(): CancelActionCall__Outputs {
    return new CancelActionCall__Outputs(this);
  }
}

export class CancelActionCall__Inputs {
  _call: CancelActionCall;

  constructor(call: CancelActionCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelActionCall__Outputs {
  _call: CancelActionCall;

  constructor(call: CancelActionCall) {
    this._call = call;
  }
}

export class ChangeOwnerCall extends ethereum.Call {
  get inputs(): ChangeOwnerCall__Inputs {
    return new ChangeOwnerCall__Inputs(this);
  }

  get outputs(): ChangeOwnerCall__Outputs {
    return new ChangeOwnerCall__Outputs(this);
  }
}

export class ChangeOwnerCall__Inputs {
  _call: ChangeOwnerCall;

  constructor(call: ChangeOwnerCall) {
    this._call = call;
  }

  get _moloch(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeOwnerCall__Outputs {
  _call: ChangeOwnerCall;

  constructor(call: ChangeOwnerCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class CrossWithdrawCall extends ethereum.Call {
  get inputs(): CrossWithdrawCall__Inputs {
    return new CrossWithdrawCall__Inputs(this);
  }

  get outputs(): CrossWithdrawCall__Outputs {
    return new CrossWithdrawCall__Outputs(this);
  }
}

export class CrossWithdrawCall__Inputs {
  _call: CrossWithdrawCall;

  constructor(call: CrossWithdrawCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get transfer(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class CrossWithdrawCall__Outputs {
  _call: CrossWithdrawCall;

  constructor(call: CrossWithdrawCall) {
    this._call = call;
  }
}

export class DeleteActionCall extends ethereum.Call {
  get inputs(): DeleteActionCall__Inputs {
    return new DeleteActionCall__Inputs(this);
  }

  get outputs(): DeleteActionCall__Outputs {
    return new DeleteActionCall__Outputs(this);
  }
}

export class DeleteActionCall__Inputs {
  _call: DeleteActionCall;

  constructor(call: DeleteActionCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeleteActionCall__Outputs {
  _call: DeleteActionCall;

  constructor(call: DeleteActionCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DoWithdrawCall extends ethereum.Call {
  get inputs(): DoWithdrawCall__Inputs {
    return new DoWithdrawCall__Inputs(this);
  }

  get outputs(): DoWithdrawCall__Outputs {
    return new DoWithdrawCall__Outputs(this);
  }
}

export class DoWithdrawCall__Inputs {
  _call: DoWithdrawCall;

  constructor(call: DoWithdrawCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DoWithdrawCall__Outputs {
  _call: DoWithdrawCall;

  constructor(call: DoWithdrawCall) {
    this._call = call;
  }
}

export class EscapeHatchCall extends ethereum.Call {
  get inputs(): EscapeHatchCall__Inputs {
    return new EscapeHatchCall__Inputs(this);
  }

  get outputs(): EscapeHatchCall__Outputs {
    return new EscapeHatchCall__Outputs(this);
  }
}

export class EscapeHatchCall__Inputs {
  _call: EscapeHatchCall;

  constructor(call: EscapeHatchCall) {
    this._call = call;
  }

  get actionTo(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get actionValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get actionData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class EscapeHatchCall__Outputs {
  _call: EscapeHatchCall;

  constructor(call: EscapeHatchCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ExecuteActionCall extends ethereum.Call {
  get inputs(): ExecuteActionCall__Inputs {
    return new ExecuteActionCall__Inputs(this);
  }

  get outputs(): ExecuteActionCall__Outputs {
    return new ExecuteActionCall__Outputs(this);
  }
}

export class ExecuteActionCall__Inputs {
  _call: ExecuteActionCall;

  constructor(call: ExecuteActionCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get actionTos(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get actionValues(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get actionDatas(): Array<Bytes> {
    return this._call.inputValues[3].value.toBytesArray();
  }
}

export class ExecuteActionCall__Outputs {
  _call: ExecuteActionCall;

  constructor(call: ExecuteActionCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InitCall extends ethereum.Call {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }

  get _moloch(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _minQuorum(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class ProposeActionCall extends ethereum.Call {
  get inputs(): ProposeActionCall__Inputs {
    return new ProposeActionCall__Inputs(this);
  }

  get outputs(): ProposeActionCall__Outputs {
    return new ProposeActionCall__Outputs(this);
  }
}

export class ProposeActionCall__Inputs {
  _call: ProposeActionCall;

  constructor(call: ProposeActionCall) {
    this._call = call;
  }

  get actionTos(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get actionValues(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get actionDatas(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get withdrawToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get withdrawAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get details(): string {
    return this._call.inputValues[5].value.toString();
  }

  get memberOrModule(): boolean {
    return this._call.inputValues[6].value.toBoolean();
  }
}

export class ProposeActionCall__Outputs {
  _call: ProposeActionCall;

  constructor(call: ProposeActionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetModuleCall extends ethereum.Call {
  get inputs(): SetModuleCall__Inputs {
    return new SetModuleCall__Inputs(this);
  }

  get outputs(): SetModuleCall__Outputs {
    return new SetModuleCall__Outputs(this);
  }
}

export class SetModuleCall__Inputs {
  _call: SetModuleCall;

  constructor(call: SetModuleCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetModuleCall__Outputs {
  _call: SetModuleCall;

  constructor(call: SetModuleCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SignCall extends ethereum.Call {
  get inputs(): SignCall__Inputs {
    return new SignCall__Inputs(this);
  }

  get outputs(): SignCall__Outputs {
    return new SignCall__Outputs(this);
  }
}

export class SignCall__Inputs {
  _call: SignCall;

  constructor(call: SignCall) {
    this._call = call;
  }

  get permissionHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get signatureHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get magicValue(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SignCall__Outputs {
  _call: SignCall;

  constructor(call: SignCall) {
    this._call = call;
  }
}
