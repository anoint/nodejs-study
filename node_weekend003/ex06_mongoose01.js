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

var mongoose = require('mongoose');
var database;
var UserSchema;
var UserModel;


var connectDb = function() {
    var dbUrl  = "mongodb://localhost:27017/local";
    console.log("DB연결 시도");
    mongoose.Promise = gloval.Promise;
    mongoose.connect(dbUrl);
    database = mongoose.connection;
    var logData = "mongoose connection err.";
    database.on('error', console.error.bind(console, logData));
    database.on('open', function () {
       console.log('db connection ok %s', dbUrl); 
        UserSchema = mongoose.Schema({
            id: String,
            name: String,
            password: String            
        });
        UserModel = mongoose.model('users', UserSchema);
    });
    database.on('disconnect', function () {
       console.log('db reConnection  %s', dbUrl); 
    });
}

var authUser = function(database, id, pwd, callback) {
 var data = {"id": paramId, "password":paramPwd, "name":paramName};
  var users = new UserModel(data)
  user = 
}

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
        if(db) {
            //로그인을 위한 DB검색
            authUser(database, paramId, paramPassword, function(err, docs) {
                if(err) throw err;
                
                if(docs){
                    req.session.user = {
                        id:paramId,
                        name: docs[0].name,
                        authorized:true
                    };

                    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                    res.write('<h2>로그인 성공!</h2>');
                    res.write("<p>paramId : "+paramId+"</p>")
                    res.write("<a href='/public/product.html'>상품목록</a>")
                    res.end();
                } else {
                    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                    res.write('<h2>로그인 실패!</h2>');
                    res.end();
                }
            }); //authUser
        } else {
            res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
            res.write('<h2>DB연결 실패!</h2>');
            res.end();
        }
    }
});

// 로그아웃 라우팅 함수 -  로그아웃 후 세션 처리함.
router.route('/process/logout').get(function(req, res) {
    console.log('/process/logout 호출 됨');
    if(req.session.user) {
        console.log('로그아웃 합니다.');
        req.session.destroy(function(err) {
            if(err) throw err;
            console.log('세션 삭제후 로그아웃됨.');
        });
    } else {
        console.log('이미 로그아웃 되었습니다.');
    }
    res.redirect('/public/login.html');
});

app.use('/', router);
var port = app.get('port');
var server = http.createServer(app);
server.listen(port, function() {
    console.log("서버실행:%d", port);
    connectDb();
});
