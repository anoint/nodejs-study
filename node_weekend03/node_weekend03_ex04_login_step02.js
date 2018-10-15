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

var MongoClient = require('mongodb').MongoClient;
var db;

var connectDb = function() {
    var dbUrl = "mongodb://localhost";
    MongoClient.connect(dbUrl, function(err, client) {
        if(err) throw err;
        console.log("DB연결 성공 %s", dbUrl);
        db = client.db('local');
    });
}

var authUser = function(database, id, pwd, callback) {
    //db에서 id,pwd를 찾아서 유무를 확인한다.
    console.log("authUser 호출 - %s, %s", id, pwd);
    
    //users 컬렉션 참조
    var users = database.collection('users');
    users.find({"id":id, "password":pwd}).toArray(function(err, docs) {
        if(err) {
            callback(err);
            return;
        }
        console.log("docs.lenth => ", docs.length);
        if(docs.length > 0) {
             callback(null, docs);
        } else {
            console.log("사용자가 없다.");
            callback(null, null);
        }
    });
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
            authUser(db, paramId, paramPassword, function(err, docs) {
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
