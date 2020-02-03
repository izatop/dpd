import { Service } from './service';
import { Calculator2Port, Geography2Port, Order2Port, Tracing2Port } from './Interfaces2';
export declare class Geography2 extends Service {
    constructor(context: any);
    /**
     * @param parameters {Geography2Port.getTerminalsSelfDelivery2Request}
     * @returns {Promise<Geography2Port.getTerminalsSelfDelivery2Response>}
     */
    getTerminalsSelfDelivery2(parameters: Geography2Port.getTerminalsSelfDelivery2Request): Promise<Geography2Port.getTerminalsSelfDelivery2Response>;
    /**
     * @param parameters {Geography2Port.getParcelShopsRequest}
     * @returns {Promise<Geography2Port.getParcelShopsResponse>}
     */
    getParcelShops(parameters: Geography2Port.getParcelShopsRequest): Promise<Geography2Port.getParcelShopsResponse>;
    /**
     * @param parameters {Geography2Port.getStoragePeriodRequest}
     * @returns {Promise<Geography2Port.getStoragePeriodResponse>}
     */
    getStoragePeriod(parameters: Geography2Port.getStoragePeriodRequest): Promise<Geography2Port.getStoragePeriodResponse>;
}
export declare class Calculator2 extends Service {
    constructor(context: any);
    /**
     * @param parameters {Calculator2Port.getServiceCost2Request}
     * @returns {Promise<Calculator2Port.getServiceCost2Response>}
     */
    getServiceCost2(parameters: Calculator2Port.getServiceCost2Request): Promise<Calculator2Port.getServiceCost2Response>;
    /**
     * @param parameters {Calculator2Port.getServiceCostByParcels2Request}
     * @returns {Promise<Calculator2Port.getServiceCostByParcels2Response>}
     */
    getServiceCostByParcels2(parameters: Calculator2Port.getServiceCostByParcels2Request): Promise<Calculator2Port.getServiceCostByParcels2Response>;
}
export declare class Order2 extends Service {
    constructor(context: any);
    /**
     * @param parameters {Order2Port.CreateOrderRequest}
     * @returns {Promise<Order2Port.CreateOrderResponse>}
     */
    createOrder(parameters: Order2Port.CreateOrderRequest): Promise<Order2Port.CreateOrderResponse>;
    /**
     * @param parameters {Order2Port.GetOrderStatusRequest}
     * @returns {Promise<Order2Port.GetOrderStatusResponse>}
     */
    getOrderStatus(parameters: Order2Port.GetOrderStatusRequest): Promise<Order2Port.GetOrderStatusResponse>;
    /**
     * @param parameters {Order2Port.CreateAddressRequest}
     * @returns {Promise<Order2Port.CreateAddressResponse>}
     */
    createAddress(parameters: Order2Port.CreateAddressRequest): Promise<Order2Port.CreateAddressResponse>;
    /**
     * @param parameters {Order2Port.UpdateAddressRequest}
     * @returns {Promise<Order2Port.UpdateAddressResponse>}
     */
    updateAddress(parameters: Order2Port.UpdateAddressRequest): Promise<Order2Port.UpdateAddressResponse>;
    /**
     * @param parameters {Order2Port.GetInvoiceFileRequest}
     * @returns {Promise<Order2Port.GetInvoiceFileResponse>}
     */
    getInvoiceFile(parameters: Order2Port.GetInvoiceFileRequest): Promise<Order2Port.GetInvoiceFileResponse>;
    /**
     * @param parameters {Order2Port.GetRegisterFileRequest}
     * @returns {Promise<Order2Port.GetRegisterFileResponse>}
     */
    getRegisterFile(parameters: Order2Port.GetRegisterFileRequest): Promise<Order2Port.GetRegisterFileResponse>;
    /**
     * @param parameters {Order2Port.AddParcelsRequest}
     * @returns {Promise<Order2Port.AddParcelsResponse>}
     */
    addParcels(parameters: Order2Port.AddParcelsRequest): Promise<Order2Port.AddParcelsResponse>;
    /**
     * @param parameters {Order2Port.RemoveParcelsRequest}
     * @returns {Promise<Order2Port.RemoveParcelsResponse>}
     */
    removeParcels(parameters: Order2Port.RemoveParcelsRequest): Promise<Order2Port.RemoveParcelsResponse>;
}
export declare class Tracing2 extends Service {
    constructor(context: any);
    /**
     * @param parameters {Tracing2Port.GetStatesByClientOrderRequest}
     * @returns {Promise<Tracing2Port.GetStatesByClientOrderResponse>}
     */
    getStatesByClientOrder(parameters: Tracing2Port.GetStatesByClientOrderRequest): Promise<Tracing2Port.GetStatesByClientOrderResponse>;
    /**
     * @param parameters {Tracing2Port.GetStatesByClientParcelRequest}
     * @returns {Promise<Tracing2Port.GetStatesByClientParcelResponse>}
     */
    getStatesByClientParcel(parameters: Tracing2Port.GetStatesByClientParcelRequest): Promise<Tracing2Port.GetStatesByClientParcelResponse>;
    /**
     * @param parameters {Tracing2Port.GetStatesByDPDOrderRequest}
     * @returns {Promise<Tracing2Port.GetStatesByDPDOrderResponse>}
     */
    getStatesByDPDOrder(parameters: Tracing2Port.GetStatesByDPDOrderRequest): Promise<Tracing2Port.GetStatesByDPDOrderResponse>;
}
export { Calculator2Port, Geography2Port, Order2Port, Tracing2Port, V2Types } from './Interfaces2';
