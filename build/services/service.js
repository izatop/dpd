/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../index.d.ts" />
/// <reference path="./soap.d.ts" />
'use strict';
var soap = require('soap');
var util = require('util');
var Service = (function () {
    function Service(context) {
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
    Service.prototype.call = function (method, parameters, ns) {
        var _this = this;
        if (parameters === void 0) { parameters = null; }
        if (ns === void 0) { ns = null; }
        return new Promise(function (resolve, reject) {
            if (parameters === null) {
                parameters = {};
            }
            var envelope = {
                auth: {
                    clientNumber: _this.context.credentials.client,
                    clientKey: _this.context.credentials.key
                }
            }, options = {
                method: method,
                params: {}
            };
            Object.keys(parameters).forEach(function (key) {
                envelope[key] = parameters[key];
            });
            if (ns) {
                options.params = (_a = {}, _a[ns] = envelope, _a);
            }
            else {
                options.params = envelope;
            }
            if (_this.client) {
                _this.send(options, resolve, reject);
            }
            else {
                var WSDLOptions = {
                    ignoredNamespaces: {
                        override: true,
                        namespaces: ['targetNamespace', 'typedNamespace']
                    }
                };
                soap.createClient("http://" + _this.context.hostname + "/services/" + _this.namespace + "?wsdl", WSDLOptions, function (error, client) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        _this.client = client;
                        _this.send(options, resolve, reject);
                    }
                });
            }
            var _a;
        });
    };
    Service.prototype.fixParameters = function (value) {
        var _this = this;
        if (util.isArray(value)) {
            return value.map(function (x) { return _this.fixParameters(x); });
        }
        else if (typeof value == 'object') {
            var converted_1 = {};
            Object.keys(value).forEach(function (x) { return converted_1[':' + x] = _this.fixParameters(value[x]); });
            return converted_1;
        }
        return value;
    };
    Service.prototype.send = function (options, resolve, reject) {
        this.client[options.method](this.fixParameters(options.params), function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(result.return);
            }
        });
    };
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBRXBDLFlBQVksQ0FBQztBQUViLElBQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLElBQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBRTdCO0lBTUksaUJBQVksT0FBZ0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxzQkFBSSxHQUFKLFVBQVEsTUFBYSxFQUFFLFVBQXFCLEVBQUUsRUFBZ0I7UUFBOUQsaUJBK0NDO1FBL0NzQiwwQkFBcUIsR0FBckIsaUJBQXFCO1FBQUUsa0JBQWdCLEdBQWhCLFNBQWdCO1FBQzFELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFJLFFBQVEsR0FBRztnQkFDUCxJQUFJLEVBQUU7b0JBQ0YsWUFBWSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU07b0JBQzdDLFNBQVMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHO2lCQUMxQzthQUNKLEVBQ0QsT0FBTyxHQUFHO2dCQUNOLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxFQUFFO2FBQ2IsQ0FBQztZQUVOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRztnQkFDekMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxH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