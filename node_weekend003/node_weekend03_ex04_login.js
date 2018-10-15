// node_weekend03_ex04_login.js
// 기본 모듈
var http = require('http');
var express = require('express');
var static = require('serve-static');
var app = express();
var path = require('path');

// 세션, 쿠키, 파라미터 전달 모듈
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var router = express.Router();

// 포트번호 설정
app.set('port', process.env.PORT || 3000);
// static 미들웨어 설정
app.use('/public', static(path.join(__dirname, 'public')));
// body-parser 미들웨어 설정
app.use(bodyParser());
// expressSession 미들웨어 설정
app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));


// 로그인 라우팅 함수 - 로그인 처리 후 세션에 저장.
router.route('/process/login').post(function(req, res) {
    console.log('/process/login 호출 성공');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    //console.log(paramId, paramPassword);
    
    if(req.session.user) {
        console.log('이미 로그인 되었다.');
        res.redirect('/public/product.html');
    } else {
        req.session.user = {
            id:paramId,
            name:'소녀시대',
            authorized:true
        };
        
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h2>로그인 성공!</h2>');
        res.write("<p>paramId : "+paramId+"</p>")
        res.write("<a href='/public/product.html'>상품목록</a>")
        res.end();
    }
});


app.use('/', router);
var port = app.get('port');
var server = http.createServer(app);
server.listen(port, function() {
    console.log("서버실행:%d", port);
});
