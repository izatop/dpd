declare module Types {
    interface AuthorizationRequest {
        auth: {
            clientNumber:number;
            clientKey:string;
        }
    }

    interface GeoCoordinates {
        geoX:number;
        geoY:number;
    }

    interface WorkingTime {
        weekDays:string;
        workTime:string;
    }

    interface Limits {
        maxWeight:number;
        maxLength:number;
        maxWidth:number;
        maxHeight:number;
    }
}

declare module GeographyPort {
    interface getCitiesCashPayRequest {}
    interface getCitiesCashPayResponse {
        city: {
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
        }[];
    }

    interface getTerminalsSelfDelivery2Request {}

    interface getTerminalsSelfDelivery2Response {
        terminal: {
            terminalCode:string;
            terminalName:string;
            terminalAddress:string;
            geoCoordinates:Types.GeoCoordinates;
            workingTime:Types.WorkingTime[];
        }[];

        city: {
            cityId:number;
            cityCode:string;
            cityName:string;
            countryCode:string;
            countryName:string;
            regionCode:string;
            regionName:string;
        }[];
    }

    interface getParcelShopsRequest {
        countryCode:string;
        regionCode:string;
        cityCode:string;
        cityName:string;
        serviceCode:string;
    }

    interface getParcelShopsResponse {
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

declare module LabelPort {
    interface CreateLabelOrderDescriptionRequest {
        orderNum:string;
        parcelsNumber:number;
    }

    interface CreateLabelOrderDescriptionResponse {
        orderNum:string;
        status:string;
        errorMessage?:string;
    }

    interface CreateLabelFileRequest {
        fileFormat:"PDF"|"FP3";
        pageSize:"A5"|"A6";
        order:Array<CreateLabelOrderDescriptionRequest>;
    }

    interface CreateLabelFileResponse {
        file:any;
        order:Array<CreateLabelOrderDescriptionResponse>;
    }
}

declare module TracingPort {

    /**
     * Operation Confirm
     */

    interface ConfirmRequest {
        docId:number;
    }

    interface ConfirmResponse {
        docId:number;
    }

    /**
     * Operation GetStatesByClient
     */

    interface GetStatesByClientRequest {}

    interface GetStatesByClientResponse {
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

    interface GetStatesByClientOrderRequest {
        clientOrderNr:string;
        pickupDate?:string;
    }

    interface GetStatesByClientOrderResponse extends GetStatesByClientResponse {}

    /**
     * Operation GetStatesByClientParcel
     */

    interface GetStatesByClientParcelRequest {
        clientParcelNr:string;
        pickupDate?:string;
    }
    interface GetStatesByClientParcelResponse extends GetStatesByClientResponse {}

    /**
     * Operation GetStatesByDPDOrder
     */

    interface GetStatesByDPDOrderRequest {
        dpdOrderNr:string;
        pickupYear?:number;
    }

    interface GetStatesByDPDOrderResponse extends GetStatesByClientResponse {}
}