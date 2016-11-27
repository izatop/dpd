/// <reference types="node" />
import { Transform } from 'stream';
export interface ArrayObject {
    [key: string]: string;
}
export declare class DataStreamTransform<T> extends Transform {
    last: string;
    header: Array<string>;
    constructor(header: any);
    convertRow(row: any): ArrayObject;
    _transform(chunk: any, encoding: any, done: any): void;
    data(fn: (row: T) => void): void;
}
export declare const createDataStream: <T>(file: any, header: any) => DataStreamTransform<T>;
