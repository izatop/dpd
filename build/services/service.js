/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../index.d.ts" />
/// <reference path="./soap.d.ts" />
'use strict';
const soap = require('soap');
const util = require('util');
const simplexml_1 = require('../simplexml');
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
        this.client[options.method]({ $xml: simplexml_1.createXMLFromObject(options.params) }, (error, result) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBRXBDLFlBQVksQ0FBQztBQUViLE1BQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLE1BQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLDRCQUFrQyxjQUFjLENBQUMsQ0FBQTtBQUVqRDtJQU1JLFlBQVksT0FBZ0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxJQUFJLENBQUksTUFBYSxFQUFFLFVBQWUsRUFBRSxFQUFVO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDZCxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFJLFFBQVEsR0FBRztnQkFDUCxJQUFJLEVBQUU7b0JBQ0YsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU07b0JBQzdDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHO2lCQUMxQzthQUNKLEVBQ0QsT0FBTyxHQUFHO2dCQUNOLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxFQUFFO2FBQ2IsQ0FBQztZQUVOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRztnQkFDekMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxD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