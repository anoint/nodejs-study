//버퍼 객체에 대한 예제
//버퍼를 만들고 문자열 쓰기
var output = "Hello World!";
console.log(output.length);

var buffer1 = new Buffer(15);
var len = buffer1.write(output, 'utf8');
console.log("len =>", len);
console.log("buffer1.toString()=> ", buffer1.toString());

//문자열을 이용한 버퍼 객체 생성

var buffer2 =  new Buffer('Hello World 2','utf8');
console.log("len =>", len);
console.log("buffer.toString()=> ", buffer2.toString());

//버퍼 타입 확인
console.log('버퍼의 타입: %s', Buffer.isBuffer(buffer1));
console.log('output의 타입: %s', Buffer.isBuffer(output));
console.log('output의 타입: %s', typeof output);
console.log('버퍼의 타입: %s', typeof buffer1);

//버퍼 객체에 들어있는 문자열 데이터를 문자열 변수로 변환
var byteLen = Buffer.byteLength(output);
console.log("byteLen >>", byteLen);
var str1 = buffer1.toString('utf8', 0 ,byteLen- 5);
var str2 = buffer2.toString('utf8');
console.log("str1>>> ",str1);
console.log("str2>>> ",str2);

//첫번째 버퍼 객체의 문자열을 두번째 버퍼의 객체로 복사
buffer1.copy(buffer2, 0 , 0, len);
console.log("복사 후 buffer2 >>>", buffer2.toString());

//두개의 버퍼 연결
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3 >>> ', buffer3.toString('utf8'));

//자바,자바스크립트는 객체생성으로 메모리 리소스가 많음.