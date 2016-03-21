'use strict';

import * as V1 from './services/v1';
import * as V2 from './services/v2';

class Credentials implements ICredentials {
    public client:number;
    public key:string;

    constructor(client:number, key:string) {
        this.client = client;
        this.key = key;
    }
}

class DPD implements IContext {
    credentials:Credentials;
    hostname:string;

    geography:V1.Geography;
    geography2:V2.Geography2;
    calculator2:V2.Calculator2;
    order2:V2.Order2;
    tracing:V1.Tracing;
    tracing2:V2.Tracing2;
    label:V1.Label;

    constructor(client:number, key:string, options:IServiceOptions) {
        this.hostname = 'ws.dpd.ru';
        if (options.test) {
            this.hostname = 'wstest.dpd.ru';
        }

        this.credentials = new Credentials(client, key);
        this.geography = new V1.Geography(this);
        this.geography2 = new V2.Geography2(this);
        this.calculator2 = new V2.Calculator2(this);
        this.order2 = new V2.Order2(this);
        this.tracing = new V1.Tracing(this);
        this.tracing2 = new V2.Tracing2(this);
        this.label = new V1.Label(this);
    }
}

export = DPD;