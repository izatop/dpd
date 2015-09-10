interface ICredentials {
    client:number;
    key:string;
}

interface IServiceOptions {
    test:boolean;
}

interface IContext {
    credentials:ICredentials;
    hostname:string;
}

interface IServiceResponse {
    [key:string]:any;
}

interface IServiceRequest {
    [key:string]:any;
}