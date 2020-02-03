import { Service } from './service';
import { DataStreamTransform } from "./datastore";
import { LabelPort, TracingPort, GeographyPort } from './Interfaces1';
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
export declare class Geography extends Service {
    constructor(context: any);
    getCities(): DataStreamTransform<CityType>;
    /**
     * @param parameters
     * @returns {Promise<getCitiesCashPayResponse>}
     */
    getCitiesCashPay(parameters: GeographyPort.getCitiesCashPayRequest): Promise<GeographyPort.getCitiesCashPayResponse>;
    /**
     * @param parameters
     * @returns {Promise<getTerminalsSelfDelivery2Response>}
     */
    getTerminalsSelfDelivery2(parameters: GeographyPort.getTerminalsSelfDelivery2Request): Promise<GeographyPort.getTerminalsSelfDelivery2Response>;
    /**
     * @param parameters
     * @returns {Promise<getParcelShopsResponse>}
     */
    getParcelShops(parameters: GeographyPort.getParcelShopsRequest): Promise<GeographyPort.getParcelShopsResponse>;
}
export declare class Tracing extends Service {
    constructor(context: any);
    /**
     * @param parameters {TracingPort.ConfirmRequest}
     * @returns {Promise<TracingPort.ConfirmResponse>}
     */
    confirm(parameters: TracingPort.ConfirmRequest): Promise<TracingPort.ConfirmResponse>;
    /**
     * @param parameters {TracingPort.GetStatesByClientRequest}
     * @returns {Promise<TracingPort.GetStatesByClientRequest>}
     */
    getStatesByClient(parameters: TracingPort.GetStatesByClientRequest): Promise<TracingPort.GetStatesByClientResponse>;
    /**
     * @param parameters {TracingPort.GetStatesByClientOrderRequest}
     * @returns {Promise<TracingPort.GetStatesByClientOrderResponse>}
     */
    getStatesByClientOrder(parameters: TracingPort.GetStatesByClientOrderRequest): Promise<TracingPort.GetStatesByClientOrderResponse>;
    /**
     * @param parameters {TracingPort.GetStatesByClientParcelRequest}
     * @returns {Promise<TracingPort.GetStatesByClientParcelResponse>}
     */
    getStatesByClientParcel(parameters: TracingPort.GetStatesByClientParcelRequest): Promise<TracingPort.GetStatesByClientParcelResponse>;
    /**
     * @param parameters {TracingPort.GetStatesByDPDOrderRequest}
     * @returns {Promise<TracingPort.GetStatesByDPDOrderResponse>}
     */
    getStatesByDPDOrder(parameters: TracingPort.GetStatesByDPDOrderRequest): Promise<TracingPort.GetStatesByDPDOrderResponse>;
}
export declare class Label extends Service {
    constructor(context: any);
    createLabelFile(parameters: LabelPort.CreateLabelFileRequest): Promise<LabelPort.CreateLabelFileResponse>;
}
export { LabelPort, TracingPort, Types, GeographyPort } from './Interfaces1';
