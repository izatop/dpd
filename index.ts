import {ok} from 'assert';
import * as V1 from './services/v1';
import * as V2 from './services/v2';
import {resolve} from "path";

export interface ICredentials {
    client:number;
    key:string;
}

export interface IServiceOptions {
    hostname:string;
    clientId:number;
    secretKey:string;
    resources?: {
        cities: string;
    }
}

export interface IServiceResponse {
    [key:string]:any;
}

export interface IServiceRequest {
    [key:string]:any;
}


export class Credentials implements ICredentials {
    public client:number;
    public key:string;

    constructor(client:number, key:string) {
        this.client = client;
        this.key = key;
    }
}

export class DPD {
    credentials: Credentials;
    hostname:string;
    resources = {
        cities: resolve(__dirname, './resources/cities.csv')
    };

    geography:V1.Geography;
    geography2:V2.Geography2;
    calculator2:V2.Calculator2;
    order2:V2.Order2;
    tracing:V1.Tracing;
    tracing2:V2.Tracing2;
    label:V1.Label;

    constructor(options:IServiceOptions) {
        ok(options.secretKey, 'A "key" option is required');
        ok(options.clientId, 'A "client" option is required');
        ok(options.hostname, 'A "hostname" option is required');
        
        if (options.resources && options.resources) {
            this.resources = {
                cities: options.resources.cities
            };
        }
        
        this.hostname = options.hostname;
        this.credentials = new Credentials(options.clientId, options.secretKey);
        this.geography = new V1.Geography(this);
        this.geography2 = new V2.Geography2(this);
        this.calculator2 = new V2.Calculator2(this);
        this.order2 = new V2.Order2(this);
        this.tracing = new V1.Tracing(this);
        this.tracing2 = new V2.Tracing2(this);
        this.label = new V1.Label(this);
    }
}
