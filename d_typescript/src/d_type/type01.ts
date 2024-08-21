export const tmp='';
/*
    타입 스크립트의 타입
    : 타입 명시(작성)가 필수 사항X
    >> 프로그램의 안정성과 가독성을 높이는 역할

    ? 타입 명시 방법
    : 타입 어노테이션(type annotation)
    >> 변수명 뒤에 콜론을 사용, JS코드에 타입을 정의

    ? 타입의 종류
    # 1. 기본 타입(원시 타입- string, number, boolean등..)
    : 변수명 뒤에 콜론 사용
    >> typeof 연산자 사용 시 나타내는 변환값과 동일한 이름으로 명시(소문자)
*/
let name: string='Gwon';
// 권장) let 변수명: 타입명= 값;
let age: number= 20;
let isStudent: boolean= false;
//age="hyuck"; -Error(타입 체킹)
// 타입 명시 생략은 가능하지만 타입 체킹을 생략하지는 못한다.
let check= 21;

/*
    # 2. 배열 타입
    - 변수명 뒤에 콜론 사용
    : 기본타입명 뒤에 배열을 나타내는 []를 첨부
*/
let list: string[]= ['a','b','c'];
/*
    -제네릭 타입
    : Array<기본타입>
*/
let list2: Array<number>= [1,2,3];

/*
    # 3. void 타입
    : 아무런 값이 없다
    >> 주로 함수에서 반환값이 없거나 return키워드가 있더라도 반환하는 값이 없을 때 사용되는 타입
*/
function voidType(parameter: number): void{
    /*
        함수의 타입 정의
        >> 파라미터와 반환값 정의 가능
        >> TS에서 파라미터에 타입을 명시하지 않으면 오류가 발생
         : 함수 내에서 사용할 변수에 대한 안정성 요구

        >> 반환값의 타입명시는 파라미터를 정의하는 소괄호 뒤에 콜론을 붙여 정의
    */
   console.log(parameter);
    return ;
}
voidType(10); //10

function stringReturn(){
    return '안녕하세요';
}
console.log(stringReturn());

function stringReturn02(str0:string, str1: string):string{
    return '하이요';
}
console.log(stringReturn02('afsg','sfds'));

/*
    # 4. null & undefined 타입
    null: 아무것도 없음, 데이터가 잘못된 경우
    undefined: 변수 생성은 했지만 안에 값이 없을 경우

    ? JS/ TS에서의 차이점
    JS: 각각의 타입에 다른 타입의 값 할당이 가능

    TS: 각각의 타입으로 지정된 변수에는 각 타입만 할당 가능
    >> 어노테이션 사용하는 경우에만 가능
*/
let nullType: null;
//nullType= 3; -Error

/*
    # 5. any 타입
    : 모든 타입에 대해 허용하는 타입
    >> 타입 검사 오류가 발생하는 것을 방지(모든 타입과 호환 가능)
    >> TS를 js처럼 사용

    >> 사전에 오류 타입을 계산할 수 X(에러 방지X- 사용권장 X)
*/
let anyType: any=63;
anyType='sdf';
anyType= false;
anyType= undefined;
console.log(anyType);   //어떠한 것이든 가능

let unkwonData; // :any
// 타입을 직접적으로 명시하지 않을 경우 값이 할당되기 전까지 자동으로 any 타입으로 인식

// function error(message:string){
//     throw new Error(message);
// }

// error('에러 발생!!');


// === 타입 어노테이션 사용 ===
//? 문제 1: 기본 타입 정의하기
// username은 문자열, userAge는 숫자, isSubscribed는 불리언 값으로 타입을 정의
let userName: string;
let userAge: Number;
let isSubscribed: boolean;

//? 문제 2: 배열 타입 정의하기
// 문자열 배열 fruits와 숫자 배열 numbers를 정의
let fruits: Array<string>=[];
let numbers: number[]=[];


//? 문제 3: void 타입을 사용하는 함수 정의하기
// 아무런 값을 반환하지 않고, 매개변수로 받은 메시지를 콘솔에 출력하는 함수 printMessage를 정의
function printMessage(para: string): void{
    console.log(para);
}