var path =  require('path');

//디렉토리 이름 합치기
var directories = ["users", "newDir", "newDoces"];
var docsDirectory = directories.join(path.sep);
//경로Windows 계열 : \
//Unix 계열 : / 디렉토리 구분자
//Unix 계열 패스구분자 : 콜론(:)
//Windows 계열의 패스 구분자 : 세미콜론(;)
console.log(docsDirectory);

//디델토리 이름과 파일명 합치기
var curPath = path.join('/Users/newDir', 'app.exe');
console.log('파일패스: %s', curPath);

//패스에서 디렉토리, 파일, 확장자를 구분할 수 있다.
var filename = "c:\\Users\\newDir\\app.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
// 역슬래시를 두번 쓰는 이유는 역슬래시는 특수문자이기 때문이다.
// \' \" \\
console.log(dirname,"|", basename,"|", extname);