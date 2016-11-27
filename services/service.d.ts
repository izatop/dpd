import { DPD } from "../index";
export declare class Service {
    namespace: string;
    context: DPD;
    client: any;
    constructor(context: DPD);
    /**
     * This function calls the service own methods.
     *
     * @param method        Service's method name
     * @param parameters    Method's parameters
     * @param ns            Method's envelope namespace which includes parameters.
     * @returns {Promise<T>}
     */
    call<T>(method: string, parameters?: any, ns?: string): Promise<T>;
    private fixParameters(value);
    private send(options, resolve, reject);
}
