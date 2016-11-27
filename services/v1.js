'use strict';
const service_1 = require('./service');
const datastore_1 = require("./datastore");
/**
 * Geography Service
 */
class Geography extends service_1.Service {
    constructor(context) {
        super(context);
        this.namespace = 'geography';
    }
    getCities() {
        return datastore_1.createDataStream(this.context.resources.cities, ['country', 'region', 'district', 'id', 'code', 'type', 'locality', 'index_min', 'index_max']);
    }
    /**
     * @param parameters
     * @returns {Promise<getCitiesCashPayResponse>}
     */
    getCitiesCashPay(parameters) {
        return this.call('getCitiesCashPay', parameters);
    }
    /**
     * @param parameters
     * @returns {Promise<getTerminalsSelfDelivery2Response>}
     */
    getTerminalsSelfDelivery2(parameters) {
        return this.call('getTerminalsSelfDelivery2', parameters);
    }
    /**
     * @param parameters
     * @returns {Promise<getParcelShopsResponse>}
     */
    getParcelShops(parameters) {
        return this.call('getParcelShops', parameters, 'request');
    }
}
exports.Geography = Geography;
class Tracing extends service_1.Service {
    constructor(context) {
        super(context);
        this.namespace = 'tracing';
    }
    /**
     * @param parameters {TracingPort.ConfirmRequest}
     * @returns {Promise<TracingPort.ConfirmResponse>}
     */
    confirm(parameters) {
        return this.call('confirm', parameters);
    }
    /**
     * @param parameters {TracingPort.GetStatesByClientRequest}
     * @returns {Promise<TracingPort.GetStatesByClientRequest>}
     */
    getStatesByClient(parameters) {
        return this.call('getStatesByClient', parameters);
    }
    /**
     * @param parameters {TracingPort.GetStatesByClientOrderRequest}
     * @returns {Promise<TracingPort.GetStatesByClientOrderResponse>}
     */
    getStatesByClientOrder(parameters) {
        return this.call('getStatesByClientOrder', parameters);
    }
    /**
     * @param parameters {TracingPort.GetStatesByClientParcelRequest}
     * @returns {Promise<TracingPort.GetStatesByClientParcelResponse>}
     */
    getStatesByClientParcel(parameters) {
        return this.call('getStatesByClientParcel', parameters);
    }
    /**
     * @param parameters {TracingPort.GetStatesByDPDOrderRequest}
     * @returns {Promise<TracingPort.GetStatesByDPDOrderResponse>}
     */
    getStatesByDPDOrder(parameters) {
        return this.call('getStatesByDPDOrder', parameters);
    }
}
exports.Tracing = Tracing;
class Label extends service_1.Service {
    constructor(context) {
        super(context);
        this.namespace = 'label-print';
    }
    createLabelFile(parameters) {
        return this.call('createLabelFile', parameters, 'getLabelFile');
    }
}
exports.Label = Label;
//# sourceMappingURL=v1.js.map