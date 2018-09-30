var fs = require('fs');

//파일을 비동기로 읽어들이기 - 콜백 함수.
fs.readFile('./package.json', 'utf8', 
            function(err,data) {
    console.log(data);
});
//비동기 방식이라면 비 순차적으로 출력 될 것이다.
console.log('package.json 파일 읽기 요청');