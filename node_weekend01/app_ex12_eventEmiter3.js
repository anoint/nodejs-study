var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calc = function() {
    var self = this;
    this.on('stop', function() {
        console.log('stop 이벤트 전달 됨');
    });
};

//EventEmitter를 상속 받는다.
util.inherits(Calc, EventEmitter);

module.exports = Calc;
module.exports.title = 'calculator';