var http = require('http');
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
//express에 미들웨어 사용
app.use(function(req, res, next) { 
    console.log('첫번째 미들웨어 요청');
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>첫번째 미들웨어 요청</h1>');
    req.user ='You-Jina';
    next();
});
app.use('/',function(req, res, next) {
    console.log('두번째 미들웨어 요청');
//    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write('<h2>두번째 미들웨어 요청</h2>');
    res.write('<p>user>>>'+ req.user +'</p>');
    res.end();
});
var server = http.createServer(app);
server.listen(app.get('port'), function () {
   console.log('서버실행:%d', app.get('port')); 
});