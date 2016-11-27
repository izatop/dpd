export namespace Types {
    export interface AuthorizationRequest {
        auth: {
            clientNumber:number;
            clientKey:string;
        }
    }

    export interface GeoCoordinates {
        geoX:number;
        geoY:number;
    }

    export interface WorkingTime {
        weekDays:string;
        workTime:string;
    }

    export interface Limits {
        maxWeight:number;
        maxLength:number;
        maxWidth:number;
        maxHeight:number;
    }
}

export namespace GeographyPort {
    export interface getCitiesCashPayRequest {}
    export type getCitiesCashPayResponse = Array<{
        cityId:number;
        countryCode:string;
        countryName:string;
        regionCode:string;
        regionName:string;
        cityCode:string;
        cityName:string;
        abbreviation:string;
        indexMin:string;
        indexMax:string;
    }>;

    export interface getTerminalsSelfDelivery2Request {}

    export type getTerminalsSelfDelivery2Response = Array<{
        terminal: {
            terminalCode:string;
            terminalName:string;
            terminalAddress:string;
            geoCoordinates:Types.GeoCoordinates;
            workingTime:Types.WorkingTime[];
        };

        city: {
            cityId:number;
            cityCode:string;
            cityName:string;
            countryCode:string;
            countryName:string;
            regionCode:string;
            regionName:string;
        }[];
    }>;

    export interface getParcelShopsRequest {
        countryCode?:string;
        regionCode?:string;
        cityCode?:string;
        cityName?:string;
        serviceCode?:string;
    }

    export interface getParcelShopsResponse {
        parcelShop: {
            code:string;
            parcelShopType:string;
            address: {
                countryCode:string;
                regionCode:string;
                regionName:string;
                cityCode:string;
                cityName:string;
                addressString:string;
                geoCoordinates:Types.GeoCoordinates;
                limits:Types.Limits;
                workingTime:Types.WorkingTime;
            }
        }[];
        storagePeriod: {
            serviceCode:string;
            days:number;
        }[];
    }
}

export namespace LabelPort {
    export interface CreateLabelOrderDescriptionRequest {
        orderNum:string;
        parcelsNumber:number;
    }

    export interface CreateLabelOrderDescriptionResponse {
        orderNum:string;
        status:string;
        errorMessage?:string;
    }

    export interface CreateLabelFileRequest {
        fileFormat:"PDF"|"FP3";
        pageSize:"A5"|"A6";
        order:Array<CreateLabelOrderDescriptionRequest>;
    }

    export interface CreateLabelFileResponse {
        file:any;
        order:Array<CreateLabelOrderDescriptionResponse>;
    }
}

export namespace TracingPort {

    /**
     * Operation Confirm
     */

    export interface ConfirmRequest {
        docId:number;
    }

    export interface ConfirmResponse {
        docId:number;
    }

    /**
     * Operation GetStatesByClient
     */

    export interface GetStatesByClientRequest {}

    export interface GetStatesByClientResponse {
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
            /*parcelPhysicalWeight:number;
            parcelVolume:number;
            parcelVolumeWeight:number;
            parcelPayWeight:number;
            parcelLength:number;
            parcelWidth:number;
            parcelHeight:number;*/
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

    export interface GetStatesByClientOrderResponse extends GetStatesByClientResponse {}

    /**
     * Operation GetStatesByClientParcel
     */
    export interface GetStatesByClientParcelRequest {
        clientParcelNr:string;
        pickupDate?:string;
    }
    
    export interface GetStatesByClientParcelResponse extends GetStatesByClientResponse {}

    /**
     * Operation GetStatesByDPDOrder
     */

    export interface GetStatesByDPDOrderRequest {
        dpdOrderNr:string;
        pickupYear?:number;
    }

    export interface GetStatesByDPDOrderResponse extends GetStatesByClientResponse {}
}
