/*
    연산자: 수학적 계산을 위한 코드
    1. 산술 연산자
    +) 증감 연산자 ++, --
        전위 연산자, 후위연산자
        ex) num++, ++num
    2. 할당 연산자
        a+=a;a-=a;a*=a;a%=a;a/=a;
    3. 비교 연산자
        >, >=, <=, <=, !=...
    4. 논리 연산자
        boolean 값을 연산하는데 사용
            >>참과 거짓을 반환
        &&(and), ||(or), !(not)
    5. 삼항 연산자
        기본구조: 표현식? 반환값1 : 반환값2
        표현식이 true일때, 반환값1 실행, false일때 반환값2 실행
*/ 
let age=2;
var can=age>=20?true:false;
console.log(can);
/*
    삼항 연산자의 중첩
*/ 
age=0;
let identity= age>=20?'성인':(age<=13?'어린이':'청소년');

/*
    typeof 연산자
    : 데이터에 대한 타입 반환이 문자열로 반환
    number, string, boolean, undefinded..
*/ 
let objectData={};
let functionData= function(){};
console.log(typeof(objectData));console.log(typeof(functionData));