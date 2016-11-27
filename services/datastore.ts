import {Transform} from 'stream';
import {createReadStream} from 'fs';

export interface ArrayObject {
    [key:string]:string;
}

export class DataStreamTransform<T> extends Transform {
    last:string = "";
    header:Array<string> = [];

    constructor(header) {
        super({objectMode: true});
        this.header = header;
    }

    convertRow(row): ArrayObject {
        let result:ArrayObject = {};
        this.header.forEach((x, y) => result[x] = row[y] || null);
        return result;
    }

    _transform(chunk, encoding, done) {
        let string = this.last.concat(chunk.toString()),
            lines = string.split("\n");

        this.last = lines.pop();
        lines.map(x => x.replace("\r", '').split("\t"))
            .forEach(x => this.push(this.convertRow(x)));

        done();
    }
    
    data(fn: (row: T) => void) {
        this.on('data', fn);
    }
}

export const createDataStream = <T>(file, header): DataStreamTransform<T> => {
    let readableStream = createReadStream(file, {encoding: 'UTF-8'}),
        dataStreamTransform = new DataStreamTransform(header);
    return readableStream.pipe(dataStreamTransform);
};
