var util = require('util');

var str = util.format("%d + %d = %d", 10, 20, (10+20));

console.log(str);

var str2 = util.format("%s %s", "Hello", "World");
console.log(str2);

