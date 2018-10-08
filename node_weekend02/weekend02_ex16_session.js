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

//속성 지정
app.set('port', process.env.PORT || 3000);

//미들웨어 지정
app.use('/public', static(path.join(__dirname, 'public')));
//app.use(bodyParser());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret: 'mykey',
    resave: true,
    saveUninitialized: true
}));

router.route('/process/login').post(function (req, res) {
    console.log('/process/showCookie 요청 받음');
    var paramId = req.body.userid || req.query.userid;   var paramPwd = req.body.pwd || req.query.pwd;
    var output = util.format("id: %s, pwd: %s", paramId,paramPwd);
    console.log(output);
    
    if(req.session.user) {
        console.log('이미 로그인 되었습니다.');
        res.redirect('/public/product.html');
    } else {
        //세션 객체 저장 삭제할때는 req.session.destory(); 사용
        req.session.user = {
            id:paramId,
            name:'유지나',
            authorized : true
        };
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        res.write('<p>Param ID >>> '+paramId + '</p>');
        res.write('<a href="/process/logout">로그아웃</a>');
        res.end();
    }
});

router.route('/process/logout').get(function (req, res) {
    console.log('/process/logout 요청 받음');
    if(req.session.user)
        {
            //로그인상태
            req.session.destroy(function(err) {
               if(err) throw err;
                console.log('로그아웃되었습니다.');
                res.redirect('/public/login.html');
            });
        } else
        {
            console.log("로그인하세요");
            res.redirect('/public/login.html');
            //이미 로그아웃
        }
});

//라우터 미들웨어 등록 - 선언 순서 지킬것.
app.use('/', router);

//서버실행
var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('서버실행:%d', app.get('port'));
});
