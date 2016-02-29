/// <reference path="../../typings/tsd.d.ts" />

declare module V2Types {
    interface AuthorizationRequest {
        auth:{
            clientNumber:number;
            clientKey:string;
        }
    }

    interface GeoCoordinates {
        latitude:number;
        longitude:number;
    }

    interface Limits {
        maxShipmentWeight:number;
        maxWeight:number;
        maxLength:number;
        maxWidth:number;
        maxHeight:number;
    }

    interface Address {
        code:string;
    }

    interface Address {
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

    interface Schedule {
        operation:string;
        timetable:Timetable;
    }

    interface Timetable {
        weekDays:string;
        workTime:string;
    }

    interface Service {
        serviceCode:string;
        days:number;
    }

    interface Location {
        cityId?:number;
        cityName?:string;
        regionCode?:string;
        countryCode?:string;
    }

    interface Parcel {
        weight:number;
        length:number;
        width:number;
        height:number;
        quantity?:number;
    }
}

declare module Geography2Port {

    /**
     * Operation getParcelShops
     */

    interface getParcelShopsRequest {
        countryCode?:string;
        regionCode?:string;
        cityCode?:string;
        cityName?:string;
    }

    interface getParcelShopsResponse {
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

    interface getTerminalsSelfDelivery2Request {}
    interface getTerminalsSelfDelivery2Response {
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

    interface getStoragePeriodRequest {
        terminalCode:string;
        serviceCode?:string;
    }

    interface getStoragePeriodResponse {
        terminal:{
            terminalCode:string;
            services:V2Types.Service[];
        }[];
    }
}

declare module Calculator2Port {
    /**
     * Common response for
     */

    interface CalculatorResponse {
        serviceCode:string;
        serviceName:string;
        cost:number;
        days:number;
    }

    /**
     * Operation getServiceCost2
     */

    interface getServiceCost2Request {
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

    interface getServiceCost2Response extends CalculatorResponse {}

    /**
     * Operation getServiceCostByParcels2
     */

    interface getServiceCostByParcels2Request {
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

    interface getServiceCostByParcels2Response extends CalculatorResponse {}
}

declare module Order2Port {
    interface OrderParameter {
        name:string;
        value:string;
    }

    interface OrderExtraService {
        esCode:string;
        param?:OrderParameter;
    }

    interface OrderDataInternational {
        currency?:string;
        currencyDeclaredValue?:number;
    }

    interface Address {
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

    interface OrderUnitLoad {
        article:string;
        descript:string;
        declared_value?:number;
        parcel_num?:string;
        npp_amount?:number;
    }

    interface OrderParcel {
        number:string;
        weight?:number;
        length?:number;
        width?:number;
        height?:number;
    }

    interface OrderResponse {
        orderNumberInternal:string;
        orderNum:string;
        status:string;
        errorMessage?:string;
    }

    interface AddressResponse {
        code:string;
        status:string;
        errorMessage?:string;
    }

    interface OrderParcelStatus {
        number:string;
        status:string;
    }

    /**
     * Operation createOrder
     */

    interface CreateOrderRequest {
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

    interface CreateOrderResponse extends OrderResponse {}

    /**
     * Operation getOrderStatus
     */

    interface GetOrderStatusRequest {
        orderNumberInternal:string;
        datePickup:string;
    }

    interface GetOrderStatusResponse extends OrderResponse {}

    /**
     * Operation createAddress
     */

    interface CreateAddressRequest {
        clientAddress:Address;
    }

    interface CreateAddressResponse extends AddressResponse {}

    /**
     * Operation updateAddress
     */
    interface UpdateAddressRequest {
        clientAddress:Address;
    }

    interface UpdateAddressResponse extends AddressResponse {}

    /**
     * Operation getInvoiceFile
     */

    interface GetInvoiceFileRequest {
        orderNum:string;
        parcelCount?:number;
        cargoValue?:number;
    }

    interface GetInvoiceFileResponse {
        file:string;
    }

    /**
     * Operation getRegisterFile
     */

    interface GetRegisterFileRequest {
        datePickup:Buffer;
    }

    interface GetRegisterFileResponse {
        file:Buffer;
        code:string;
        message?:string;
    }

    /**
     * Operation addParcels
     */

    interface AddParcelsRequest {
        orderNum:string;
        orderNumberInternal?:string;
        cargoNumPack:number;
        cargoWeight:number;
        cargoVolume?:number;
        cargoValue?:number;
        cargoCategory:string;
        parcel:OrderParcel;
    }

    interface AddParcelsResponse {
        orderNum?:string;
        status:string;
        parcelStatus:OrderParcelStatus;
    }

    /**
     * Operation removeParcels
     */

    interface RemoveParcelsRequest extends AddParcelsRequest {}

    interface RemoveParcelsResponse extends AddParcelsResponse {}
}

declare module Tracing2Port {
    interface OrderStatesResponse {
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

    interface GetStatesByClientOrderRequest {
        clientOrderNr:string;
        pickupDate?:string;
    }

    interface GetStatesByClientOrderResponse extends OrderStatesResponse {}

    /**
     * Operation GetStatesByClientParcel
     */

    interface GetStatesByClientParcelRequest {
        clientParcelNr:string;
        pickupDate?:string;
    }
    interface GetStatesByClientParcelResponse extends OrderStatesResponse {}

    /**
     * Operation GetStatesByDPDOrder
     */

    interface GetStatesByDPDOrderRequest {
        dpdOrderNr:string;
        pickupYear?:number;
    }

    interface GetStatesByDPDOrderResponse extends OrderStatesResponse {}
}