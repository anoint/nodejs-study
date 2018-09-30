// process 객체
// - argv : 실행시 전달 파라미터 정보
// - env : 환경변수 정보
// - exit() : 프로세스 끝내기 d

//프로세스 실행 시 전달 파라미터 확인
console.log(process.argv.length);
console.log(process.argv);
console.log()

if(process.argv.length > 2)
    {
        for(var i=2; i<process.argv.length; i++)
            {
                console.log('전달 파라미터 : %s', process.argv[i]);
            }
    }
process.argv.forEach(function(item, index)
                     {
    if(index > 1){
    console.log(index, ":", item)
    }
});

//process.env 객체 사용
//console.log(process.env);
console.log("OS환경변수의 값: ", process.env["OS"]);
console.log("AllUsersProfile: ", process.env["ALLUSERSPROFILE"]);