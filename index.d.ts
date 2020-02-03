import * as V1 from './services/v1';
import * as V2 from './services/v2';
export interface ICredentials {
    client: number;
    key: string;
}
export interface IServiceOptions {
    hostname: string;
    clientId: number;
    secretKey: string;
    resources?: {
        cities: string;
    };
}
export interface IServiceResponse {
    [key: string]: any;
}
export interface IServiceRequest {
    [key: string]: any;
}
export declare class Credentials implements ICredentials {
    client: number;
    key: string;
    constructor(client: number, key: string);
}
export declare class DPD {
    credentials: Credentials;
    hostname: string;
    resources: {
        cities: string;
    };
    geography: V1.Geography;
    geography2: V2.Geography2;
    calculator2: V2.Calculator2;
    order2: V2.Order2;
    tracing: V1.Tracing;
    tracing2: V2.Tracing2;
    label: V1.Label;
    constructor(options: IServiceOptions);
}
