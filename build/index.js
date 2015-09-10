'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _servicesV1 = require('./services/v1');

var V1 = _interopRequireWildcard(_servicesV1);

var _servicesV2 = require('./services/v2');

var V2 = _interopRequireWildcard(_servicesV2);

var Credentials = function Credentials(client, key) {
    _classCallCheck(this, Credentials);

    this.client = client;
    this.key = key;
};

var DPD = function DPD(client, key) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? { test: false } : arguments[2];

    _classCallCheck(this, DPD);

    this.hostname = 'ws.dpd.ru';
    if (options.test) {
        this.hostname = 'wstest.dpd.ru';
    }
    console.log('hostname:', this.hostname);
    this.credentials = new Credentials(client, key);
    this.geography = new V1.Geography(this);
    this.geography2 = new V2.Geography2(this);
    this.calculator2 = new V2.Calculator2(this);
    this.order2 = new V2.Order2(this);
    this.tracing = new V1.Tracing(this);
    this.tracing2 = new V2.Tracing2(this);
};

exports['default'] = DPD;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDcmVkZW50aWFscyIsIkNyZWRlbnRpYWxzLmNvbnN0cnVjdG9yIiwiRFBEIiwiRFBELmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzBCQUFvQixlQUFlOztJQUF2QixFQUFFOzswQkFDTSxlQUFlOztJQUF2QixFQUFFOztJQUVkLFdBQUEsR0FJSUEsU0FKSixXQUFBLENBSWdCQSxNQUFhQSxFQUFFQSxHQUFVQSxFQUFBQTswQkFKekMsV0FBQTs7QUFLUUMsUUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7QUFDckJBLFFBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBO0NBQ2xCQTs7SUFHTCxHQUFBLEdBV0lDLFNBWEosR0FBQSxDQVdnQkEsTUFBYUEsRUFBRUEsR0FBVUEsRUFBeUNBO1FBQXZDQSxPQUFPQSx5REFBbUJBLEVBQUNBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUNBOzswQkFYbEYsR0FBQTs7QUFZUUMsUUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsV0FBV0EsQ0FBQ0E7QUFDNUJBLFFBQUlBLE9BQU9BLENBQUNBLElBQUlBLEVBQUVBO0FBQ2RBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLGVBQWVBLENBQUNBO0tBQ25DQTtBQUVEQSxXQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtBQUV4Q0EsUUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsV0FBV0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7QUFDaERBLFFBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3hDQSxRQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsUUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsRUFBRUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNUNBLFFBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLEVBQUVBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQ2xDQSxRQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwQ0EsUUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsRUFBRUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Q0FDekNBOztxQkFHVSxHQUFHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVjEgZnJvbSAnLi9zZXJ2aWNlcy92MSc7XHJcbmltcG9ydCAqIGFzIFYyIGZyb20gJy4vc2VydmljZXMvdjInO1xyXG5cclxuY2xhc3MgQ3JlZGVudGlhbHMgaW1wbGVtZW50cyBJQ3JlZGVudGlhbHMge1xyXG4gICAgcHVibGljIGNsaWVudDpudW1iZXI7XHJcbiAgICBwdWJsaWMga2V5OnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnQ6bnVtYmVyLCBrZXk6c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERQRCBpbXBsZW1lbnRzIElDb250ZXh0IHtcclxuICAgIGNyZWRlbnRpYWxzOkNyZWRlbnRpYWxzO1xyXG4gICAgaG9zdG5hbWU6c3RyaW5nO1xyXG5cclxuICAgIGdlb2dyYXBoeTpWMS5HZW9ncmFwaHk7XHJcbiAgICBnZW9ncmFwaHkyOlYyLkdlb2dyYXBoeTI7XHJcbiAgICBjYWxjdWxhdG9yMjpWMi5DYWxjdWxhdG9yMjtcclxuICAgIG9yZGVyMjpWMi5PcmRlcjI7XHJcbiAgICB0cmFjaW5nOlYxLlRyYWNpbmc7XHJcbiAgICB0cmFjaW5nMjpWMi5UcmFjaW5nMjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnQ6bnVtYmVyLCBrZXk6c3RyaW5nLCBvcHRpb25zOklTZXJ2aWNlT3B0aW9ucyA9IHt0ZXN0OiBmYWxzZX0pIHtcclxuICAgICAgICB0aGlzLmhvc3RuYW1lID0gJ3dzLmRwZC5ydSc7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudGVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3RuYW1lID0gJ3dzdGVzdC5kcGQucnUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hvc3RuYW1lOicsIHRoaXMuaG9zdG5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IENyZWRlbnRpYWxzKGNsaWVudCwga2V5KTtcclxuICAgICAgICB0aGlzLmdlb2dyYXBoeSA9IG5ldyBWMS5HZW9ncmFwaHkodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZW9ncmFwaHkyID0gbmV3IFYyLkdlb2dyYXBoeTIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdG9yMiA9IG5ldyBWMi5DYWxjdWxhdG9yMih0aGlzKTtcclxuICAgICAgICB0aGlzLm9yZGVyMiA9IG5ldyBWMi5PcmRlcjIodGhpcyk7XHJcbiAgICAgICAgdGhpcy50cmFjaW5nID0gbmV3IFYxLlRyYWNpbmcodGhpcyk7XHJcbiAgICAgICAgdGhpcy50cmFjaW5nMiA9IG5ldyBWMi5UcmFjaW5nMih0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRFBEOyJdLCJzb3VyY2VSb290IjoiZDpcXHd3d1xcZGVsaXZlcnlcXGRwZFxcYnVpbGQtdHMifQ==