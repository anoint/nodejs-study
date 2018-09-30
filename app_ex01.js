//서버 모듈 불러오기
var http = require('http');
//서버 객체 생성
var server = http.createServer();

//서버 구동
//파라미터(포트,함수)
var port = 3001;
server.listen(port, function(){
    console.log('서버실행:', port);
});

console.log('Hello NodeJS world!');