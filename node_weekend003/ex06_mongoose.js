var http = require('http');
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
//몽구스 모듈 불러오기
var mongoose = require('mongoose');
//데이터베이스 스키마 연결에 필요한 변수 선언
var database;
var UserSchema;
var UserModel;

var connectDB = function () {
    console.log("데이터 베이스 연결 시도");
    var dbUrl = "mongodb://localhost:27017/local";
    mongoose.Promise = global.Promise;
    mongoose.connect(dbUrl);
    database = mongoose.connection;
    
    var errMsg = 'mongoose connection error!';
    database.on('error', console.log.bind(console, errMsg));
    database.on('open', function() {
       console.log('db connection :%s', dbUrl); 
    });
    //연결이 끊어지면 5초 후에 재 연결시도
    database.on('disconnected', function() {
        console.log('reconnecion!');
        setTimeout(connectDB, 5000);
    });
}
var server = http.createServer(app);

server.listen(app.get('port'), function() {
   console.log("서버 실행>>> http://localhost:%d", app.get('port'));
    connectDB();
});
