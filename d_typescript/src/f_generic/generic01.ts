export const tmp='';

/*
    ! Generic
    # 1. 제네릭 정의
    : 재사용 가능한 컴포넌트를 만드는데 사용
    >> 해당 컴포넌트가 처리할 데이터 타입을 미리 지정하지 않고, 
     해당 컴포넌트를 사용하는 시점에서 원하는 데이터 타입 지정

    # 2. 제네릭 필요성
    - 코드의 중복을 줄임
    - 재사용 가능한 컴포넌트를 생성
    - 타입 안정성 보장
        >> 컴파일 시점에서 타입을 체크(런타임 환경에서 발생할 수 있는 에러를 방지)

    # 3. 제네릭 기본 문법
    : 사용할 컴포넌트(변수, 함수, 클래스 등)의 이름 뒤에 꺽쇠괄호안에 타입 변수를 지정
    >> 함수나 클래스등을 사용할때 활용할 타입을 명시
    
    *"타입 변수"
    : 임의의 키워드를 사용하여 명시
    : 일반적으로 대문자 알파벳 하나를 사용(T: type, U, ...)
    >> 해당 타입 변수는 컴포넌트 네에서 실제 데이터 타입의 자리를 대신
*/
function generic<T>(arg: T):T{
    // 타입 변수 T(단일 타입 변수)
    return arg;
};
let str01= generic<string>('ㅎㅇ');
let str02= generic('hello'); // 꺽쇠괄호 없어도 오류X- 제네릭의 경우 타입 변수에 값을 유추 가능
///let str03= generic<string>(77); -Error

generic<number>(77);
generic<boolean>(false);

/*
    ? +) 여러 제네릭 타입 변수 지정
    : 여러 개의 독립적인 타입을 처리할 경우 사용
*/
function pair<T, U>(first: T, second: U): [T, U]{
    return [first, second];
}
let pairOutput= pair<string, number>('안녕', 369);
let pairOutput2= pair<number, string>(987,'gd');

function pair2<T, U>(first: T, second: T):U{
    return [first, second] as U;
}

let pair2Output= pair2<string, string[]>('hello', 'hi');

/*
    # 4. 제네릭을 사용하는 컴포넌트들 예시
    1) 변수
    let a;
    a=10; a='hello';

    2) 제네릭 함수
    : 매개 변수 타입을 지정하는 경우가 많음
*/
function genericFunc<T>(args: T[]): T[]{
    console.log(`배열의 길이: ${args.length}`);
    return args;
};

let resultFunc= genericFunc<boolean>([true, false, false]);
console.log(`함수의 반환값: ${resultFunc}`);

// 3) 제네릭 인터페이스: 타입 매개변수 T를 가지는 인터페이스
interface IGeneric<T>{
    (key: T): T;
};
function example<T>(arg:T):T{
    return arg;
};
let myGeneric: IGeneric<number>=example;
console.log(example(5));
console.log(myGeneric(5));

// 4) 제네릭 클래스
class GenericClass<T>{
    value: T;
    add: (x: T, y: T)=> T;
    constructor(value: T, addFunc:(x:T, y: T)=> T){
        this.value=value;
        this.add= addFunc;
    };
};
let myGenericNumber= new GenericClass<number>(0, function(x,y){return x+y});