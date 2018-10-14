/*
[모듈]
- 내장모듈, 외장모듈
- 내장모듈은 Node 설치 시 함께 설치되는 기본 모듈 
    - ex) OS모듈, path모듈
- 외장모듈은 npm install 명령으로 설치
    - 내장 모듈 보다 외장 모듈이 좀더 편리하다.
- 내장 모듈 정보
    - http://nodejs.org/api 참조한다.
*/

var os = require('os');
console.log('os의 호스트 네임 : %s', os.hostname());
console.log('메모리 %d/%d', os.freemem(), os.totalmem());
//console.log('CPU정보 : ', os.cpus());
console.log(os.networkInterfaces());