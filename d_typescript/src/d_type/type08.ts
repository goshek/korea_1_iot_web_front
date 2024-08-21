export const tmp=''

/*
    ! 타입 선언
    : 개발자가 타입스크립트 컴파일러보다 해당값의 타입의 주도권을 가지는 방법

    ? 타입 단언 방법
    as키워드를 사용
*/
let somValue: any='this is a string';
//somValue=true;
let length: number= (somValue as string).length;
console.log(length); //16

/*
    # 타입 단언을 활용하는 예시
    : 웹 개발에서 DOM요소를 조작할 때, 특정 DOM 요소를 구체적인 HTMLElement타입으로 단언
    >> ts가 자동으로 해당 DOM요소의 정확한 타입을 추론할 수 없다.
    
    1) HTMLButtonElement 단언
    웹 문서에 이벤트를 등록하여, DOM 구조가 생성되면 두번째 인자의 화살표 함수를 실행
*/
// document.addEventListener('DOMContentLoaded',()=>{
//     const button= document.getElementById('myButton');
//     //button.disabled= true; 'button'은(는) 'null'일 수 있습니다.
//     // HTML의 모든 요소는 HTMLElement라는 TS내장 타입에 속함
//     // >> 버튼요소: HTMLButtonElement
//     // >> DIV요소: HTMLDivElement
//     (button as HTMLButtonElement).disabled= true;
// });

//tsc type.ts

// # 2) JSON 문자열
const jsonString='{"name": "GS", "age": 20, "hobby":"exercise"}';
interface IUser{
    name: string;
    age: number;
};
const userData= JSON.parse(jsonString)as IUser;
console.log(userData);