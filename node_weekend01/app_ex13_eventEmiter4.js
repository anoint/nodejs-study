var Calc  = require('./app_ex12_eventEmiter3');

var calc = new Calc();

calc.emit('stop');

console.log(Calc.title +'에 stop 요청.');