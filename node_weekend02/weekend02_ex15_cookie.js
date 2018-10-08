var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var static = require('serve-static');

var util = require('util');

var router = express.Router();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
app.set('port', process.env.PORT || 3000);

app.use('/public', static(path.join(__dirname, 'public')));
//app.use(bodyParser());
app.use(cookieParser);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(expressSession({
    secret: 'mykey',
    resave: true,
    saveUninitialized: true
}));
router.route('/process/showCookie').get(function(req, res) {
    console.log('/process.showCookjie 요청 받음');
    res.send(req.cookies);
});
//app.get() --> get path에 대한 처리를 분류한다.
//post방식의 요청은 router를 사용한다.
router.route('/process/setUserCookie').get(function(req, res) {
    console.log('/process/setUserCookie 요청 받음');
    
    res.cookie('user', {
        id:'YOU',
        name: '지나',
        authorized:true
    });
   
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.write("<p>쿠키가 생성 되었다.</p>");
    res.write("<a href='/process/showCookie'>showCookie</a>"); 
    res.end(); 
});

//라우터 미들웨어 등록 - 선언 순서 지킬것.
app.use('/', router);

//서버실행
var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('서버실행:%d', app.get('port'));
});