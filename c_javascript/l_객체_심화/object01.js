/*
    object01.js

    ! 자바스크립트 내장 객체
    : 특정 작업 수행이나 복잡한 기능을 담은 메소드와 속성을 제공

    # 1. Number 객체의 기본 메소드
    cf) 기본 자료형 number
    
    Number- 자바 스크립트 내부에 직접 정의되어 있는 객체(데이터)
    : 수치형 데이터를 처리하는 메소드를 제공

    1) toFixed()
    : 소수점 이하 N자리 까지만 출력(반올림)
*/
let num= 123.4567;
console.log(num.toFixed(2)); //123.46
console.log(num.toFixed(0)); //123

/*
    isNaN(), isFinite()
    : 각각 NaN인지 Infinity인지 확인
    >> Number 객체에 바로 적용, 인자값으로 확인할 데이터를 삽입
*/
let notNum= Number('숫자로 변환할 수 없는 값');
console.log(notNum); //NaN
console.log(notNum === NaN); //false: NaN 데이터는 비교연산자 사용 불가
console.log(Number.isNaN(notNum)); //true

// Infinity(양의 무한대), -Infinity(음의 무한대)
// cf) 양수 또는 음수를 0으로 나누면 각각의 무한대 수가 생성
console.log(10/0);
console.log(-10/0);

let infinity= 10/0;
let minusInfinity=-10/0
// in>> not의 의미
// 무한대일 경우 false, 아닐경우 true
console.log(Number.isFinite(isFinite)); //false
console.log(Number.isFinite(minusInfinity)); //false
console.log(Number.isFinite(100)); //true

/*
    2. String 객체의 기본 메소드: 문자열을 처리하는 메소드
    & 1) trim()
    : 문자열 양쪽 끝의 공백(띄어쓰기, 줄바꿈 등)을 없애는 메소드
*/
let stringA=`

    안녕하세요
    만나서
    반갑습니다 :p
`;
let stringB= `   앞 뒤에 공백을 넣습니다.   `;
console.log(stringA);
console.log(stringB);
console.log(stringA.trim());
console.log(stringB.trim());

/*
    & 2)split()
    : 문자열을 특정 기호로 자르는 메소드>> 배열로 반환

    & 3) length
    : 문자열 길이를 반환
    >> 띄어쓰기, 줄바꿈도 한 개의 문자열로 인식
*/
let stringC=' hello, World!!안녕 ';
console.log(stringC.length);

/*
    & 4) toUpperCase(), toLowerCase()
    : 모든 문자를 대문자 | 소문자로 변환
*/