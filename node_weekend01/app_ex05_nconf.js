//외장 모듈 사용
//npm으로 설치 : npm install -g [팩키지] --save
//package.json 파일에 기록된다.

var nconf = require('nconf');

nconf.env();

console.dir(nconf.env());

console.log("OS환경변수 : %s", nconf.get('OS'));
//process.env와 동일.