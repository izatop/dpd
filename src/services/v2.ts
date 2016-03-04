/// <reference path="./v2.d.ts" />

'use strict';

import {Service} from './service';

export class Geography2 extends Service {
    constructor(context) {
        super(context);
        this.namespace = 'geography2';
    }

    /**
     * @param parameters {Geography2Port.getTerminalsSelfDelivery2Request}
     * @returns {Promise<Geography2Port.getTerminalsSelfDelivery2Response>}
     */
    getTerminalsSelfDelivery2(parameters:Geography2Port.getTerminalsSelfDelivery2Request):Promise<Geography2Port.getTerminalsSelfDelivery2Response> {
        return this.call('getTerminalsSelfDelivery2', parameters);
    }

    /**
     * @param parameters {Geography2Port.getParcelShopsRequest}
     * @returns {Promise<Geography2Port.getParcelShopsResponse>}
     */
    getParcelShops(parameters:Geography2Port.getParcelShopsRequest):Promise<Geography2Port.getParcelShopsResponse> {
        return this.call('getParcelShops', parameters, 'request');
    }

    /**
     * @param parameters {Geography2Port.getStoragePeriodRequest}
     * @returns {Promise<Geography2Port.getStoragePeriodResponse>}
     */
    getStoragePeriod(parameters:Geography2Port.getStoragePeriodRequest):Promise<Geography2Port.getStoragePeriodResponse> {
        return this.call('getStoragePeriod', parameters, 'request');
    }
}

export class Calculator2 extends Service {
    constructor(context) {
        super(context);
        this.namespace = 'calculator2';
    }

    /**
     * @param parameters {Calculator2Port.getServiceCost2Request}
     * @returns {Promise<Calculator2Port.getServiceCost2Response>}
     */
    getServiceCost2(parameters:Calculator2Port.getServiceCost2Request):Promise<Calculator2Port.getServiceCost2Response> {
        return this.call('getServiceCost2', parameters, 'request');
    }

    /**
     * @param parameters {Calculator2Port.getServiceCostByParcels2Request}
     * @returns {Promise<Calculator2Port.getServiceCostByParcels2Response>}
     */
    getServiceCostByParcels2(parameters:Calculator2Port.getServiceCostByParcels2Request):Promise<Calculator2Port.getServiceCostByParcels2Response> {
        return this.call('getServiceCostByParcels2', parameters, 'request');
    }
}

export class Order2 extends Service {
    constructor(context) {
        super(context);
        this.namespace = 'order2';
    }

    /**
     * @param parameters {Order2Port.CreateOrderRequest}
     * @returns {Promise<Order2Port.CreateOrderResponse>}
     */
    createOrder(parameters:Order2Port.CreateOrderRequest):Promise<Order2Port.CreateOrderResponse> {
        return this.call("createOrder", parameters, 'orders');
    }

    /**
     * @param parameters {Order2Port.GetOrderStatusRequest}
     * @returns {Promise<Order2Port.GetOrderStatusResponse>}
     */
    getOrderStatus(parameters:Order2Port.GetOrderStatusRequest):Promise<Order2Port.GetOrderStatusResponse> {
        return this.call("getOrderStatus", parameters, 'orderStatus');
    }

    /**
     * @param parameters {Order2Port.CreateAddressRequest}
     * @returns {Promise<Order2Port.CreateAddressResponse>}
     */
    createAddress(parameters:Order2Port.CreateAddressRequest):Promise<Order2Port.CreateAddressResponse> {
        return this.call("createAddress", parameters, 'address');
    }

    /**
     * @param parameters {Order2Port.UpdateAddressRequest}
     * @returns {Promise<Order2Port.UpdateAddressResponse>}
     */
    updateAddress(parameters:Order2Port.UpdateAddressRequest):Promise<Order2Port.UpdateAddressResponse> {
        return this.call("updateAddress", parameters, 'address');
    }

    /**
     * @param parameters {Order2Port.GetInvoiceFileRequest}
     * @returns {Promise<Order2Port.GetInvoiceFileResponse>}
     */
    getInvoiceFile(parameters:Order2Port.GetInvoiceFileRequest):Promise<Order2Port.GetInvoiceFileResponse> {
        return this.call("getInvoiceFile", parameters, 'request');
    }

    /**
     * @param parameters {Order2Port.GetRegisterFileRequest}
     * @returns {Promise<Order2Port.GetRegisterFileResponse>}
     */
    getRegisterFile(parameters:Order2Port.GetRegisterFileRequest):Promise<Order2Port.GetRegisterFileResponse> {
        return this.call("getRegisterFile", parameters, 'request');
    }

    /**
     * @param parameters {Order2Port.AddParcelsRequest}
     * @returns {Promise<Order2Port.AddParcelsResponse>}
     */
    addParcels(parameters:Order2Port.AddParcelsRequest):Promise<Order2Port.AddParcelsResponse> {
        return this.call('parameters', parameters, 'parcels');
    }

    /**
     * @param parameters {Order2Port.RemoveParcelsRequest}
     * @returns {Promise<Order2Port.RemoveParcelsResponse>}
     */
    removeParcels(parameters:Order2Port.RemoveParcelsRequest):Promise<Order2Port.RemoveParcelsResponse> {
        return this.call('parameters', parameters, 'parcels');
    }
}

export class Tracing2 extends Service {
    constructor(context) {
        super(context);
        this.namespace = 'tracing';
    }

    /**
     * @param parameters {Tracing2Port.GetStatesByClientOrderRequest}
     * @returns {Promise<Tracing2Port.GetStatesByClientOrderResponse>}
     */
    getStatesByClientOrder(parameters:Tracing2Port.GetStatesByClientOrderRequest):Promise<Tracing2Port.GetStatesByClientOrderResponse> {
        return this.call('getStatesByClientOrder', parameters);
    }

    /**
     * @param parameters {Tracing2Port.GetStatesByClientParcelRequest}
     * @returns {Promise<Tracing2Port.GetStatesByClientParcelResponse>}
     */
    getStatesByClientParcel(parameters:Tracing2Port.GetStatesByClientParcelRequest):Promise<Tracing2Port.GetStatesByClientParcelResponse> {
        return this.call('getStatesByClientParcel', parameters);
    }

    /**
     * @param parameters {Tracing2Port.GetStatesByDPDOrderRequest}
     * @returns {Promise<Tracing2Port.GetStatesByDPDOrderResponse>}
     */
    getStatesByDPDOrder(parameters:Tracing2Port.GetStatesByDPDOrderRequest):Promise<Tracing2Port.GetStatesByDPDOrderResponse> {
        return this.call('getStatesByDPDOrder', parameters);
    }
}