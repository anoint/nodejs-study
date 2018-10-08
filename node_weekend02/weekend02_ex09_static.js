var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var static = require('serve-static');

app.set('port', process.env.PORT || 3000);
 
//static 미들웨어로 public 폴더 지정 
//serve-static 모듈 불러오기 >npm install serve-static --save
app.use('/public',static(path.join(__dirname, 'public')));

var server = http.createServer(app);
server.listen(app.get('port'), function () {
   console.log('서버실행:%d', app.get('port')); 
});