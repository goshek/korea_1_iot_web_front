//#b_variable.js

/*
    !변수
    : 데이터를 저장하기 위한 공간

    변수 선언
    -명명 규칙

    * 필수 변수 명명 규칙
    첫 문자로 영문자, 언더스코어, 달러만 사용 가능(이후 숫자 사용 가능)
    띄어쓰기 허용X
    기호는 _, $만 사용 가능
    영어 대소문자를 구별(a, A는 각각 다른 변수)
    예약어 사용 X

    let 1num; -error
    let num ber; -error
    * 선택 변수 명명규칙- 권장
    lowerCamelcase 사용을 권장
    : 시작은 소문자로 시작, 이어지는 단어의 시작만 대문자로 작성

    cf. UpperCamelCase
    : 시작을 포함하여 이어지는 단어의 시작만 대문자로 작성

    ?변수명 지정시 의미 있는 단어 사용을 권장

    ! JS 변수 초기화 방식(2가지-let, var)

    변수 선언 방법
    변수종류 변수명;
    변수 초기화 
    변수명= 데이터(값)

    ! let vs var
    공통점: 값을 재할당 가능. 호이스팅 o
    차이점:
        let: 동일한 영역 내에서 같은 이름으로 재선언 불가
        var: 동일한 영역 내에서 같은 이름으로 재선언 가능

*/
let current_year=2024;
let birth_year=0;
var age=0;

birth_year=prompt('태어난 년도 입력');
age= current_year-birth_year;
document.write(birth_year+'년에 태어난 사람의 나이는 ' + age+ '세 입니다.');

//! 상수 constant
/*
    :변하지 않는 수
    한 번 할당된 값을 변경할 수 없다.(재할당 불가)

    ? 상수 명명 규칙(필수 - 변수와 동일)
    * 권장 사항
    : UPPER_SNAKE_CASE
    : 모든 영문자를 대문자, 이어지는 단어는 언더스코어로 구분

    상수 선언과 초기화- 반드시 선언과 할당되어야 함
    const 변수명= 데이터(값);

    const PI=3.14;
    PI=3.141; -error
*/
let radius= prompt('반지름을 입력');
console.log('반지름: ', radius*radius*3.14);
