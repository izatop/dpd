"use strict";
const assert_1 = require('assert');
const V1 = require('./services/v1');
const V2 = require('./services/v2');
const path_1 = require("path");
class Credentials {
    constructor(client, key) {
        this.client = client;
        this.key = key;
    }
}
exports.Credentials = Credentials;
class DPD {
    constructor(options) {
        this.resources = {
            cities: path_1.resolve(__dirname, './resources/cities.csv')
        };
        assert_1.ok(options.secretKey, 'A "key" option is required');
        assert_1.ok(options.clientId, 'A "client" option is required');
        assert_1.ok(options.hostname, 'A "hostname" option is required');
        if (options.resources && options.resources) {
            this.resources = {
                cities: options.resources.cities
            };
        }
        this.hostname = options.hostname;
        this.credentials = new Credentials(options.clientId, options.secretKey);
        this.geography = new V1.Geography(this);
        this.geography2 = new V2.Geography2(this);
        this.calculator2 = new V2.Calculator2(this);
        this.order2 = new V2.Order2(this);
        this.tracing = new V1.Tracing(this);
        this.tracing2 = new V2.Tracing2(this);
        this.label = new V1.Label(this);
    }
}
exports.DPD = DPD;
//# sourceMappingURL=index.js.map