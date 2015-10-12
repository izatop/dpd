/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../index.d.ts" />
/// <reference path="./easysoap.d.ts" />
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _easysoap = require('easysoap');

var SOAPClient = _interopRequireWildcard(_easysoap);

require('../underscore-fix.js');

var Service = (function () {
    function Service(context) {
        _classCallCheck(this, Service);

        this.context = context;
    }

    _createClass(Service, [{
        key: 'createClient',
        value: function createClient() {
            if (!this.client) {
                this.client = new SOAPClient.Client({
                    host: this.context.hostname,
                    path: '/services/' + this.namespace,
                    wsdl: '/services/' + this.namespace + '?wsdl'
                }, {
                    secure: true
                });
            }
        }
    }, {
        key: 'call',
        value: function call(method) {
            var _this = this;

            var parameters = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
            var ns = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            this.createClient();
            return new Promise(function (resolve, reject) {
                if (parameters === null) {
                    parameters = {};
                }
                var envelope = {
                    auth: {
                        clientNumber: _this.context.credentials.client,
                        clientKey: _this.context.credentials.key
                    }
                },
                    options = {
                    method: method,
                    params: {}
                };
                Object.keys(parameters).forEach(function (key) {
                    envelope[key] = parameters[key];
                });
                if (ns) {
                    options.params = _defineProperty({}, ns, envelope);
                } else {
                    options.params = envelope;
                }
                _this.client.call(options).done(function (result) {
                    return Service.handle(result, resolve, reject);
                }, function (failure) {
                    return reject(failure);
                });
            });
        }
    }], [{
        key: 'handle',
        value: function handle(body, resolve, reject) {
            var data = body.data;
            if (data.hasOwnProperty('Fault')) {
                if (data.Fault.length > 0) {
                    reject(new Error(data.Fault[0]._value.faultstring));
                } else {
                    reject(new Error('Something went wrong'));
                }
            } else {
                resolve(data.hasOwnProperty('return') ? data['return'] : null);
            }
        }
    }]);

    return Service;
})();

exports.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNlcnZpY2UiLCJTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiU2VydmljZS5jcmVhdGVDbGllbnQiLCJTZXJ2aWNlLmNhbGwiLCJTZXJ2aWNlLmhhbmRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBSTRCLFVBQVU7O0lBQTFCLFVBQVU7O0FBSXRCLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztJQUVoQyxPQUFBO0FBTUlBLGFBTkosT0FBQSxDQU1nQkEsT0FBZ0JBLEVBQUFBOzhCQU5oQyxPQUFBOztBQU9RQyxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtLQUMxQkE7O2lCQVJMLE9BQUE7O2VBYWdCRCx3QkFBQUE7QUFDUkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBO0FBQ2RBLG9CQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUMvQkE7QUFDSUEsd0JBQUlBLEVBQUVBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBO0FBQzNCQSx3QkFBSUEsaUJBQWVBLElBQUlBLENBQUNBLFNBQVNBLEFBQUVBO0FBQ25DQSx3QkFBSUEsaUJBQWVBLElBQUlBLENBQUNBLFNBQVNBLFVBQU9BO2lCQUMzQ0EsRUFDREE7QUFDSUEsMEJBQU1BLEVBQUVBLElBQUlBO2lCQUNmQSxDQUNKQSxDQUFDQTthQUNMQTtTQUNKQTs7O2VBVUdGLGNBQUlBLE1BQWFBLEVBQXlDQTs7O2dCQUF2Q0EsVUFBVUEseURBQU9BLElBQUlBO2dCQUFFQSxFQUFFQSx5REFBVUEsSUFBSUE7O0FBQzFERyxnQkFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0E7QUFDcEJBLG1CQUFPQSxJQUFJQSxPQUFPQSxDQUFDQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxFQUFBQTtBQUMvQkEsb0JBQUlBLFVBQVVBLEtBQUtBLElBQUlBLEVBQUVBO0FBQ3JCQSw4QkFBVUEsR0FBR0EsRUFBRUEsQ0FBQ0E7aUJBQ25CQTtBQUVEQSxvQkFBSUEsUUFBUUEsR0FBR0E7QUFDUEEsd0JBQUlBLEVBQUVBO0FBQ0ZBLG9DQUFZQSxFQUFFQSxNQUFLQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQTtBQUM3Q0EsaUNBQVNBLEVBQUVBLE1BQUtBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBO3FCQUMxQ0E7aUJBQ0pBO29CQUNEQSxPQUFPQSxHQUFHQTtBQUNOQSwwQkFBTUEsRUFBRUEsTUFBTUE7QUFDZEEsMEJBQU1BLEVBQUVBLEVBQUVBO2lCQUNiQSxDQUFDQTtBQUVOQSxzQkFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsR0FBR0EsRUFBQUE7QUFDekMsNEJBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ25DLENBQUNBLENBQUNBO0FBRUhBLG9CQUFJQSxFQUFFQSxFQUFFQTtBQUNKQSwyQkFBT0EsQ0FBQ0EsTUFBTUEsdUJBQUtBLEVBQUVBLEVBQUdBLFFBQVFBLENBQUNBLENBQUNBO2lCQUNyQ0EsTUFBTUE7QUFDSEEsMkJBQU9BLENBQUNBLE1BQU1BLEdBQUdBLFFBQVFBLENBQUNBO2lCQUM3QkE7QUFFREEsc0JBQUtBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQzFCQSxVQUFDQSxNQUFNQTsyQkFBS0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsRUFBRUEsT0FBT0EsRUFBRUEsTUFBTUEsQ0FBQ0E7aUJBQUFBLEVBQ25EQSxVQUFDQSxPQUFPQTsyQkFBS0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7aUJBQUFBLENBQy9CQSxDQUFDQTthQUNMQSxDQUFDQSxDQUFDQTtTQUNOQTs7O2VBU29CSCxnQkFBQ0EsSUFBeUNBLEVBQUVBLE9BQU9BLEVBQUVBLE1BQU1BLEVBQUFBO0FBQzVFSSxnQkFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7QUFFckJBLGdCQUFJQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQTtBQUM5QkEsb0JBQUlBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUVBO0FBQ3ZCQSwwQkFBTUEsQ0FBQ0EsSUFBSUEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7aUJBQ3ZEQSxNQUFNQTtBQUNIQSwwQkFBTUEsQ0FBQ0EsSUFBSUEsS0FBS0EsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxDQUFDQSxDQUFDQTtpQkFDN0NBO2FBQ0pBLE1BQU1BO0FBQ0hBLHVCQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxJQUFJQSxVQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTthQUMvREE7U0FDSkE7OztXQTFGTCxPQUFBIiwiZmlsZSI6InNlcnZpY2VzL3NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiZDpcXHd3d1xcZGVsaXZlcnlcXGRwZFxcYnVpbGQtdHMifQ==