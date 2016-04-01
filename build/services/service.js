/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../index.d.ts" />
/// <reference path="./soap.d.ts" />
/// <reference path="../../typings/o2xml/index.d.ts" />
'use strict';
const soap = require('soap');
const util = require('util');
const o2xml_1 = require('o2xml');
class Service {
    constructor(context) {
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
    call(method, parameters, ns) {
        return new Promise((resolve, reject) => {
            if (!parameters) {
                parameters = {};
            }
            let envelope = {
                auth: {
                    clientNumber: this.context.credentials.client,
                    clientKey: this.context.credentials.key
                }
            }, options = {
                method: method,
                params: {}
            };
            Object.keys(parameters).forEach(function (key) {
                envelope[key] = parameters[key];
            });
            if (ns) {
                options.params = { [ns]: envelope };
            }
            else {
                options.params = envelope;
            }
            if (this.client) {
                this.send(options, resolve, reject);
            }
            else {
                let WSDLOptions = {
                    ignoredNamespaces: {
                        override: true,
                        namespaces: ['targetNamespace', 'typedNamespace']
                    }
                };
                soap.createClient(`http://${this.context.hostname}/services/${this.namespace}?wsdl`, WSDLOptions, (error, client) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        this.client = client;
                        this.send(options, resolve, reject);
                    }
                });
            }
        });
    }
    fixParameters(value) {
        if (util.isArray(value)) {
            return value.map(x => this.fixParameters(x));
        }
        else if (typeof value == 'object') {
            let converted = {};
            Object.keys(value).forEach(x => converted[x.indexOf('$') === 0 ? x : ':' + x] = this.fixParameters(value[x]));
            return converted;
        }
        return value;
    }
    send(options, resolve, reject) {
        this.client[options.method]({ $xml: o2xml_1.transform(options.params) }, (error, result) => {
            if (error) {
                error.requestBody = this.client.lastRequest;
                reject(error);
            }
            else {
                resolve(result.return);
            }
        });
    }
}
exports.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLHVEQUF1RDtBQUV2RCxZQUFZLENBQUM7QUFFYixNQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUM3QixNQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUM3Qix3QkFBd0IsT0FBTyxDQUFDLENBQUE7QUFFaEM7SUFNSSxZQUFZLE9BQWdCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsSUFBSSxDQUFJLE1BQWEsRUFBRSxVQUFlLEVBQUUsRUFBVTtRQUM5QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBSSxRQUFRLEdBQUc7Z0JBQ1AsSUFBSSxFQUFFO29CQUNGLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNO29CQUM3QyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRztpQkFDMUM7YUFDSixFQUNELE9BQU8sR0FBRztnQkFDTixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsRUFBRTthQUNiLENBQUM7WUFFTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUc7Z0JBQ3pDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFF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