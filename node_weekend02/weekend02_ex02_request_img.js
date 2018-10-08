var http = require('http');
var server = http.createServer();
var fs = require('fs');
var port = 3000;

server.on('request', function(req, res) {
  
   console.log('요청이 들어왔습니다.',req.socket.address); 
    var filename = './images/img01.png';
    fs.readFile(filename, function(err, data){
    res.writeHead(200, {'Content-Type':'image/png;charset=utf8'});
//    res.write('<h1>요청이 들어왔습니다.</h1>');
    res.write(data);
    res.end();
   });
});
server.listen(port, function(req, res) {
    console.log('서버실행 :%d ', port);
  
});

