//사용자가 만든 이벤트 처리
process.on('tick', function(cnt){
    console.log('사용자 이벤트 발생', cnt);
})
setTimeout(function(){
    console.log('2초 후에 사용자 이벤트 발생');
    process.emit('tick', 365);
});