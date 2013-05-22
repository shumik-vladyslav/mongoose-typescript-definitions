///<reference path='node.d.ts' />
///<reference path='mongodb.d.ts' />

module "mongoose" {
    import Mongo = module("mongodb")

    export interface Mongoose {
        constructor();
        set (key: string, value: string): Mongoose;
        get (key: string): string;
        createConnection(uri?: string, options?: any): Connection;

        connect(any): Mongoose;

        disconnect(fn: (err?: any) => void ): Mongoose;
        model(name: string, schema?: Schema, collection?: string, skipInit?: bool): Model;
        modelNames(): string[];
        plugin(fn: (any) => any, opts?: any): Mongoose;
        mongo: Mongo;
        version: string;
        connection: Connection;
    }

    export function set(key: string, value: string): Mongoose;
    export function get(key: string): string;
    export function createConnection(uri ? : string, options?: any): Connection;

    export function connect(any): Mongoose;

    export function disconnect(fn: (err?: any) => void ): Mongoose;
    export function model(name: string, schema?: Schema, collection?: string, skipInit?: bool): Model;
    export function modelNames(): string[];
    export function plugin(fn: (any) => any, opts?: any): Mongoose;
    export var mongo: Mongo;
    export var version: string;
    export var connection: Connection;
    
    export class Collection {
        name: string;
    }

    export class Connection implements EventEmitter {
        constructor(base: Mongoose);

        addListener(event: string, listener: Function);
        on(event: string, listener: Function);
        once(event: string, listener: Function): void;
        removeListener(event: string, listener: Function): void;
        removeAllListeners(event: string): void;
        setMaxListeners(n: number): void;
        listeners(event: string): { Function; }[];
        emit(event: string, ...args: any[]): void;

        open(connection_string: string,
             database?: string,
             port?: number,
             options?: any,
             callback?: (any) => any): Connection;

        openSet(uris: string,
                database?: string,
                options?: any,
                callback?: (any) => any): Connection;

        close(callback?: (any) => any): Connection;
        collection(name: string, options?: any): Collection;
        model(name: string, schema?: Schema, collection?: string): Model;
        modelNames(): string[];
        setProfiling(level: number, ms: number, callback: (any) => any): any;
        db: Mongo.Db;
        collections: any;
        readyState: number;
    }

    export class Schema {
        constructor(definition: any, options?: any);
        static Types: {
            ObjectId: any;
        };

        methods: any;
        statics: any;
        path(path: string): any;
    }

    export class SchemaType { }

    export class VirtualType { }

    export class Query {
        exec(): Promise;
        exec(operation: string): Promise;
        exec(callback: (err: any, res: any) => any): Promise;
        exec(operation: string, callback: (err: any, res: any) => void ): Promise;

        skip(x: number): Query;
        limit(x: number): Query;
    }

    export class Promise { }

    export interface Model {
        new (any): Document;

        find(conditions: any): Query;
        find(conditions: any, fields: any): Query;
        find(conditions: any, fields: any, options: any): Query;
        find(conditions: any, fields: any, options: any, callback: (err: any, res: any) => void ): Query;
        find(conditions: any, callback: (err: any, res: any) => void ): Query;
        find(conditions: any, fields: any, callback: (err: any, res: any) => void ): Query;

        findOne(conditions: any): Query;
        findOne(conditions: any, fields: any): Query;
        findOne(conditions: any, fields: any, options: any): Query;
        findOne(conditions: any, fields: any, options: any, callback: (err: any, res: any) => void ): Query;
        findOne(conditions: any, callback: (err: any, res: any) => void ): Query;
        findOne(conditions: any, fields: any, callback: (err: any, res: any) => void ): Query;

        findById(id: string): Query;
        findById(id: string, fields: any): Query;
        findById(id: string, fields: any, options: any): Query;
        findById(id: string, fields: any, options: any, callback: (err: any, res: any) => void ): Query;
        findById(id: string, callback: (err: any, res: any) => void ): Query;
        findById(id: string, fields: any, callback: (err: any, res: any) => void ): Query;

        findByIdAndUpdate(id: string): Query;
        findByIdAndUpdate(id: string, update: any): Query;
        findByIdAndUpdate(id: string, update: any, options: any): Query;
        findByIdAndUpdate(id: string, update: any, options: any, callback: (err: any, res: any) => void ): Query;
        findByIdAndUpdate(id: string, callback: (err: any, res: any) => void ): Query;
        findByIdAndUpdate(id: string, update: any, callback: (err: any, res: any) => void ): Query;

        update(conditions: any,
               update: any,
               options?: any,
               callback?: (err: any, affectedRows: number, raw: any) => void ): Query;
        update(conditions: any,
               update: any,
               callback?: (err: any, affectedRows: number, raw: any) => void ): Query;

        create(doc: any, fn: (err, res) => void ): void;

        collection: Collection;

        remove(conditions: any, callback?: (err) => void): Query;
    }

    export var Model: {
        (any);
        constructor(doc?: any);
        new (any);

        find(conditions: any): Query;
        find(conditions: any, fields: any): Query;
        find(conditions: any, fields: any, options: any): Query;
        find(conditions: any, fields: any, options: any, callback: (err: any, res: any) => void ): Query;
        find(conditions: any, callback: (err: any, res: any) => void ): Query;
        find(conditions: any, fields: any, callback: (err: any, res: any) => void ): Query;

        findById(id: string): Query;
        findById(id: string, fields: any): Query;
        findById(id: string, fields: any, options: any): Query;
        findById(id: string, fields: any, options: any, callback: (err: any, res: any) => void ): Query;
        findById(id: string, callback: (err: any, res: any) => void ): Query;
        findById(id: string, fields: any, callback: (err: any, res: any) => void ): Query;

        collection: Collection;
    }

    export interface Document {
        _id: string;
        update(doc: any, options: any, callback: (any) => any): Query;
        save(fn?: (err: any, res: any) => void ): void;
        remove(callback?: (err) => void ): Query;
    }

    export class MongooseError { }

    export class Types { }

    export class SchemaTypes { }
}


    
