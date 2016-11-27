'use strict';

import {Service} from './service';
import {createDataStream, DataStreamTransform} from "./datastore";
import {LabelPort, TracingPort, Types, GeographyPort} from './Interfaces1';

export interface CityType {
    id: number;
    code: string;
    type: string;
    locality: string;
    country: string;
    region: string;
    district: string;
    index_min: number;
    index_max: number;
}

/**
 * Geography Service
 */
export class Geography extends Service {
    constructor(context) {
        super(context);
        this.namespace = 'geography';
    }

    getCities():DataStreamTransform<CityType> {
        return createDataStream(
            this.context.resources.cities,
            ['country', 'region', 'district', 'id', 'code', 'type', 'locality', 'index_min', 'index_max']
        );
    }

    /**
     * @param parameters
     * @returns {Promise<getCitiesCashPayResponse>}
     */
    getCitiesCashPay(parameters:GeographyPort.getCitiesCashPayRequest):Promise<GeographyPort.getCitiesCashPayResponse> {
        return this.call('getCitiesCashPay', parameters);
    }

    /**
     * @param parameters
     * @returns {Promise<getTerminalsSelfDelivery2Response>}
     */
    getTerminalsSelfDelivery2(parameters:GeographyPort.getTerminalsSelfDelivery2Request):Promise<GeographyPort.getTerminalsSelfDelivery2Response> {
        return this.call('getTerminalsSelfDelivery2', parameters);
    }

    /**
     * @param parameters
     * @returns {Promise<getParcelShopsResponse>}
     */
    getParcelShops(parameters:GeographyPort.getParcelShopsRequest):Promise<GeographyPort.getParcelShopsResponse> {
        return this.call('getParcelShops', parameters, 'request');
    }
}

export class Tracing extends Service {
    constructor(context) {
        super(context);
        this.namespace = 'tracing';
    }

    /**
     * @param parameters {TracingPort.ConfirmRequest}
     * @returns {Promise<TracingPort.ConfirmResponse>}
     */
    confirm(parameters:TracingPort.ConfirmRequest):Promise<TracingPort.ConfirmResponse> {
        return this.call('confirm', parameters);
    }

    /**
     * @param parameters {TracingPort.GetStatesByClientRequest}
     * @returns {Promise<TracingPort.GetStatesByClientRequest>}
     */
    getStatesByClient(parameters:TracingPort.GetStatesByClientRequest):Promise<TracingPort.GetStatesByClientResponse> {
        return this.call('getStatesByClient', parameters);
    }

    /**
     * @param parameters {TracingPort.GetStatesByClientOrderRequest}
     * @returns {Promise<TracingPort.GetStatesByClientOrderResponse>}
     */
    getStatesByClientOrder(parameters:TracingPort.GetStatesByClientOrderRequest):Promise<TracingPort.GetStatesByClientOrderResponse> {
        return this.call('getStatesByClientOrder', parameters);
    }

    /**
     * @param parameters {TracingPort.GetStatesByClientParcelRequest}
     * @returns {Promise<TracingPort.GetStatesByClientParcelResponse>}
     */
    getStatesByClientParcel(parameters:TracingPort.GetStatesByClientParcelRequest):Promise<TracingPort.GetStatesByClientParcelResponse> {
        return this.call('getStatesByClientParcel', parameters);
    }

    /**
     * @param parameters {TracingPort.GetStatesByDPDOrderRequest}
     * @returns {Promise<TracingPort.GetStatesByDPDOrderResponse>}
     */
    getStatesByDPDOrder(parameters:TracingPort.GetStatesByDPDOrderRequest):Promise<TracingPort.GetStatesByDPDOrderResponse> {
        return this.call('getStatesByDPDOrder', parameters);
    }
}

export class Label extends Service {
    constructor(context) {
        super(context);
        this.namespace = 'label-print';
    }

    createLabelFile(parameters:LabelPort.CreateLabelFileRequest):Promise<LabelPort.CreateLabelFileResponse> {
        return this.call('createLabelFile', parameters, 'getLabelFile');
    }
}

export {LabelPort, TracingPort, Types, GeographyPort} from './Interfaces1';
