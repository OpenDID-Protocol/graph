import {
    log,
    store,
    Bytes,
    BigInt,
    Entity,
    Value,
    ValueKind,
    ByteArray
} from "@graphprotocol/graph-ts";

import {
    Bind as BindEvent,
    Controller as ControllerEvent,
    Label as LabelEvent,
    Proxy as ProxyEvent,
    Register as RegisterEvent,
    Transfer as TransferEvent
} from "../generated/DIDRegistry/DIDRegistry"

class BlockEntity extends Entity {
    get blockNumber(): BigInt {
        let value = this.get("blockNumber");
        return value!.toBigInt();
    }

    set blockNumber(value: BigInt) {
        this.set("blockNumber", Value.fromBigInt(value));
    }

    get blockTimestamp(): BigInt {
        let value = this.get("blockTimestamp");
        return value!.toBigInt();
    }

    set blockTimestamp(value: BigInt) {
        this.set("blockTimestamp", Value.fromBigInt(value));
    }

    get transactionHash(): Bytes {
        let value = this.get("transactionHash");
        return value!.toBytes();
    }

    set transactionHash(value: Bytes) {
        this.set("transactionHash", Value.fromBytes(value));
    }
}

export class Name extends BlockEntity {
    constructor(id: string) {
        super();
        this.set("id", Value.fromString(id));
    }

    save(): void {
        let id = this.get("id");
        assert(id != null, "Cannot save Name entity without an ID");
        if (id) {
            assert(
                id.kind == ValueKind.STRING,
                `Entities of type Name must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
            );
            store.set("Name", id.toString(), this);
        }
    }

    static load(id: string): Name | null {
        return changetype<Name | null>(store.get("Name", id));
    }

    get id(): string {
        let value = this.get("id");
        return value!.toString();
    }

    set id(value: string) {
        this.set("id", Value.fromString(value));
    }

    get owner(): Bytes {
        let value = this.get("owner");
        return value!.toBytes();
    }

    set owner(value: Bytes) {
        this.set("owner", Value.fromBytes(value));
    }

    get name(): string {
        let value = this.get("name");
        return value!.toString();
    }

    set name(value: string) {
        this.set("name", Value.fromString(value));
    }

    get createdBlockNumber(): BigInt {
        let value = this.get("createdBlockNumber");
        return value!.toBigInt();
    }

    set createdBlockNumber(value: BigInt) {
        this.set("createdBlockNumber", Value.fromBigInt(value));
    }

    get createdBlockTimestamp(): BigInt {
        let value = this.get("createdBlockTimestamp");
        return value!.toBigInt();
    }

    set createdBlockTimestamp(value: BigInt) {
        this.set("createdBlockTimestamp", Value.fromBigInt(value));
    }

    get createdTransactionHash(): Bytes {
        let value = this.get("createdTransactionHash");
        return value!.toBytes();
    }

    set createdTransactionHash(value: Bytes) {
        this.set("createdTransactionHash", Value.fromBytes(value));
    }
}

export class Record extends BlockEntity {
    constructor(id: string) {
        super();
        this.set("id", Value.fromString(id));
    }

    save(): void {
        let id = this.get("id");
        assert(id != null, "Cannot save Record entity without an ID");
        if (id) {
            assert(
                id.kind == ValueKind.STRING,
                `Entities of type Record must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
            );
            store.set("Record", id.toString(), this);
        }
    }

    static load(id: string): Record | null {
        return changetype<Record | null>(store.get("Record", id));
    }

    get id(): string {
        let value = this.get("id");
        return value!.toString();
    }

    set id(value: string) {
        this.set("id", Value.fromString(value));
    }

    get tokenId(): string {
        let value = this.get("tokenId");
        return value!.toString();
    }

    set tokenId(value: string) {
        this.set("tokenId", Value.fromString(value));
    }

    get label(): string {
        let value = this.get("label");
        return value!.toString();
    }

    set label(value: string) {
        this.set("label", Value.fromString(value));
    }

    get content(): string {
        let value = this.get("content");
        return value!.toString();
    }

    set content(value: string) {
        this.set("content", Value.fromString(value));
    }
}

export class Controller extends BlockEntity {
    constructor(id: string) {
        super();
        this.set("id", Value.fromString(id));
    }

    save(): void {
        let id = this.get("id");
        assert(id != null, "Cannot save Controller entity without an ID");
        if (id) {
            assert(
                id.kind == ValueKind.STRING,
                `Entities of type Controller must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
            );
            store.set("Controller", id.toString(), this);
        }
    }

    static load(id: string): Controller | null {
        return changetype<Controller | null>(store.get("Controller", id));
    }

    get id(): string {
        let value = this.get("id");
        return value!.toString();
    }

    set id(value: string) {
        this.set("id", Value.fromString(value));
    }

    get enabled(): boolean {
        let value = this.get("enabled");
        return value!.toBoolean();
    }

    set enabled(value: boolean) {
        this.set("enabled", Value.fromBoolean(value));
    }
}

export class Proxy extends BlockEntity {
    constructor(id: string) {
        super();
        this.set("id", Value.fromString(id));
    }

    save(): void {
        let id = this.get("id");
        assert(id != null, "Cannot save Proxy entity without an ID");
        if (id) {
            assert(
                id.kind == ValueKind.STRING,
                `Entities of type Proxy must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
            );
            store.set("Proxy", id.toString(), this);
        }
    }

    static load(id: string): Proxy | null {
        return changetype<Proxy | null>(store.get("Proxy", id));
    }

    get id(): string {
        let value = this.get("id");
        return value!.toString();
    }

    set id(value: string) {
        this.set("id", Value.fromString(value));
    }

    get enabled(): boolean {
        let value = this.get("enabled");
        return value!.toBoolean();
    }

    set enabled(value: boolean) {
        this.set("enabled", Value.fromBoolean(value));
    }
}

export class Label extends BlockEntity {
    constructor(id: string) {
        super();
        this.set("id", Value.fromString(id));
    }

    save(): void {
        let id = this.get("id");
        assert(id != null, "Cannot save Label entity without an ID");
        if (id) {
            assert(
                id.kind == ValueKind.STRING,
                `Entities of type Label must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
            );
            store.set("Label", id.toString(), this);
        }
    }

    static load(id: string): Label | null {
        return changetype<Label | null>(store.get("Label", id));
    }

    get id(): string {
        let value = this.get("id");
        return value!.toString();
    }

    set id(value: string) {
        this.set("id", Value.fromString(value));
    }

    get enabled(): boolean {
        let value = this.get("enabled");
        return value!.toBoolean();
    }

    set enabled(value: boolean) {
        this.set("enabled", Value.fromBoolean(value));
    }
}

export function handleBind(event: BindEvent): void {
    let
        tokenId = event.params.tokenId.toString(),
        label = event.params.label,
        content = event.params.value,
        id = tokenId + '#' + label;
    let entity = Record.load(id);
    if (entity == null) {
        if (content != '') {
            entity = new Record(id);
            entity.tokenId = tokenId;
            entity.label = label;
            entity.content = content;

            entity.blockNumber = event.block.number;
            entity.blockTimestamp = event.block.timestamp;
            entity.transactionHash = event.transaction.hash;

            entity.save();
        } else {
            log.error('Record {} not exist but unset content.', [id])
        }
    } else {
        if (content == '') {
            store.remove('Record', id);
        } else {
            // update:
            entity.content = content;

            entity.blockNumber = event.block.number;
            entity.blockTimestamp = event.block.timestamp;
            entity.transactionHash = event.transaction.hash;

            entity.save();
        }
    }
}

export function handleController(event: ControllerEvent): void {
    let
        addr = event.params.controller,
        address = addr.toHexString(),
        add = event.params.supported;
    let entity = Controller.load(address);
    if (entity == null) {
        if (add) {
            entity = new Controller(address);
            entity.enabled = true;
            entity.blockNumber = event.block.number
            entity.blockTimestamp = event.block.timestamp
            entity.transactionHash = event.transaction.hash
            entity.save();
        } else {
            log.error('Controller {} not exist while set enabled = false.', [address]);
        }
    } else {
        entity.enabled = add;
        entity.blockNumber = event.block.number
        entity.blockTimestamp = event.block.timestamp
        entity.transactionHash = event.transaction.hash
        entity.save();
    }
}

export function handleProxy(event: ProxyEvent): void {
    let
        addr = event.params.proxy,
        address = addr.toHexString(),
        add = event.params.add;
    let entity = Proxy.load(address);
    if (entity == null) {
        if (add) {
            entity = new Proxy(address);
            entity.enabled = true;
            entity.blockNumber = event.block.number
            entity.blockTimestamp = event.block.timestamp
            entity.transactionHash = event.transaction.hash
            entity.save();
        } else {
            log.error('Proxy {} not exist while set enabled = false.', [address]);
        }
    } else {
        entity.enabled = add;
        entity.blockNumber = event.block.number
        entity.blockTimestamp = event.block.timestamp
        entity.transactionHash = event.transaction.hash
        entity.save();
    }
}

export function handleLabel(event: LabelEvent): void {
    let
        id = event.params.label,
        add = event.params.add;
    let entity = Label.load(id);
    if (entity == null) {
        if (add) {
            entity = new Label(id);
            entity.enabled = true;
            entity.blockNumber = event.block.number
            entity.blockTimestamp = event.block.timestamp
            entity.transactionHash = event.transaction.hash
            entity.save();
        } else {
            log.error('Label not exist while set enabled = false.', []);
        }
    } else {
        entity.enabled = add;
        entity.blockNumber = event.block.number
        entity.blockTimestamp = event.block.timestamp
        entity.transactionHash = event.transaction.hash
        entity.save();
    }
}

export function handleRegister(event: RegisterEvent): void {
    let
        id = event.params.tokenId.toString(),
        owner = event.params.registrant,
        name = event.params.name;
    let entity = new Name(id);
    entity.owner = owner;
    entity.name = event.params.name

    entity.createdBlockNumber = event.block.number
    entity.createdBlockTimestamp = event.block.timestamp
    entity.createdTransactionHash = event.transaction.hash

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
}

export function handleTransfer(event: TransferEvent): void {
    let
        id = event.params.tokenId.toString(),
        to = event.params.to;
    let entity = Name.load(id);
    if (entity == null) {
        log.error('Name {} not found but transferred', [id]);
    } else {
        entity.owner = to;

        entity.blockNumber = event.block.number
        entity.blockTimestamp = event.block.timestamp
        entity.transactionHash = event.transaction.hash

        entity.save()
    }
}
