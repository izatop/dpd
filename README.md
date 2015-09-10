emspost
=======

This is a promise-based API library that provides access to DPD Web Services.

## Install

```
npm install dpd --save
```

## Usage

```js
var DPD = require('dpd');
var client = new DPD(1234567890, 'client secret key', {test: true});
client.geography.getCitiesCashPay().then(function (cities) {
    console.log(cities);
});
```

## Services

Example:

```js
client.serviceName.methodName(parameters).then(function (result) {
    ...
});
```

You can see description of any supported services in services/v1.d.ts and services/v2.d.ts.

**Notice: following interfaces described in TypeScript lang.**

### Geography

 * getCitiesCashPay
 * getTerminalsSelfDelivery2
 * getParcelShops

```js
client.geography.getCitiesCashPay().then(function (result) {
    ...
});
```

### Geography v2

 * getParcelShops
 * getTerminalsSelfDelivery2
 * getStoragePeriod

Example:

```js
client.geography2.getParcelShops({countryCode: 'RU'}).then(function (result) {
    ...
});
```

### Calculator v2

 * getServiceCost2
 * getServiceCostByParcels2
 
The following example written in TypeScript:

```ts
/// <reference path="path-to-dpd/src/services/v2.d.ts" />
var parameters:Calculator2Port.getServiceCostByParcels2Request = {
    pickup: {
        cityId: 1234
    },
    delivery: {
        cityId: 4321
    },
    selfPickup: false,
    selfDelivery: false,
    serviceCode: 'PCL',
    declaredValue: 1000000
}

client.calculator2.getServiceCost2(parameters).then(function (result:Calculator2Port.getServiceCostByParcels2Response) {
    ...
});
```

### Tracing

 * Confirm
 * GetStatesByClient
 * GetStatesByClientOrder
 * GetStatesByClientParcel
 * GetStatesByDPDOrder

### Tracing v2

 * Confirm
 * GetStatesByClient
 * GetStatesByClientOrder
 * GetStatesByClientParcel
 * GetStatesByDPDOrder

