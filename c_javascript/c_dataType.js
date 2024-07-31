/*
    ? 기본 자료형(string, number, boolean, null & undefined)
    # 1. string(문자열)
    ', ", `
*/
let str1= 'hello';
let str2= "Hello";
let str3= `hello, world`;

/*
    +)템플릿 문자열
*/
let name= 'Gwon';
console.log("안녕"+name+"입니다.");
console.log(`안녕하세요${name}입니다`);
console.log(`3+7=${3+7}`);

/*
    let multiLine= '안녕하세요';
    반갑습니다.'; - Error: 일반 따옴표는 줄바꿈을 인식하지 못함
*/

let multiLine=`
    안녕하세요
    만나서 반갑습니다.
    :p
`
console.log(multiLine);

/*
    2.number (숫자형)
*/
let num1=10;
let float=10.5

console.log(typeof num1);
console.log(typeof float);

/*
    3.float(논리형)
    : 참, 거짓 값만을 가지는 자료형
*/
let bool1= true;
let bool2= false;
console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);

/*
    4. null & undefined 자료형

    null: 아무것도 없음
    >> 변수의 데이터가 유효하지 않은 경우

    undefined: 정의되지 않았다.
    >> 변수가 선언되었으나, 아직 어떠한 값도 할당되지 않았을 때의 기본값

    let hello;
    console.log(hello); - undefinded

    ? 자료형 변환
*/
let number1= 123; let number2= 456;
console.log(number1+number2);
// 579
number1=String(number1);
number2=String(number2);
console.log(number1+number2);
//123456

let a="a";
console.log(Number(a)); //NaN: Not a Number

/*
    Boolean 함수
    false: false, 0, '', null, undefined, NaN
*/
console.log(Boolean(Number(a)));



