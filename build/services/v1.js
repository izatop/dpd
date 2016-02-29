/// <reference path="./v1.d.ts" />
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var service_1 = require('./service');
/**
 * Geography Service
 */
var Geography = (function (_super) {
    __extends(Geography, _super);
    function Geography() {
        _super.apply(this, arguments);
        this.namespace = 'geography';
    }
    /**
     * @param parameters
     * @returns {Promise<getCitiesCashPayResponse>}
     */
    Geography.prototype.getCitiesCashPay = function (parameters) {
        if (parameters === void 0) { parameters = {}; }
        return this.call('getCitiesCashPay', parameters);
    };
    /**
     * @param parameters
     * @returns {Promise<getTerminalsSelfDelivery2Response>}
     */
    Geography.prototype.getTerminalsSelfDelivery2 = function (parameters) {
        return this.call('getTerminalsSelfDelivery2', parameters);
    };
    /**
     * @param parameters
     * @returns {Promise<getParcelShopsResponse>}
     */
    Geography.prototype.getParcelShops = function (parameters) {
        return this.call('getParcelShops', parameters, 'request');
    };
    return Geography;
}(service_1.Service));
exports.Geography = Geography;
var Tracing = (function (_super) {
    __extends(Tracing, _super);
    function Tracing() {
        _super.apply(this, arguments);
        this.namespace = 'tracing';
    }
    /**
     * @param parameters {TracingPort.ConfirmRequest}
     * @returns {Promise<TracingPort.ConfirmResponse>}
     */
    Tracing.prototype.confirm = function (parameters) {
        return this.call('confirm', parameters);
    };
    /**
     * @param parameters {TracingPort.GetStatesByClientRequest}
     * @returns {Promise<TracingPort.GetStatesByClientRequest>}
     */
    Tracing.prototype.getStatesByClient = function (parameters) {
        return this.call('getStatesByClient', parameters);
    };
    /**
     * @param parameters {TracingPort.GetStatesByClientOrderRequest}
     * @returns {Promise<TracingPort.GetStatesByClientOrderResponse>}
     */
    Tracing.prototype.getStatesByClientOrder = function (parameters) {
        return this.call('getStatesByClientOrder', parameters);
    };
    /**
     * @param parameters {TracingPort.GetStatesByClientParcelRequest}
     * @returns {Promise<TracingPort.GetStatesByClientParcelResponse>}
     */
    Tracing.prototype.getStatesByClientParcel = function (parameters) {
        return this.call('getStatesByClientParcel', parameters);
    };
    /**
     * @param parameters {TracingPort.GetStatesByDPDOrderRequest}
     * @returns {Promise<TracingPort.GetStatesByDPDOrderResponse>}
     */
    Tracing.prototype.getStatesByDPDOrder = function (parameters) {
        return this.call('getStatesByDPDOrder', parameters);
    };
    return Tracing;
}(service_1.Service));
exports.Tracing = Tracing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDLFlBQVksQ0FBQzs7Ozs7O0FBRWIsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBRWxDOztHQUVHO0FBQ0g7SUFBK0IsNkJBQU87SUFBdEM7UUFBK0IsOEJBQU87UUFDbEMsY0FBUyxHQUFVLFdBQVcsQ0FBQztJQXlCbkMsQ0FBQztJQXZCRzs7O09BR0c7SUFDSCxvQ0FBZ0IsR0FBaEIsVUFBaUIsVUFBcUQ7UUFBckQsMEJBQXFELEdBQXJELGVBQXFEO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7O09BR0c7SUFDSCw2Q0FBeUIsR0FBekIsVUFBMEIsVUFBeUQ7UUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtDQUFjLEdBQWQsVUFBZSxVQUE4QztRQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUErQixpQkFBTyxHQTBCckM7QUExQlksaUJBQVMsWUEwQnJCLENBQUE7QUFFRDtJQUE2QiwyQkFBTztJQUFwQztRQUE2Qiw4QkFBTztRQUNoQyxjQUFTLEdBQVUsU0FBUyxDQUFDO0lBeUNqQyxDQUFDO0lBdkNHOzs7T0FHRztJQUNILHlCQUFPLEdBQVAsVUFBUSxVQUFxQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1DQUFpQixHQUFqQixVQUFrQixVQUErQztRQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0NBQXNCLEdBQXRCLFVBQXVCLFVBQW9EO1FBQ3ZFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7O09BR0c7SUFDSCx5Q0FBdUIsR0FBdkIsVUFBd0IsVUFBcUQ7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7T0FHRztJQUNILHFDQUFtQixHQUFuQixVQUFvQixVQUFpRDtRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUExQ0QsQ0FBNkIsaUJBQU8sR0EwQ25DO0FBMUNZLGVBQU8sVUEwQ25CLENBQUEifQ==