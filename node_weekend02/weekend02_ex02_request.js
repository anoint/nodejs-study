var http = require('http');
var server = http.createServer();

var port = 3000;

server.on('request', function(req, res) {
   console.log('요청이 들어왔습니다.',req.socket.address); 
      
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>요청이 들어왔습니다.</h1>');
    res.end();
});
server.listen(port, function(req, res) {
    console.log('서버실행 :%d ', port);
  
});

