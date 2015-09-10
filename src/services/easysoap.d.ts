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

    interface IPromiseable {
        done(success:IInvokableResultHandler, failure:IInvokableFailureHandler);
    }

    interface IInvokableResultHandler {
        (result:any):void;
    }

    interface IInvokableFailureHandler {
        (error:Error):void;
    }

    export class Client {
        constructor(parameters:IClientParameters, options?:IClientOptions);

        call(parameter:IMethodOptions):IPromiseable;
    }
}