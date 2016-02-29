declare module "easysoap" {
    interface IClientParameters {
        host:string;
        path:string;
        wsdl?:string;

        header?:{
            name:string;
            value:string;
            namespace:string;
        }[];
    }

    interface IClientOptions {
        secure:boolean;
    }

    interface IMethodOptions {
        method:string;
        namespace?:string;
        header?:{
            [key:string]:string;
        };
        params?:any;
    }

    export interface SOAPClient {
        constructor(parameters:IClientParameters, options?:IClientOptions);

        call(parameter:IMethodOptions):Promise<any>;
    }

    interface createClient {
        (parameters:IClientParameters, options?:IClientOptions):SOAPClient;
    }

    export function createClient(parameters:IClientParameters, options?:IClientOptions):SOAPClient;
}