var express = require('express');
var http = require('http');
var app = express();
var router = express.Router();
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var db;

app.set('port', process.env.PORT || 3000);
 
app.use('/public', static(path.join(__dirname, 'public')));
app.use(bodyParser());

var dbUrl = "mongodb://localhost:27017";
var connectDb = function() {
    MongoClient.connect(dbUrl, function(err, client) {
        if(err) throw err;
        console.log('DB연결이 되었습니다.',dbUrl);
        db = client.db('vehicle');
    });
}

var authUser = function (database, data, callback) {
    var car = database.collection('car');
    
    console.log(authUser);
    car.find({name:data.name}).toArray( function( err, docs) {
        if(err) throw err;
        console.log(docs);
    });
}
router.route('/process/login').post(function(req, res) {
    console.log('process/login req come!');
    var id = req.body.id || req.query.id;
    var pwd = req.body.password || req.query.password;
//    console.log(id, pwd);
    
    if(db) {
        authUser(db, {name:id, price:pwd}, function(err, result) {
            if(err) throw err;
            console.log("result :",result);
            
        });
    }
    
    id(req.session.user) {
        console.log('로그인');
        res.redirect('/public/publict.html');
        
    } else {
        req.session.user = {
            id: paramId,
            name:' 소녀시대',
            authorized :true
        }
    }
});


app.use('/', router);
var port = app.get('port');
var server = http.createServer(app);
server.listen(port, function() {
  console.log("서버실행:%d", port);
    connectDb();
});S