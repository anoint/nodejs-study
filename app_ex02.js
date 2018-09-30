console.log("숫자보여주기: %d", 1000);
console.log("문자로 치환하기: %s",'홍길동');
console.log('JSON 객체 : %j',{"name":"윤봉길"});
//ctrl + Alt + h 왼쪽창접기

//window, document 는 BOM이다.
console.dir(process.env.PROT);

var result = 0;
console.time('time_check');
for(var i=1; i<=10000; i++)
{
    result +=i;
}
console.timeEnd('time_check');
console.log('result에 누적된 값 : %d', result);
console.log('현재파일명 ', __filename);
console.log('현재파일명 '+ __filename);
console.log("현재디렉토리 ", __dirname);