/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../index.d.ts" />
/// <reference path="./soap.d.ts" />

'use strict';

import * as soap from 'soap';
import * as util from 'util';

export class Service {
    namespace:string;

    context:IContext;
    client:any;

    constructor(context:IContext) {
        this.context = context;
    }

    /**
     * This function calls the service own methods.
     *
     * @param method        Service's method name
     * @param parameters    Method's parameters
     * @param ns            Method's envelope namespace which includes parameters.
     * @returns {Promise<T>}
     */
    call<T>(method:string, parameters:any = null, ns:string = null):Promise<T> {
        return new Promise((resolve, reject) => {
            if (parameters === null) {
                parameters = {};
            }

            let envelope = {
                    auth: {
                        clientNumber: this.context.credentials.client,
                        clientKey: this.context.credentials.key
                    }
                },
                options = {
                    method: method,
                    params: {}
                };

            Object.keys(parameters).forEach(function (key) {
                envelope[key] = parameters[key];
            });

            if (ns) {
                options.params = {[ns]: envelope};
            } else {
                options.params = envelope;
            }

            if (this.client) {
                this.send(options, resolve, reject);
            } else {
                let WSDLOptions = {
                    ignoredNamespaces: {
                        override: true,
                        namespaces: [ 'targetNamespace', 'typedNamespace' ]
                    }
                };

                soap.createClient(`http://${this.context.hostname}/services/${this.namespace}?wsdl`, WSDLOptions, (error, client) => {
                    if (error) {
                        reject(error);
                    } else {
                        this.client = client;
                        this.send(options, resolve, reject);
                    }
                });
            }
        });
    }

    private fixParameters(value:any) {
        if (util.isArray(value)) {
            return value.map(x => this.fixParameters(x));
        } else if (typeof value == 'object') {
            let converted = {};
            Object.keys(value).forEach(x => converted[':' + x] = this.fixParameters(value[x]));
            return converted;
        }

        return value;
    }

    private send(options, resolve, reject) {
        this.client[options.method](this.fixParameters(options.params), (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.return);
            }
        });
    }
}