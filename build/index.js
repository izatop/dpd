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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDcmVkZW50aWFscyIsIkNyZWRlbnRpYWxzLmNvbnN0cnVjdG9yIiwiRFBEIiwiRFBELmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzBCQUFvQixlQUFlOztJQUF2QixFQUFFOzswQkFDTSxlQUFlOztJQUF2QixFQUFFOztJQUVkLFdBQUEsR0FJSUEsU0FKSixXQUFBLENBSWdCQSxNQUFhQSxFQUFFQSxHQUFVQSxFQUFBQTswQkFKekMsV0FBQTs7QUFLUUMsUUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7QUFDckJBLFFBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBO0NBQ2xCQTs7SUFHTCxHQUFBLEdBV0lDLFNBWEosR0FBQSxDQVdnQkEsTUFBYUEsRUFBRUEsR0FBVUEsRUFBeUNBO1FBQXZDQSxPQUFPQSx5REFBbUJBLEVBQUNBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUNBOzswQkFYbEYsR0FBQTs7QUFZUUMsUUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsV0FBV0EsQ0FBQ0E7QUFDNUJBLFFBQUlBLE9BQU9BLENBQUNBLElBQUlBLEVBQUVBO0FBQ2RBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLGVBQWVBLENBQUNBO0tBQ25DQTtBQUVEQSxRQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxXQUFXQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtBQUNoREEsUUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFFBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxRQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxFQUFFQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM1Q0EsUUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsRUFBRUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDbENBLFFBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxRQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxFQUFFQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtDQUN6Q0E7O3FCQUdVLEdBQUciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBWMSBmcm9tICcuL3NlcnZpY2VzL3YxJztcclxuaW1wb3J0ICogYXMgVjIgZnJvbSAnLi9zZXJ2aWNlcy92Mic7XHJcblxyXG5jbGFzcyBDcmVkZW50aWFscyBpbXBsZW1lbnRzIElDcmVkZW50aWFscyB7XHJcbiAgICBwdWJsaWMgY2xpZW50Om51bWJlcjtcclxuICAgIHB1YmxpYyBrZXk6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudDpudW1iZXIsIGtleTpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRFBEIGltcGxlbWVudHMgSUNvbnRleHQge1xyXG4gICAgY3JlZGVudGlhbHM6Q3JlZGVudGlhbHM7XHJcbiAgICBob3N0bmFtZTpzdHJpbmc7XHJcblxyXG4gICAgZ2VvZ3JhcGh5OlYxLkdlb2dyYXBoeTtcclxuICAgIGdlb2dyYXBoeTI6VjIuR2VvZ3JhcGh5MjtcclxuICAgIGNhbGN1bGF0b3IyOlYyLkNhbGN1bGF0b3IyO1xyXG4gICAgb3JkZXIyOlYyLk9yZGVyMjtcclxuICAgIHRyYWNpbmc6VjEuVHJhY2luZztcclxuICAgIHRyYWNpbmcyOlYyLlRyYWNpbmcyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudDpudW1iZXIsIGtleTpzdHJpbmcsIG9wdGlvbnM6SVNlcnZpY2VPcHRpb25zID0ge3Rlc3Q6IGZhbHNlfSkge1xyXG4gICAgICAgIHRoaXMuaG9zdG5hbWUgPSAnd3MuZHBkLnJ1JztcclxuICAgICAgICBpZiAob3B0aW9ucy50ZXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdG5hbWUgPSAnd3N0ZXN0LmRwZC5ydSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IENyZWRlbnRpYWxzKGNsaWVudCwga2V5KTtcclxuICAgICAgICB0aGlzLmdlb2dyYXBoeSA9IG5ldyBWMS5HZW9ncmFwaHkodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZW9ncmFwaHkyID0gbmV3IFYyLkdlb2dyYXBoeTIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdG9yMiA9IG5ldyBWMi5DYWxjdWxhdG9yMih0aGlzKTtcclxuICAgICAgICB0aGlzLm9yZGVyMiA9IG5ldyBWMi5PcmRlcjIodGhpcyk7XHJcbiAgICAgICAgdGhpcy50cmFjaW5nID0gbmV3IFYxLlRyYWNpbmcodGhpcyk7XHJcbiAgICAgICAgdGhpcy50cmFjaW5nMiA9IG5ldyBWMi5UcmFjaW5nMih0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRFBEOyJdLCJzb3VyY2VSb290IjoiZDpcXHd3d1xcZGVsaXZlcnlcXGRwZFxcYnVpbGQtdHMifQ==