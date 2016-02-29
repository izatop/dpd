declare module "soap" {
    export function createClient(params:any, callback:(error, client:any) => void):any;
    export function createClient(params:any, options:any, callback:(error, client:any) => void):any;
}