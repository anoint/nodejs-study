//이벤트 핸들러 - on 메소드를 이용한다.
process.on('exit', function(){
    console.log('exit 이벤트 발생함.') 
});

setTimeout(function() {
    console.log('2초 후에 프로세스 종료');
    process.exit();
}, 2000);