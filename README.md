DPD
===

DPD Web Services client library.

## Install

```
npm i -S dpd
```

### Requirements
Node.js 4+

## Usage

```js
const {DPD} = require('dpd');
const services = new DPD({
    hostname: 'ws.dpd.com', 
    clientId: 1234567890, 
    secretKey: 'client secret key',
    resources: {
        cities: './resources/cities.csv'
    }
});

services.geography.getCitiesCashPay().then(function (cities) {
    console.log(cities);
});
```

### Options

 * hostname     - This is a DPD Web Service hostname 
 * clientId     - Your client identifier  
 * secretKey    - Your secret key
 * resources
    * cities    - A path to CSV database for getCities method (default resources/cities.csv)

### Request a service

```js
const result = services.serviceName.serviceMethodName(parameters);
```

## Services

There are list of DPD Web Services.

### Geography

 * getCities
 * getCitiesCashPay
 * getTerminalsSelfDelivery2
 * getParcelShops


#### Example

```js
services.geography.getCitiesCashPay({})
    .then(result => console.log(result));
```

#### getCities

Gets DPD cities as a Readable stream.

```js
services.geography.getCities()
    .on('data', city => console.log(city));
```

output:

```
...
{ country: 'Беларусь',
  region: 'Минская',
  district: null,
  id: '3444661908',
  code: '06258808111',
  type: 'п',
  locality: 'Черноградь',
  index_min: '223237',
  index_max: '223237' }
...
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
const parameters:Calculator2Port.getServiceCostByParcels2Request = {
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

### Order v2

 * createOrder
 * getOrderStatus
 * createAddress
 * updateAddress
 * getInvoiceFile
 * getRegisterFile
 * addParcels
 * removeParcels


### Tracing

 * confirm
 * getStatesByClient
 * getStatesByClientOrder
 * getStatesByClientParcel
 * getStatesByDPDOrder

### Tracing v2

 * getStatesByClientOrder
 * getStatesByClientParcel
 * getStatesByDPDOrder

