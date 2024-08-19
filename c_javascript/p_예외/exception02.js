/*
    JS 내의 모든 예외는 JS 내장 에러

    ?예외 객체
    : 예외가 발생하면 예외와 발생된 정보를 확인할 수 있는 객체
    : 예외 생성
    >> new Error('에러메시지 입력');
*/
//let myError= new Error('에러 생성');
//console.log(myError);
//throw myError;
//throw '안녕하세요';
//throw 45;
/*
    ? 프로그래밍 구현 중 비즈니스 로직에 따라 
    개발자가 코드의 흐름을 제어하기 위해 적절한 예외 사용을 권장
*/
function text(object){
    /*
        object가 undefined일 경우 또는 
        object의 속성값들이 undefined인 경우 에러를 결정
    */
   if(!object || object.a=== undefined || object.a=== undefined){
    throw new Error('함수를 호출할 때 object와 a,b 속성이 전달되어야 합니다.');
   }
   console.log(object.a +object.b);
}

try{
    text({a:5, b:10});
    text({a:'Gwon', b:'Hyuck'});
    text();
}catch(e){
    console.error('에러발생: ', e.massage);
}
console.log('일반 코드 흐름');