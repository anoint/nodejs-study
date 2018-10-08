var http  = require('http');

var express = require('express');
var app = express();
app.set('port',3000);

app.get('/intro', function(req, res) {
   console.log('/intro 요청'); 
res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    res.write('<h1>인트로 페이지입니다.</h1>');
    res.end();
});
app.get('/profile', function(req, res) {
   console.log('/profile 요청');
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    res.write('<h1>프로필 페이지입니다.</h1>');
    res.end();
});
var port = app.get('port');
var server = http.createServer(app);
server.listen(port, function() {
    console.log('서버실행: %d', port);
});