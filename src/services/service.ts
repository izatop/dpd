/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../index.d.ts" />
/// <reference path="./easysoap.d.ts" />

import * as SOAPClient from 'easysoap';

// fix bug for underscore: https://github.com/jashkenas/underscore/issues/2293
declare var require;
require('../underscore-fix.js');

export class Service {
    namespace:string;

    context:IContext;
    client:SOAPClient.Client;

    constructor(context:IContext) {
        this.context = context;
    }

    /**
     * Deferred creation.
     */
    createClient():void {
        if (!this.client) {
            this.client = new SOAPClient.Client(
                {
                    host: this.context.hostname,
                    path: `/services/${this.namespace}`,
                    wsdl: `/services/${this.namespace}?wsdl`
                },
                {
                    secure: true
                }
            );
        }
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
        this.createClient();
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

            console.log('request:', options);

            this.client.call(options).done(
                (result) => Service.handle(result, resolve, reject),
                (failure) => reject(failure)
            );
        });
    }

    /**
     * Handle a WebService response.
     *
     * @param body
     * @param resolve
     * @param reject
     */
    private static handle(body:{data:any, response:any, header:any}, resolve, reject) {
        let data = body.data;

        if (data.hasOwnProperty('Fault')) {
            if (data.Fault.length > 0) {
                reject(new Error(data.Fault[0]._value.faultstring));
            } else {
                reject(new Error('Something went wrong'));
            }
        } else {
            resolve(data.hasOwnProperty('return') ? data.return : null);
        }
    }
}


