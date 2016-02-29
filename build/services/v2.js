/// <reference path="./v2.d.ts" />
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var service_1 = require('./service');
var Geography2 = (function (_super) {
    __extends(Geography2, _super);
    function Geography2() {
        _super.apply(this, arguments);
        this.namespace = 'geography2';
    }
    /**
     * @param parameters {Geography2Port.getTerminalsSelfDelivery2Request}
     * @returns {Promise<Geography2Port.getTerminalsSelfDelivery2Response>}
     */
    Geography2.prototype.getTerminalsSelfDelivery2 = function (parameters) {
        return this.call('getTerminalsSelfDelivery2', parameters);
    };
    /**
     * @param parameters {Geography2Port.getParcelShopsRequest}
     * @returns {Promise<Geography2Port.getParcelShopsResponse>}
     */
    Geography2.prototype.getParcelShops = function (parameters) {
        return this.call('getParcelShops', parameters, 'request');
    };
    /**
     * @param parameters {Geography2Port.getStoragePeriodRequest}
     * @returns {Promise<Geography2Port.getStoragePeriodResponse>}
     */
    Geography2.prototype.getStoragePeriod = function (parameters) {
        return this.call('getStoragePeriod', parameters, 'request');
    };
    return Geography2;
}(service_1.Service));
exports.Geography2 = Geography2;
var Calculator2 = (function (_super) {
    __extends(Calculator2, _super);
    function Calculator2() {
        _super.apply(this, arguments);
        this.namespace = 'calculator2';
    }
    /**
     * @param parameters {Calculator2Port.getServiceCost2Request}
     * @returns {Promise<Calculator2Port.getServiceCost2Response>}
     */
    Calculator2.prototype.getServiceCost2 = function (parameters) {
        return this.call('getServiceCost2', parameters, 'request');
    };
    /**
     * @param parameters {Calculator2Port.getServiceCostByParcels2Request}
     * @returns {Promise<Calculator2Port.getServiceCostByParcels2Response>}
     */
    Calculator2.prototype.getServiceCostByParcels2 = function (parameters) {
        return this.call('getServiceCostByParcels2', parameters, 'request');
    };
    return Calculator2;
}(service_1.Service));
exports.Calculator2 = Calculator2;
var Order2 = (function (_super) {
    __extends(Order2, _super);
    function Order2() {
        _super.apply(this, arguments);
        this.namespace = 'order2';
    }
    /**
     * @param parameters {Order2Port.CreateOrderRequest}
     * @returns {Promise<Order2Port.CreateOrderResponse>}
     */
    Order2.prototype.createOrder = function (parameters) {
        return this.call("createOrder", parameters, 'orders');
    };
    /**
     * @param parameters {Order2Port.GetOrderStatusRequest}
     * @returns {Promise<Order2Port.GetOrderStatusResponse>}
     */
    Order2.prototype.getOrderStatus = function (parameters) {
        return this.call("getOrderStatus", parameters, 'orderStatus');
    };
    /**
     * @param parameters {Order2Port.CreateAddressRequest}
     * @returns {Promise<Order2Port.CreateAddressResponse>}
     */
    Order2.prototype.createAddress = function (parameters) {
        return this.call("createAddress", parameters, 'address');
    };
    /**
     * @param parameters {Order2Port.UpdateAddressRequest}
     * @returns {Promise<Order2Port.UpdateAddressResponse>}
     */
    Order2.prototype.updateAddress = function (parameters) {
        return this.call("updateAddress", parameters, 'address');
    };
    /**
     * @param parameters {Order2Port.GetInvoiceFileRequest}
     * @returns {Promise<Order2Port.GetInvoiceFileResponse>}
     */
    Order2.prototype.getInvoiceFile = function (parameters) {
        return this.call("getInvoiceFile", parameters, 'request');
    };
    /**
     * @param parameters {Order2Port.GetRegisterFileRequest}
     * @returns {Promise<Order2Port.GetRegisterFileResponse>}
     */
    Order2.prototype.getRegisterFile = function (parameters) {
        return this.call("getRegisterFile", parameters, 'request');
    };
    /**
     * @param parameters {Order2Port.AddParcelsRequest}
     * @returns {Promise<Order2Port.AddParcelsResponse>}
     */
    Order2.prototype.addParcels = function (parameters) {
        return this.call('parameters', parameters, 'parcels');
    };
    /**
     * @param parameters {Order2Port.RemoveParcelsRequest}
     * @returns {Promise<Order2Port.RemoveParcelsResponse>}
     */
    Order2.prototype.removeParcels = function (parameters) {
        return this.call('parameters', parameters, 'parcels');
    };
    return Order2;
}(service_1.Service));
exports.Order2 = Order2;
var Tracing2 = (function (_super) {
    __extends(Tracing2, _super);
    function Tracing2() {
        _super.apply(this, arguments);
        this.namespace = 'tracing';
    }
    /**
     * @param parameters {Tracing2Port.GetStatesByClientOrderRequest}
     * @returns {Promise<Tracing2Port.GetStatesByClientOrderResponse>}
     */
    Tracing2.prototype.getStatesByClientOrder = function (parameters) {
        return this.call('getStatesByClientOrder', parameters);
    };
    /**
     * @param parameters {Tracing2Port.GetStatesByClientParcelRequest}
     * @returns {Promise<Tracing2Port.GetStatesByClientParcelResponse>}
     */
    Tracing2.prototype.getStatesByClientParcel = function (parameters) {
        return this.call('getStatesByClientParcel', parameters);
    };
    /**
     * @param parameters {Tracing2Port.GetStatesByDPDOrderRequest}
     * @returns {Promise<Tracing2Port.GetStatesByDPDOrderResponse>}
     */
    Tracing2.prototype.getStatesByDPDOrder = function (parameters) {
        return this.call('getStatesByDPDOrder', parameters);
    };
    return Tracing2;
}(service_1.Service));
exports.Tracing2 = Tracing2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDLFlBQVksQ0FBQzs7Ozs7O0FBRWIsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBRWxDO0lBQWdDLDhCQUFPO0lBQXZDO1FBQWdDLDhCQUFPO1FBQ25DLGNBQVMsR0FBVSxZQUFZLENBQUM7SUF5QnBDLENBQUM7SUF2Qkc7OztPQUdHO0lBQ0gsOENBQXlCLEdBQXpCLFVBQTBCLFVBQTBEO1FBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQ0FBYyxHQUFkLFVBQWUsVUFBK0M7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7O09BR0c7SUFDSCxxQ0FBZ0IsR0FBaEIsVUFBaUIsVUFBaUQ7UUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUExQkQsQ0FBZ0MsaUJBQU8sR0EwQnRDO0FBMUJZLGtCQUFVLGFBMEJ0QixDQUFBO0FBRUQ7SUFBaUMsK0JBQU87SUFBeEM7UUFBaUMsOEJBQU87UUFDcEMsY0FBUyxHQUFVLGFBQWEsQ0FBQztJQWlCckMsQ0FBQztJQWZHOzs7T0FHRztJQUNILHFDQUFlLEdBQWYsVUFBZ0IsVUFBaUQ7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7O09BR0c7SUFDSCw4Q0FBd0IsR0FB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