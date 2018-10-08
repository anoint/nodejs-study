var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var static = require('serve-static');

var util = require('util');

var router = express.Router();
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);

app.use('/public', static(path.join(__dirname, 'public')));
//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//app.get() --> get path에 대한 처리를 분류한다.
//post방식의 요청은 router를 사용한다.
router.route('/login.proc:name/:area').post(function(req, res) {
    console.log('/login.proc 요청 받음');
    
    //post 방식으로 전달된 파라미터 사용
    //body에 포함된 정보 사용하기 위해 bodyParser 필요
    //> npm install body-parser --save 미들웨어 설치.
    
    //post 요청에서 url파라미터 사용
    //login.proc/:name/:area
    var paramName = req.params.name;
    var paramArea  =req.params.area;
    var userId = req.body.userid || req.qeury.userid;
    var paramPwd = req.body.pwd || req.qeury.pwd;
    
    var str = util.format("userId:%s, paramPwd:%s",userId, paramPwd);
    var str2 = util.format("paramName:%s, paramArea:%s", paramName,paramArea);
    console.log(str);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.write('<p>'+str+'</p>');   res.write('<p>'+str2+'</p>');

    res.end();
});
//등록 안된 패스에 대한 오류 응답 페이지.
//app.all('*', function(req,res) {
//    res.status(404).send('<h1>Error! - 페이지없음</h1>');
//    res.status(500).send('<h1>Error! - 서버에 문제 발생</h1>');
//});
//라우터 미들웨어 등록 - 선언 순서 지킬것.
app.use('/', router);

//서버실행
var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('서버실행:%d', app.get('port'));
});