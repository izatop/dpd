/// <reference path="./v1.d.ts" />
'use strict';
const service_1 = require('./service');
const datastore_1 = require("./datastore");
const path_1 = require('path');
/**
 * Geography Service
 */
class Geography extends service_1.Service {
    constructor(context) {
        super(context);
        this.namespace = 'geography';
    }
    getCities() {
        return datastore_1.createDataStream(path_1.resolve(__dirname, '../../resources/cities.csv'), ['country', 'region', 'district', 'id', 'code', 'type', 'locality', 'index_min', 'index_max']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDLFlBQVksQ0FBQztBQUViLDBCQUFzQixXQUFXLENBQUMsQ0FBQTtBQUNsQyw0QkFBb0QsYUFBYSxDQUFDLENBQUE7QUFDbEUsdUJBQXNCLE1BQU0sQ0FBQyxDQUFBO0FBRTdCOztHQUVHO0FBQ0gsd0JBQStCLGlCQUFPO0lBQ2xDLFlBQVksT0FBTztRQUNmLE1BQU0sT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBRUQsU0FBUztRQUNMLE1BQU0sQ0FBQyw0QkFBZ0IsQ0FDbkIsY0FBTyxDQUFDLFNBQVMsRUFBRSw0QkFBNEIsQ0FBQyxFQUNoRCxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQ2hHLENBQUM7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLENBQUMsVUFBZ0Q7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7T0FHRztJQUNILHlCQUF5QixDQUFDLFVBQXlEO1FBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjLENBQUMsVUFBOEM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7QUFDTCxDQUFDO0FBcENZLGlCQUFTLFlBb0NyQixDQUFBO0FBRUQsc0JBQTZCLGlCQUFPO0lBQ2hDLFlBQVksT0FBTztRQUNmLE1BQU0sT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsT0FBTyxDQUFDLFVBQXFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCLENBQUMsVUFBK0M7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILHNCQUFzQixDQUFDLFVBQW9EO1FBQ3ZFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7O09BR0c7SUFDSCx1QkFBdUIsQ0FBQyxVQUFxRDtRQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUJBQW1CLENBQUMsVUFBaUQ7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEQsQ0FBQztBQUNMLENBQUM7QUE3Q1ksZUFBTyxVQTZDbkIsQ0FBQTtBQUVELG9CQUEyQixpQkFBTztJQUM5QixZQUFZLE9BQU87UUFDZixNQUFNLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQUVELGVBQWUsQ0FBQyxVQUEyQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDcEUsQ0FBQztBQUNMLENBQUM7QUFUWSxhQUFLLFFBU2pCLENBQUEifQ==