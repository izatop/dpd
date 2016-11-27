"use strict";
const stream_1 = require('stream');
const fs_1 = require('fs');
class DataStreamTransform extends stream_1.Transform {
    constructor(header) {
        super({ objectMode: true });
        this.last = "";
        this.header = [];
        this.header = header;
    }
    convertRow(row) {
        let result = {};
        this.header.forEach((x, y) => result[x] = row[y] || null);
        return result;
    }
    _transform(chunk, encoding, done) {
        let string = this.last.concat(chunk.toString()), lines = string.split("\n");
        this.last = lines.pop();
        lines.map(x => x.replace("\r", '').split("\t"))
            .forEach(x => this.push(this.convertRow(x)));
        done();
    }
    data(fn) {
        this.on('data', fn);
    }
}
exports.DataStreamTransform = DataStreamTransform;
exports.createDataStream = (file, header) => {
    let readableStream = fs_1.createReadStream(file, { encoding: 'UTF-8' }), dataStreamTransform = new DataStreamTransform(header);
    return readableStream.pipe(dataStreamTransform);
};
//# sourceMappingURL=datastore.js.map