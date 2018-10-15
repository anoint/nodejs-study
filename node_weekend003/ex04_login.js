var http = require('http');
var express = require('express');
var static = require('static');
var app = express();
var pathModule = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

var router = express.Router();

app.set('port', port.env.PORT || 3000);
app.use('/public', static(path.join(__dirname,'public')));
app.use(bodyParser());
app.use(expressSession);
//로그인 라우팅 함수 - 로그인 처리후 세션에 저장한다.                       app.use                               

router.route('/process/login',post (function(req,res) {
    console.log('/process/login call')
});
if(req.session.user)
{
    console.log('이미 로그인');
    res.red
}
var server = server.createServer();

app.use('/',router);
var port = app.get('port');
var server = http.createServer(app);
server.listen(port, function(req,res) {
        
});