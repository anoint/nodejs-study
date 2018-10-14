var fs = require('fs');
var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function(exitsts) {
   if(exitsts) {
       //파일 지우는 명령어 >>> fs.unlink
       fs.unlink(outname, function(err) {
           if(err) throw err;
           console.log('기존 파일 ['+ outname +']삭제.')
       });
   } //end of if
    var infile = fs.createReadStream(inname, {flags:'r'});
    var outfile = fs.createWriteStream(outname, {flags:'w'});
    //파일을 복제하는 명령어
    infile.pipe(outfile);
    console.log('파일 복사 ['+inname+'] => ['+outname+'] 완료');
    
});