var fs = require('fs');

//파일에서 데이터를 읽어들이기
fs.open('./output.txt','r',function(err,fd) {
    if(err) throw err;
    
    var buf = new Buffer(20);
    console.log('버퍼타입: %s', Buffer.isBuffer(buf));
    
    fs.read(fd, buf, 0, buf.length, null, 
        function(err,bytesRead, buffter) {
        if(err) throw err;
        var inStr = buffter.toString('utf-8',0,bytesRead);
        console.log(inStr);

        console.log(err, bytesRead, buffter);
        console.log(buffter);

        fs.close(fd, function() {
            console.log('파일 열고,읽고, 닫기 완료!');
        });
    });
});