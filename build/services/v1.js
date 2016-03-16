/// <reference path="./v1.d.ts" />
'use strict';
const service_1 = require('./service');
/**
 * Geography Service
 */
class Geography extends service_1.Service {
    constructor(context) {
        super(context);
        this.namespace = 'geography';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDLFlBQVksQ0FBQztBQUViLDBCQUFzQixXQUFXLENBQUMsQ0FBQTtBQUVsQzs7R0FFRztBQUNILHdCQUErQixpQkFBTztJQUNsQyxZQUFZLE9BQU87UUFDZixNQUFNLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLFVBQWdEO1FBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7O09BR0c7SUFDSCx5QkFBeUIsQ0FBQyxVQUF5RDtRQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLFVBQThDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0FBQ0wsQ0FBQztBQTdCWSxpQkFBUyxZQTZCckIsQ0FBQTtBQUVELHNCQUE2QixpQkFBTztJQUNoQyxZQUFZLE9BQU87UUFDZixNQUFNLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxVQUFxQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLFVBQStDO1FBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQkFBc0IsQ0FBQyxVQUFvRDtRQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsdUJBQXVCLENBQUMsVUFBcUQ7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1CQUFtQixDQUFDLFVBQWlEO1FBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7QUFDTCxDQUFDO0FBN0NZLGVBQU8sVUE2Q25CLENBQUE7QUFFRCxvQkFBMkIsaUJBQU87SUFDOUIsWUFBWSxPQUFPO1FBQ2YsTUFBTSxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO0lBQ25DLENBQUM7SUFFRCxlQUFlLENBQUMsVUFBMkM7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7QUFDTCxDQUFDO0FBVFksYUFBSyxRQVNqQixDQUFBIn0=