'use strict';
var V1 = require('./services/v1');
var V2 = require('./services/v2');
var Credentials = (function () {
    function Credentials(client, key) {
        this.client = client;
        this.key = key;
    }
    return Credentials;
}());
var DPD = (function () {
    function DPD(client, key, options) {
        if (options === void 0) { options = { test: false }; }
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
    }
    return DPD;
}());
module.exports = DPD;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsSUFBWSxFQUFFLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFDcEMsSUFBWSxFQUFFLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFJcEM7SUFJSSxxQkFBWSxNQUFhLEVBQUUsR0FBVTtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUVEO0lBV0ksYUFBWSxNQUFhLEVBQUUsR0FBVSxFQUFFLE9BQXVDO1FBQXZDLHVCQUF1QyxHQUF2QyxZQUEyQixJQUFJLEVBQUUsS0FBSyxFQUFDO1FBQzFFLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDcEMsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQUVELGlCQUFTLEdBQUcsQ0FBQyJ9