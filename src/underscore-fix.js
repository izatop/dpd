// fix bug for underscore: https://github.com/jashkenas/underscore/issues/2293

var _ = require('../node_modules/easysoap/node_modules/underscore');
var util = require('util');

// redefine `each` function with util.isArray
_.each = _.forEach = function(obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context);
    var i, length;
    if (util.isArray(obj)) {
        for (i = 0, length = obj.length; i < length; i++) {
            iteratee(obj[i], i, obj);
        }
    } else {
        var keys = _.keys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
            iteratee(obj[keys[i]], keys[i], obj);
        }
    }
    return obj;
};