//버퍼 사용 파일 출력
var fs = require('fs');

//열고-쓰고-닫고
fs.open('./output.txt', 'w', function(err, fd) {
    if(err) throw err;
    //버퍼 생성
    var buf = new Buffer('안녕 세상!\n');
    //버퍼에 담긴 내용을 파일에 쓰기
    fs.write(fd, buf, 0, buf.length, function(err2, written, buffer)
    {
        if(err2) {
            throw err;
            return;  
        } 
        console.log(err, written, buffer);
        fs.close(fd, function() {
            console.log("파일 열고, 쓰고, 닫기 완료!")
        });
    });   
});
