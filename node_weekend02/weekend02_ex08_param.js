var http = require('http');
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
 
app.get('/login_proc',function(req, res) { 
    console.log('로그인 프로세스 요청');
    //전달 받은 파라미터 값 사용
    //http://127.0.0.1:3000/login_proc?user=JINA
    var paramUser = req.query.user;
    
    //헤더 정보 사용
    var userAgent = req.header('User-Agent');
    
    res.writeHead( 200, {
        'Content-Type':'text/html;charset:utf8'
    });
    res.write('<h1>param user >>> '+paramUser+'</h1>');
    res.write('<h1>user agent >>> '+userAgent+'</h1>');

    res.end;
}); 

var server = http.createServer(app);
server.listen(app.get('port'), function () {
   console.log('서버실행:%d', app.get('port')); 
});