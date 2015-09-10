/// <reference path="./v1.d.ts" />
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _service = require('./service');

var Geography = (function (_Service) {
    _inherits(Geography, _Service);

    function Geography() {
        _classCallCheck(this, Geography);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(Geography.prototype), 'constructor', this).apply(this, args);
        this.namespace = 'geography';
    }

    _createClass(Geography, [{
        key: 'getCitiesCashPay',
        value: function getCitiesCashPay() {
            var parameters = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            return this.call('getCitiesCashPay', parameters);
        }
    }, {
        key: 'getTerminalsSelfDelivery2',
        value: function getTerminalsSelfDelivery2(parameters) {
            return this.call('getTerminalsSelfDelivery2', parameters);
        }
    }, {
        key: 'getParcelShops',
        value: function getParcelShops(parameters) {
            return this.call('getParcelShops', parameters, 'request');
        }
    }]);

    return Geography;
})(_service.Service);

exports.Geography = Geography;

var Tracing = (function (_Service2) {
    _inherits(Tracing, _Service2);

    function Tracing() {
        _classCallCheck(this, Tracing);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        _get(Object.getPrototypeOf(Tracing.prototype), 'constructor', this).apply(this, args);
        this.namespace = 'tracing';
    }

    _createClass(Tracing, [{
        key: 'confirm',
        value: function confirm(parameters) {
            return this.call('confirm', parameters);
        }
    }, {
        key: 'getStatesByClient',
        value: function getStatesByClient(parameters) {
            return this.call('getStatesByClient', parameters);
        }
    }, {
        key: 'getStatesByClientOrder',
        value: function getStatesByClientOrder(parameters) {
            return this.call('getStatesByClientOrder', parameters);
        }
    }, {
        key: 'getStatesByClientParcel',
        value: function getStatesByClientParcel(parameters) {
            return this.call('getStatesByClientParcel', parameters);
        }
    }, {
        key: 'getStatesByDPDOrder',
        value: function getStatesByDPDOrder(parameters) {
            return this.call('getStatesByDPDOrder', parameters);
        }
    }]);

    return Tracing;
})(_service.Service);

exports.Tracing = Tracing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy92MS50cyJdLCJuYW1lcyI6WyJHZW9ncmFwaHkiLCJHZW9ncmFwaHkuY29uc3RydWN0b3IiLCJHZW9ncmFwaHkuZ2V0Q2l0aWVzQ2FzaFBheSIsIkdlb2dyYXBoeS5nZXRUZXJtaW5hbHNTZWxmRGVsaXZlcnkyIiwiR2VvZ3JhcGh5LmdldFBhcmNlbFNob3BzIiwiVHJhY2luZyIsIlRyYWNpbmcuY29uc3RydWN0b3IiLCJUcmFjaW5nLmNvbmZpcm0iLCJUcmFjaW5nLmdldFN0YXRlc0J5Q2xpZW50IiwiVHJhY2luZy5nZXRTdGF0ZXNCeUNsaWVudE9yZGVyIiwiVHJhY2luZy5nZXRTdGF0ZXNCeUNsaWVudFBhcmNlbCIsIlRyYWNpbmcuZ2V0U3RhdGVzQnlEUERPcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3VCQUVzQixXQUFXOztJQUtqQyxTQUFBO2NBQUEsU0FBQTs7QUFBQUEsYUFBQSxTQUFBLEdBQUFBOzhCQUFBLFNBQUE7OzBDQUFBQSxJQUFBQTtBQUFBQSxnQkFBQUE7OztBQUErQkMsbUNBQS9CLFNBQUEsOENBQStCQSxJQUFBQSxFQUFPQTtBQUNsQ0EsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBVUEsV0FBV0EsQ0FBQ0E7S0F5QmxDQTs7aUJBMUJELFNBQUE7O2VBT29CRCw0QkFBc0RBO2dCQUFyREEsVUFBVUEseURBQXlDQSxFQUFFQTs7QUFDbEVFLG1CQUFPQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO1NBQ3BEQTs7O2VBTXdCRixtQ0FBQ0EsVUFBeURBLEVBQUFBO0FBQy9FRyxtQkFBT0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtTQUM3REE7OztlQU1hSCx3QkFBQ0EsVUFBOENBLEVBQUFBO0FBQ3pESSxtQkFBT0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxVQUFVQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtTQUM3REE7OztXQXpCTCxTQUFBOzs7OztJQTRCQSxPQUFBO2NBQUEsT0FBQTs7QUFBQUMsYUFBQSxPQUFBLEdBQUFBOzhCQUFBLE9BQUE7OzJDQUFBQSxJQUFBQTtBQUFBQSxnQkFBQUE7OztBQUE2QkMsbUNBQTdCLE9BQUEsOENBQTZCQSxJQUFBQSxFQUFPQTtBQUNoQ0EsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBVUEsU0FBU0EsQ0FBQ0E7S0F5Q2hDQTs7aUJBMUNELE9BQUE7O2VBT1dELGlCQUFDQSxVQUFxQ0EsRUFBQUE7QUFDekNFLG1CQUFPQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtTQUMzQ0E7OztlQU1nQkYsMkJBQUNBLFVBQStDQSxFQUFBQTtBQUM3REcsbUJBQU9BLElBQUlBLENBQUNBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7U0FDckRBOzs7ZUFNcUJILGdDQUFDQSxVQUFvREEsRUFBQUE7QUFDdkVJLG1CQUFPQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSx3QkFBd0JBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO1NBQzFEQTs7O2VBTXNCSixpQ0FBQ0EsVUFBcURBLEVBQUFBO0FBQ3pFSyxtQkFBT0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EseUJBQXlCQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtTQUMzREE7OztlQU1rQkwsNkJBQUNBLFVBQWlEQSxFQUFBQTtBQUNqRU0sbUJBQU9BLElBQUlBLENBQUNBLElBQUlBLENBQUNBLHFCQUFxQkEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7U0FDdkRBOzs7V0F6Q0wsT0FBQSIsImZpbGUiOiJzZXJ2aWNlcy92MS5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiJkOlxcd3d3XFxkZWxpdmVyeVxcZHBkXFxidWlsZC10cyJ9