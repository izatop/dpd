/// <reference path="./v2.d.ts" />
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _service = require('./service');

var Geography2 = (function (_Service) {
    _inherits(Geography2, _Service);

    function Geography2() {
        _classCallCheck(this, Geography2);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(Geography2.prototype), 'constructor', this).apply(this, args);
        this.namespace = 'geography2';
    }

    _createClass(Geography2, [{
        key: 'getTerminalsSelfDelivery2',
        value: function getTerminalsSelfDelivery2(parameters) {
            return this.call('getTerminalsSelfDelivery2', parameters);
        }
    }, {
        key: 'getParcelShops',
        value: function getParcelShops(parameters) {
            return this.call('getParcelShops', parameters, 'request');
        }
    }, {
        key: 'getStoragePeriod',
        value: function getStoragePeriod(parameters) {
            return this.call('getStoragePeriod', parameters, 'request');
        }
    }]);

    return Geography2;
})(_service.Service);

exports.Geography2 = Geography2;

var Calculator2 = (function (_Service2) {
    _inherits(Calculator2, _Service2);

    function Calculator2() {
        _classCallCheck(this, Calculator2);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        _get(Object.getPrototypeOf(Calculator2.prototype), 'constructor', this).apply(this, args);
        this.namespace = 'calculator2';
    }

    _createClass(Calculator2, [{
        key: 'getServiceCost2',
        value: function getServiceCost2(parameters) {
            return this.call('getServiceCost2', parameters, 'request');
        }
    }, {
        key: 'getServiceCostByParcels2',
        value: function getServiceCostByParcels2(parameters) {
            return this.call('getServiceCostByParcels2', parameters, 'request');
        }
    }]);

    return Calculator2;
})(_service.Service);

exports.Calculator2 = Calculator2;

var Order2 = (function (_Service3) {
    _inherits(Order2, _Service3);

    function Order2() {
        _classCallCheck(this, Order2);

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        _get(Object.getPrototypeOf(Order2.prototype), 'constructor', this).apply(this, args);
        this.namespace = 'order2';
    }

    _createClass(Order2, [{
        key: 'createOrder',
        value: function createOrder(parameters) {
            return this.call("createOrder", parameters, 'orders');
        }
    }, {
        key: 'getOrderStatus',
        value: function getOrderStatus(parameters) {
            return this.call("getOrderStatus", parameters, 'orderStatus');
        }
    }, {
        key: 'createAddress',
        value: function createAddress(parameters) {
            return this.call("createAddress", parameters, 'address');
        }
    }, {
        key: 'updateAddress',
        value: function updateAddress(parameters) {
            return this.call("updateAddress", parameters, 'address');
        }
    }, {
        key: 'getInvoiceFile',
        value: function getInvoiceFile(parameters) {
            return this.call("getInvoiceFile", parameters, 'request');
        }
    }, {
        key: 'getRegisterFile',
        value: function getRegisterFile(parameters) {
            return this.call("getRegisterFile", parameters, 'request');
        }
    }, {
        key: 'addParcels',
        value: function addParcels(parameters) {
            return this.call('parameters', parameters, 'parcels');
        }
    }, {
        key: 'removeParcels',
        value: function removeParcels(parameters) {
            return this.call('parameters', parameters, 'parcels');
        }
    }]);

    return Order2;
})(_service.Service);

exports.Order2 = Order2;

var Tracing2 = (function (_Service4) {
    _inherits(Tracing2, _Service4);

    function Tracing2() {
        _classCallCheck(this, Tracing2);

        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        _get(Object.getPrototypeOf(Tracing2.prototype), 'constructor', this).apply(this, args);
        this.namespace = 'tracing';
    }

    _createClass(Tracing2, [{
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

    return Tracing2;
})(_service.Service);

exports.Tracing2 = Tracing2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy92Mi50cyJdLCJuYW1lcyI6WyJHZW9ncmFwaHkyIiwiR2VvZ3JhcGh5Mi5jb25zdHJ1Y3RvciIsIkdlb2dyYXBoeTIuZ2V0VGVybWluYWxzU2VsZkRlbGl2ZXJ5MiIsIkdlb2dyYXBoeTIuZ2V0UGFyY2VsU2hvcHMiLCJHZW9ncmFwaHkyLmdldFN0b3JhZ2VQZXJpb2QiLCJDYWxjdWxhdG9yMiIsIkNhbGN1bGF0b3IyLmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvcjIuZ2V0U2VydmljZUNvc3QyIiwiQ2FsY3VsYXRvcjIuZ2V0U2VydmljZUNvc3RCeVBhcmNlbHMyIiwiT3JkZXIyIiwiT3JkZXIyLmNvbnN0cnVjdG9yIiwiT3JkZXIyLmNyZWF0ZU9yZGVyIiwiT3JkZXIyLmdldE9yZGVyU3RhdHVzIiwiT3JkZXIyLmNyZWF0ZUFkZHJlc3MiLCJPcmRlcjIudXBkYXRlQWRkcmVzcyIsIk9yZGVyMi5nZXRJbnZvaWNlRmlsZSIsIk9yZGVyMi5nZXRSZWdpc3RlckZpbGUiLCJPcmRlcjIuYWRkUGFyY2VscyIsIk9yZGVyMi5yZW1vdmVQYXJjZWxzIiwiVHJhY2luZzIiLCJUcmFjaW5nMi5jb25zdHJ1Y3RvciIsIlRyYWNpbmcyLmdldFN0YXRlc0J5Q2xpZW50T3JkZXIiLCJUcmFjaW5nMi5nZXRTdGF0ZXNCeUNsaWVudFBhcmNlbCIsIlRyYWNpbmcyLmdldFN0YXRlc0J5RFBET3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozt1QkFFc0IsV0FBVzs7SUFFakMsVUFBQTtjQUFBLFVBQUE7O0FBQUFBLGFBQUEsVUFBQSxHQUFBQTs4QkFBQSxVQUFBOzswQ0FBQUEsSUFBQUE7QUFBQUEsZ0JBQUFBOzs7QUFBZ0NDLG1DQUFoQyxVQUFBLDhDQUFnQ0EsSUFBQUEsRUFBT0E7QUFDbkNBLFlBQUFBLENBQUFBLFNBQVNBLEdBQVVBLFlBQVlBLENBQUNBO0tBeUJuQ0E7O2lCQTFCRCxVQUFBOztlQU82QkQsbUNBQUNBLFVBQTBE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QUFDcERTLG1CQUFPQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxVQUFVQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtTQUN6REE7OztXQWpFTCxNQUFBOzs7OztJQW9FQSxRQUFBO2NBQUEsUUFBQTs7QUFBQUMsYUFBQSxRQUFBLEdBQUFBOzhCQUFBLFFBQUE7OzJDQUFBQSxJQUFBQTtBQUFBQSxnQkFBQUE7OztBQUE4QkMsbUNBQTlCLFFBQUEsOENBQThCQSxJQUFBQSxFQUFPQTtBQUNqQ0EsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBVUEsU0FBU0EsQ0FBQ0E7S0F5QmhDQTs7aUJBMUJELFFBQUE7O2VBTzBCRCxnQ0FBQ0EsVUFBcURBLEVBQUFBO0FBQ3hFRSxtQkFBT0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esd0JBQXdCQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtTQUMxREE7OztlQU1zQkYsaUNBQUNBLFVBQXNEQSxFQUFBQTtBQUMxRUcsbUJBQU9BLElBQUlBLENBQUNBLElBQUlBLENBQUNBLHlCQUF5QkEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7U0FDM0RBOzs7ZUFNa0JILDZCQUFDQSxVQUFrREEsRUFBQUE7QUFDbEVJLG1CQUFPQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO1NBQ3ZEQTs7O1dBekJMLFFBQUEiLCJmaWxlIjoic2VydmljZXMvdjIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiZDpcXHd3d1xcZGVsaXZlcnlcXGRwZFxcYnVpbGQtdHMifQ==