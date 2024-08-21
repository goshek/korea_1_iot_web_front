export const tmp='';
/*
    ! union type
    : 여러 타입중 하나가 될 수 있는 값을 나타내는 방법
    >> 값에 허용된 타일을 두 개 이상을 지정
    >> OR 연산자 (A 또는 B또는 ...)
    >> vertical bar를 사용하여 표현

    ? union 타입의 사용
    >> 변수, 함수의 매개변수, 반환값 등에서 모두 사용 가능
    >> 타입의 유연성을 제공
        : 무분별한 any 사용을 방지
    type UnionType= Type01 | Type02.. 
*/
type VariableType= string | number | boolean | number[];
let value: VariableType= '문자';

/*
    ? 타입 별칭의 예시
    관리자 계정 Admin
*/
type Admin={
    id: string;
    pwd: string;
    isAdmin: boolean;
}
/*
    사용자 계정 User
*/
type User={
    id: string;
    pwd: string;
}

// 위의 두가지 계정을 가지는 사이트의 계정 타입
type Person= Admin | User;
/*
    >> 타입 별칭이 union타입인 경우
    >> 중복되지 않은 속성은 옵셔널과 동일

    type Person={
    id: string;
    password?: number;
    name?: number;
    }

    ? 타입 별칭에서 union 타입 사용시
    : 정확한 타입 지정을 위해 타입 가드를 사용
    >> 타입 가드: 조건문을 통해 타입을 좁혀나가는 방식
*/
type Union= number | string;
function getAge(age: Union){
    /*
        나이가 입력될 경우
        -숫자: 소수점 자리가 없도록 반올림하여 문자열로 반환
        -문자열: 그대로 반환
    */
   if (typeof age== 'number'){
    age=age.toFixed();
    return age;
   }
   else{
    age=age.toUpperCase();
    return age;
   }
};
console.log(getAge(12.464)); //12
console.log(getAge('hello')); //HELLO
