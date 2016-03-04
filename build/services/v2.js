/// <reference path="./v2.d.ts" />
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDLFlBQVksQ0FBQztBQUViLDBCQUFzQixXQUFXLENBQUMsQ0FBQTtBQUVsQyx5QkFBZ0MsaUJBQU87SUFDbkMsWUFBWSxPQUFPO1FBQ2YsTUFBTSxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDSCx5QkFBeUIsQ0FBQyxVQUEwRDtRQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLFVBQStDO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLENBQUMsVUFBaUQ7UUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7QUFDTCxDQUFDO0FBN0JZLGtCQUFVLGFBNkJ0QixDQUFBO0FBRUQsMEJBQWlDLGlCQUFPO0lBQ3BDLFlBQVksT0FBTztRQUNmLE1BQU0sT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZSxDQUFDLFVBQWlEO1FBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0JBQXdCLENBQUMsVUFB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