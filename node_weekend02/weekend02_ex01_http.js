//모듈 불러오기 -> 객체 생성하기 ->서버실행하기
var http = require('http');
var server = http.createServer();
var url = require('url');
var querystring = require('querystring');
var port = 3000;
//서버에 클라이언트 연결 이벤트 설정
//connection, request, close
server.on('connection', function(socket) {
    var addr  = socket.address();
    console.log('클라이언트 접속 >>>', addr.address, addr.port);
})
//request 요청, req-res 객체가 인자로 전달.
server.on('request', function(req, res) {
    console.log('client request comming');
//    console.log(req.query.msg);
//express에서 파라미터 전달 
//http에서는 url모듈과 queryString 모듈로 요청파라미터 전달받는다.
    var urlObj = url.parse('http://a.com?msg=hello');
    var param = querystring.parse(urlObj.query);
    console.log(param.msg);
//    server.close();
//    process.exit();
//    process.emit('close');
});
server.on('close', function (req, res) {
    console.log('서버가 종료 되었습니다.');
})

server.listen(port, function() {
    console.log('서버실행중:%d', port);
    
});


//접속시 페비콘, 2번 접속됨.