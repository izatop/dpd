/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../index.d.ts" />
/// <reference path="./easysoap.d.ts" />
'use strict';
var easysoap_1 = require('easysoap');
var Service = (function () {
    function Service(context) {
        this.context = context;
    }
    /**
     * Deferred creation.
     */
    Service.prototype.createClient = function () {
        if (!this.client) {
            this.client = easysoap_1.createClient({
                host: this.context.hostname,
                path: "/services/" + this.namespace,
                wsdl: "/services/" + this.namespace + "?wsdl"
            }, {
                secure: true
            });
        }
    };
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
        this.createClient();
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
            _this.client.call(options)
                .then(function (result) { return Service.handle(result, resolve, reject); })
                .catch(function (failure) { return reject(failure); });
            var _a;
        });
    };
    /**
     * Handle a WebService response.
     *
     * @param body
     * @param resolve
     * @param reject
     */
    Service.handle = function (body, resolve, reject) {
        var data = body.data;
        console.log(body);
        if (data.hasOwnProperty('Fault')) {
            if (data.Fault.length > 0) {
                reject(new Error(data.Fault[0]._value.faultstring));
            }
            else {
                reject(new Error('Something went wrong'));
            }
        }
        else {
            resolve(data.hasOwnProperty('return') ? data.return : null);
        }
    };
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyxzQ0FBc0M7QUFDdEMsd0NBQXdDO0FBRXhDLFlBQVksQ0FBQztBQUViLHlCQUF1QyxVQUFVLENBQUMsQ0FBQTtBQUVsRDtJQU1JLGlCQUFZLE9BQWdCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNILDhCQUFZLEdBQVo7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBWSxDQUN0QjtnQkFDSSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2dCQUMzQixJQUFJLEVBQUUsZUFBYSxJQUFJLENBQUMsU0FBVztnQkFDbkMsSUFBSSxFQUFFLGVBQWEsSUFBSSxDQUFDLFNBQVMsVUFBTzthQUMzQyxFQUNEO2dCQUNJLE1BQU0sRUFBRSxJQUFJO2FBQ2YsQ0FDSixDQUFDO1FBQ04sQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsc0JBQUksR0FBSixVQUFRLE1BQWEsRUFBRSxVQUFxQixFQUFFLEVBQWdCO1FBQTlELGlCQWdDQztRQWhDc0IsMEJBQXFCLEdBQXJCLGlCQUFxQjtRQUFFLGtCQUFnQixHQUFoQixTQUFnQjtRQUMxRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDcEIsQ0FBQztZQUVELElBQUksUUFBUSxHQUFHO2dCQUNQLElBQUksRUFBRTtvQkFDRixZQUFZLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTTtvQkFDN0MsU0FBUyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUc7aUJBQzFDO2FBQ0osRUFDRCxPQUFPLEdBQUc7Z0JBQ04sTUFBTSxFQUFFLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLEVBQUU7YUFDYixDQUFDO1lBRU4sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHO2dCQUN6QyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQUMsR0FBQyxFQUFFLENBQUMsR0FBRSxRQUFRLEtBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDOUIsQ0FBQztZQUVELEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDcEIsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUF2QyxDQUF1QyxDQUFDO2lCQUN2RCxLQUFLLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQWYsQ0FBZSxDQUFDLENBQUM7O1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNZLGNBQU0sR0FBckIsVUFBc0IsSUFBeUMsRUFBRSxPQUFPLEVBQUUsTUFBTTtRQUM1RSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNMLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQTNGRCxJQTJGQztBQTNGWSxlQUFPLFVBMkZuQixDQUFBIn0=