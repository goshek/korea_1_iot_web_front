export const tmp='';

// 예시 1) 제네릭 함수 구현
function reverseArray<T>(array: T[]): T[]{
    let reverseArr= array.reverse();
    return reverseArr;
}

// 예시 2) 제네릭 인터페이스 정의
interface keyValue<K ,V>{ // K: key, V: value의 타입
    key: K;
    value: V;    
};
let keyValue: keyValue<string, number>={
    key:"gwon",
    value: 789
}

/*
    ? 제약 조건의 예시
*/
interface ILength{
    length: number;
}
/*
    T라는 타입 변수는 ILength인터페이스를 포함하는 타입이어야 한다.
    : 타입변수 extends는 반드시 포함할 타입
    >> T 타입의 데이터는 반드시 lentgh속성을 가져야 함
*/
function constraints<T extends ILength>(arg: T): T{
    console.log(arg.length);
    return arg;
}

let data01= constraints(
    {
        length:10,
        value:3,
        addOption: '안녕'
});

console.log(data01);

/*
    +) 최소한의 속성을 가진 객체 찾기
    keyof연산자
    : 객체 형태의 타입을 따로 속성만 뽑아 유니온 타입으로 만들어주는 연산자
    >> 모든 키의 이름을 유니온 타입으로 변환
*/
type Type={
    name: string;
    age: number;
}

type Union= keyof Type;
// Union= name | age;

/*
    ? 조건부 타입
    : 타입 매개변수에 대한 조건 표현식을 사용하여 타입을 결정하는 방식
    >> if문과 유사한 기능
*/
type Check<T>= T extends string ? 'String': 'Not a String';
type Type01= Check<string>; // String
type Type02= Check<number>; // Not a String

function checkType<T>(value: T): Check<T>{
    let result= typeof value=== 'string'? ('String' as Check<T>): ('Not a string' as Check<T>);
    return result;
};

console.log(checkType('ㅎㅇ'));
console.log(checkType(789));

