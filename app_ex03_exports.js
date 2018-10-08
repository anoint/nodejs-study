// calc 객체 선언
var calc = {};

calc.minus = function(a,b)
{
    return a - b;
}
console.log('calc.minus(3,2) ==>', calc.minus(3,2));

//module.exports에 등록 - 다른 파일에서  require()로 사용.
module.exports = calc;

module.export.minus = function(a,b) {
    return a + b;
}