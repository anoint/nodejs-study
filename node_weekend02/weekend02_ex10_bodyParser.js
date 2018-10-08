//모듈 불러오기
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var static = require('serve-static');
var router = express.Router();
var bodyParser = require('body-parser');
var util = require('util');
app.set('port', process.env.PORT || 3000);
 
//static 미들웨어로 public 폴더 지정 
//serve-static 모듈 불러오기 >npm install serve-static --save
app.use('/public',static(path.join(__dirname, 'public')));
//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.get() -->  get path에 대한 처리를 분류한다.
//post방식의 요청은 router를 사용한다.
router.route('/login.proc').post(function(req, res) {
   console.log('/login.proc 요청 받음'); 
    var userId = req.body.userid || req.query.userid;
    var paramPwd = req.body.pwd || req.query.pwd;
    
    var str = util.format("userId: %s, paramPwd: %s", userId, paramPwd);
    console.log(str);
    res.writeHead(200, {'Content-Type':'text/html;charset-utf8'});
    res.wirte(str); // write에서 util사용해서 포맷지정하기
    res.end();
    //post방식으로 전달된 파라미터 사용
    //body에 포함된 정보사용하기 위해 bodyParser 필요
    //>npm install body-parser --save 미들웨어 설치
});
//라우터 미들웨어 등록 - 선언 순서 지킬것.마직막
app.use('/', router);
//서버실행
var server = http.createServer(app);
server.listen(app.get('port'), function () {
   console.log('서버실행:%d', app.get('port')); 
});