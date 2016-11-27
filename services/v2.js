'use strict';
const service_1 = require('./service');
class Geography2 extends service_1.Service {
    constructor(context) {
        super(context);
        this.namespace = 'geography2';
    }
    /**
     * @param parameters {Geography2Port.getTerminalsSelfDelivery2Request}
     * @returns {Promise<Geography2Port.getTerminalsSelfDelivery2Response>}
     */
    getTerminalsSelfDelivery2(parameters) {
        return this.call('getTerminalsSelfDelivery2', parameters);
    }
    /**
     * @param parameters {Geography2Port.getParcelShopsRequest}
     * @returns {Promise<Geography2Port.getParcelShopsResponse>}
     */
    getParcelShops(parameters) {
        return this.call('getParcelShops', parameters, 'request');
    }
    /**
     * @param parameters {Geography2Port.getStoragePeriodRequest}
     * @returns {Promise<Geography2Port.getStoragePeriodResponse>}
     */
    getStoragePeriod(parameters) {
        return this.call('getStoragePeriod', parameters, 'request');
    }
}
exports.Geography2 = Geography2;
class Calculator2 extends service_1.Service {
    constructor(context) {
        super(context);
        this.namespace = 'calculator2';
    }
    /**
     * @param parameters {Calculator2Port.getServiceCost2Request}
     * @returns {Promise<Calculator2Port.getServiceCost2Response>}
     */
    getServiceCost2(parameters) {
        return this.call('getServiceCost2', parameters, 'request');
    }
    /**
     * @param parameters {Calculator2Port.getServiceCostByParcels2Request}
     * @returns {Promise<Calculator2Port.getServiceCostByParcels2Response>}
     */
    getServiceCostByParcels2(parameters) {
        return this.call('getServiceCostByParcels2', parameters, 'request');
    }
}
exports.Calculator2 = Calculator2;
class Order2 extends service_1.Service {
    constructor(context) {
        super(context);
        this.namespace = 'order2';
    }
    /**
     * @param parameters {Order2Port.CreateOrderRequest}
     * @returns {Promise<Order2Port.CreateOrderResponse>}
     */
    createOrder(parameters) {
        return this.call("createOrder", parameters, 'orders');
    }
    /**
     * @param parameters {Order2Port.GetOrderStatusRequest}
     * @returns {Promise<Order2Port.GetOrderStatusResponse>}
     */
    getOrderStatus(parameters) {
        return this.call("getOrderStatus", parameters, 'orderStatus');
    }
    /**
     * @param parameters {Order2Port.CreateAddressRequest}
     * @returns {Promise<Order2Port.CreateAddressResponse>}
     */
    createAddress(parameters) {
        return this.call("createAddress", parameters, 'address');
    }
    /**
     * @param parameters {Order2Port.UpdateAddressRequest}
     * @returns {Promise<Order2Port.UpdateAddressResponse>}
     */
    updateAddress(parameters) {
        return this.call("updateAddress", parameters, 'address');
    }
    /**
     * @param parameters {Order2Port.GetInvoiceFileRequest}
     * @returns {Promise<Order2Port.GetInvoiceFileResponse>}
     */
    getInvoiceFile(parameters) {
        return this.call("getInvoiceFile", parameters, 'request');
    }
    /**
     * @param parameters {Order2Port.GetRegisterFileRequest}
     * @returns {Promise<Order2Port.GetRegisterFileResponse>}
     */
    getRegisterFile(parameters) {
        return this.call("getRegisterFile", parameters, 'request');
    }
    /**
     * @param parameters {Order2Port.AddParcelsRequest}
     * @returns {Promise<Order2Port.AddParcelsResponse>}
     */
    addParcels(parameters) {
        return this.call('parameters', parameters, 'parcels');
    }
    /**
     * @param parameters {Order2Port.RemoveParcelsRequest}
     * @returns {Promise<Order2Port.RemoveParcelsResponse>}
     */
    removeParcels(parameters) {
        return this.call('parameters', parameters, 'parcels');
    }
}
exports.Order2 = Order2;
class Tracing2 extends service_1.Service {
    constructor(context) {
        super(context);
        this.namespace = 'tracing';
    }
    /**
     * @param parameters {Tracing2Port.GetStatesByClientOrderRequest}
     * @returns {Promise<Tracing2Port.GetStatesByClientOrderResponse>}
     */
    getStatesByClientOrder(parameters) {
        return this.call('getStatesByClientOrder', parameters);
    }
    /**
     * @param parameters {Tracing2Port.GetStatesByClientParcelRequest}
     * @returns {Promise<Tracing2Port.GetStatesByClientParcelResponse>}
     */
    getStatesByClientParcel(parameters) {
        return this.call('getStatesByClientParcel', parameters);
    }
    /**
     * @param parameters {Tracing2Port.GetStatesByDPDOrderRequest}
     * @returns {Promise<Tracing2Port.GetStatesByDPDOrderResponse>}
     */
    getStatesByDPDOrder(parameters) {
        return this.call('getStatesByDPDOrder', parameters);
    }
}
exports.Tracing2 = Tracing2;
//# sourceMappingURL=v2.js.map