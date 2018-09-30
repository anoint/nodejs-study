//외부파일에 선언한 모듈 불러오기
//사용자 정의 모듈은 상대경로 사용.
var calc = require('./app_ex03_exports.js');

//console.log('calc.minus(5,3) =>', calc.minus(5,3));
//export.plus = function () {}
console.log("calc.plus(5,3) ==> ", calc.plus(5,3));