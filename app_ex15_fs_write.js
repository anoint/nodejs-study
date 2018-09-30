var fs = require('fs');

var msg = 'Hello World!';

//writeFile() :파일이 없으면 파일을 생성한다.
fs.writeFile('./output.txt', msg, function(err)
{
    if(err)
    {
        console.log("Error : ", err);
        return;
    }
    console.log('output.txt 파일에 쓰기 완료!');
});

