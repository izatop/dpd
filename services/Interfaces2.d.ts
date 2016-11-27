export namespace V2Types {
    export interface AuthorizationRequest {
        auth:{
            clientNumber:number;
            clientKey:string;
        }
    }

    export interface GeoCoordinates {
        latitude:number;
        longitude:number;
    }

    export interface Limits {
        maxShipmentWeight:number;
        maxWeight:number;
        maxLength:number;
        maxWidth:number;
        maxHeight:number;
    }

    export interface Address {
        code:string;
    }

    export interface Address {
        name:string;
        terminalCode?:string;
        addressString?:string;
        countryName:string;
        index?:number;
        region?:string;
        city:string;
        street:string;
        streetAbbr:string;
        house?:string;
        houseKorpus?:string;
        str?:string;
        vlad?:string;
        extraInfo?:string;
        office?:string;
        flat?:string;
        workTimeFrom?:string;
        workTimeTo?:string;
        dinnerTimeFrom?:string;
        dinnerTimeTo?:string;
        contactFio:string;
        contactPhone:string;
        contactEmail?:string;
    }

    export interface Schedule {
        operation:string;
        timetable:Timetable;
    }

    export interface Timetable {
        weekDays:string;
        workTime:string;
    }

    export interface Service {
        serviceCode:string;
        days:number;
    }

    export interface Location {
        cityId?:number;
        cityName?:string;
        regionCode?:string;
        countryCode?:string;
    }

    export interface Parcel {
        weight:number;
        length:number;
        width:number;
        height:number;
        quantity?:number;
    }
}

export namespace Geography2Port {

    /**
     * Operation getParcelShops
     */

    export interface getParcelShopsRequest {
        countryCode?:string;
        regionCode?:string;
        cityCode?:string;
        cityName?:string;
    }

    export interface getParcelShopsResponse {
        parcelShop:{
            code:string;
            parcelShopType:string;
            state:string;
            address:string;
            geoCoordinates:V2Types.GeoCoordinates;
            limits:V2Types.Limits;
            schedule:V2Types.Schedule;
        }[];
    }

    /**
     * Operation getTerminalsSelfDelivery2
     */

    export interface getTerminalsSelfDelivery2Request {}
    export interface getTerminalsSelfDelivery2Response {
        terminal:{
            terminalCode:string;
            terminalName:string;
            address:V2Types.Address;
            geoCoordinates:V2Types.GeoCoordinates;
            schedule:V2Types.Schedule;
        }[];
    }

    /**
     * Operation getStoragePeriod
     */

    export interface getStoragePeriodRequest {
        terminalCode:string;
        serviceCode?:string;
    }

    export interface getStoragePeriodResponse {
        terminal:{
            terminalCode:string;
            services:V2Types.Service[];
        }[];
    }
}

export namespace Calculator2Port {
    /**
     * Common response for
     */

    export interface CalculatorResponse {
        serviceCode:string;
        serviceName:string;
        cost:number;
        days:number;
    }

    /**
     * Operation getServiceCost2
     */

    export interface getServiceCost2Request {
        pickup?:V2Types.Location;
        delivery?:V2Types.Location;
        selfPickup:boolean;
        selfDelivery:boolean;
        weight:number;
        volume?:number;
        serviceCode?:string;
        pickupDate?:string;
        maxDays?:number;
        maxCost?:number;
        declaredValue?:number;
    }

    export interface getServiceCost2Response extends CalculatorResponse {}

    /**
     * Operation getServiceCostByParcels2
     */

    export interface getServiceCostByParcels2Request {
        pickup:V2Types.Location;
        delivery:V2Types.Location;
        selfPickup:boolean;
        selfDelivery:boolean;
        serviceCode?:string;
        pickupDate?:string;
        maxDays?:number;
        maxCost?:number;
        declaredValue?:number;
        parcel?:V2Types.Parcel[];
    }

    export interface getServiceCostByParcels2Response extends CalculatorResponse {}
}

export namespace Order2Port {
    export interface OrderParameter {
        name:string;
        value:string;
    }

    export interface OrderExtraService {
        esCode:string;
        param?:OrderParameter;
    }

    export interface OrderDataInternational {
        currency?:string;
        currencyDeclaredValue?:number;
    }

    export interface Address {
        code:string;
        name:string;
        terminalCode:string;
        addressString:string;
        countryName:string;
        index:string;
        region:string;
        city:string;
        street:string;
        streetAbbr:string;
        house:string;
        houseKorpus:string;
        str:string;
        vlad:string;
        extraInfo:string;
        office:string;
        flat:string;
        workTimeFrom:string;
        workTimeTo:string;
        dinnerTimeFrom:string;
        dinnerTimeTo:string;
        contactFio:string;
        contactPhone:string;
        contactEmail:string;
        instructions:string;
    }

    export interface OrderUnitLoad {
        article:string;
        descript:string;
        declared_value?:number;
        parcel_num?:string;
        npp_amount?:number;
    }

    export interface OrderParcel {
        number:string;
        weight?:number;
        length?:number;
        width?:number;
        height?:number;
    }

    export interface OrderResponse {
        orderNumberInternal:string;
        orderNum:string;
        status:string;
        errorMessage?:string;
    }

    export interface AddressResponse {
        code:string;
        status:string;
        errorMessage?:string;
    }

    export interface OrderParcelStatus {
        number:string;
        status:string;
    }

    /**
     * Operation createOrder
     */

    export interface CreateOrderRequest {
        header:{
            datePickup:string;
            payer?:number;
            senderAddress:V2Types.Address;
            pickupTimePeriod:string;
            regularNum?:string;
        };
        order:{
            orderNumberInternal:string;
            serviceCode:string;
            serviceVariant:string;
            cargoNumPack:number;
            cargoWeight:number;
            cargoVolume?:number;
            cargoRegistered:boolean;
            cargoValue?:number;
            cargoCategory:string;
            paymentType?:string;
            deliveryTimePeriod?:string;
            extraParam?:OrderParameter;
            dataInt?:OrderDataInternational;
            receiverAddress:string;
            extraService?:OrderExtraService;
            parcel?:OrderParcel;
            unitLoad?:OrderUnitLoad;
        }[]
    }

    export interface CreateOrderResponse extends OrderResponse {}

    /**
     * Operation getOrderStatus
     */

    export interface GetOrderStatusRequest {
        orderNumberInternal:string;
        datePickup:string;
    }

    export interface GetOrderStatusResponse extends OrderResponse {}

    /**
     * Operation createAddress
     */

    export interface CreateAddressRequest {
        clientAddress:Address;
    }

    export interface CreateAddressResponse extends AddressResponse {}

    /**
     * Operation updateAddress
     */
    export interface UpdateAddressRequest {
        clientAddress:Address;
    }

    export interface UpdateAddressResponse extends AddressResponse {}

    /**
     * Operation getInvoiceFile
     */

    export interface GetInvoiceFileRequest {
        orderNum:string;
        parcelCount?:number;
        cargoValue?:number;
    }

    export interface GetInvoiceFileResponse {
        file:string;
    }

    /**
     * Operation getRegisterFile
     */

    export interface GetRegisterFileRequest {
        datePickup:Buffer;
    }

    export interface GetRegisterFileResponse {
        file:Buffer;
        code:string;
        message?:string;
    }

    /**
     * Operation addParcels
     */

    export interface AddParcelsRequest {
        orderNum:string;
        orderNumberInternal?:string;
        cargoNumPack:number;
        cargoWeight:number;
        cargoVolume?:number;
        cargoValue?:number;
        cargoCategory:string;
        parcel:OrderParcel;
    }

    export interface AddParcelsResponse {
        orderNum?:string;
        status:string;
        parcelStatus:OrderParcelStatus;
    }

    /**
     * Operation removeParcels
     */

    export interface RemoveParcelsRequest extends AddParcelsRequest {}

    export interface RemoveParcelsResponse extends AddParcelsResponse {}
}

export namespace Tracing2Port {
    export interface OrderStatesResponse {
        docId:number;
        docDate:string;
        clientNumber:number;
        resultComplete:boolean;
        states:{
            clientOrderNr:string;
            clientParcelNr:string;
            dpdOrderNr:string;
            dpdParcelNr:string;
            pickupDate:string;
            dpdOrderReNr:string;
            dpdParcelReNr:string;
            planDeliveryDate:string;
            orderPhysicalWeight:number;
            orderVolume:number;
            orderVolumeWeight:number;
            orderPayWeight:number;
            orderCost:number;
            parcelPhysicalWeight:number;
            parcelVolume:number;
            parcelVolumeWeight:number;
            parcelPayWeight:number;
            parcelLength:number;
            parcelWidth:number;
            parcelHeight:number;
            newState:string;
            transitionTime:string;
            terminalCode:string;
            terminalCity:string;
            incidentCode:string;
            incidentName:string;
            consignee:string;
        }[];
    }

    /**
     * Operation GetStatesByClientOrder
     */

    export interface GetStatesByClientOrderRequest {
        clientOrderNr:string;
        pickupDate?:string;
    }

    export interface GetStatesByClientOrderResponse extends OrderStatesResponse {}

    /**
     * Operation GetStatesByClientParcel
     */

    export interface GetStatesByClientParcelRequest {
        clientParcelNr:string;
        pickupDate?:string;
    }
    export interface GetStatesByClientParcelResponse extends OrderStatesResponse {}

    /**
     * Operation GetStatesByDPDOrder
     */

    export interface GetStatesByDPDOrderRequest {
        dpdOrderNr:string;
        pickupYear?:number;
    }

    export interface GetStatesByDPDOrderResponse extends OrderStatesResponse {}
}
