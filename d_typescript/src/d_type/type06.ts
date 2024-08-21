// type06.ts
export const tmp = '';

//! 리터럴 타입(Literal, 문자 그대로의)
// : 특정 '값'만을 가질 수 있는 타입을 정의할 때 사용
// >> 특정 '값'으로 제한

//! 리터럴 타입의 종류
// - 해당 값만을 가지는 상수
// - 해당 값을 타입으로 지정한 변수
// >> 다른 값을 할당하려고 하면 타입 에러가 발생

//? 1) const 키워드를 사용하여 직접 리터럴 값을 할당(초기화)
let str1 = '안녕하세요'; // string 타입
str1 = 'hello';
str1 = '곤니치와';

const str2 = '반갑습니다.'; // "반갑습니다." 타입
// str2 = 'hi';
// str2 = '니하오';

// >> 해당 값을 자동으로 리터럴 값으로 유추

//? 2) 변수에 타입 명시를 리터럴 값으로 명시
let num1: 123 = 123; // 123 타입
// num1 = 234;
// num1 = 345;

let boo1: true = true; // true 타입
// bool1 = false;

//! 리터럴 타입의 활용
// : 주로 type 키워드(타입 별칭)와 함께 사용
// >> 유니언 타입과 함께 사용하여 다양한 값을 표현함과 동시에 제한 가능
// >> 변수 혹은 매개변수가 특정 값들 중 하나만을 가질 수 있도록 제한

//? 리터럴 타입 예시
// 1) Directions(방향) 타입을 정의
type Directions = 'up' | 'down' | 'left' | 'right';

let moveUp: Directions;
moveUp = 'up';
// moveUp = '위';

// 2) 함수의 인자로 리터럴 타입을 지정하여 특정 값으로 제한
function setAlignment(align: 'left' | 'center' | 'right') {
  // 함수 내용
  // let container = document.querySelector('#container');
  // container.style.textAlign = align;
}

setAlignment('center');
// setAlignment('중앙'); - Error

// students = '김준일';

// +) 리터럴 타입의 경우 여러 타입의 혼합이 가능
type mixedType = 'yes' | 'no' | 1 | 2 | 3;

let gameState: mixedType;
gameState = 'yes';
gameState = 3;
gameState = 1;
// gameState = 123;
// gameState = '노우';
gameState = 'no';

/*
    ! 객체 리터럴 타입
    : 실제 객체 데이터 정의
*/
type UserType={
    name: 'se';
    height: 178;
}
let user011:UserType={
    name:'se',
    height: 178
};
console.log(user011);

/*
    ! 객체의 구조적 타이핑(덕 타이핑)
    : 객체의 타입을 실제 값보다는 그 구조나 멤버에 의해 결정하는 방식
    >> 객체의 형태가 같다면, 같은 타입으로 간주한다.
*/
type Person={
    name:string;
    age: number;
};

function greet(person: Person){
    console.log(`Name: ${person.name}, age: ${person.age}`);
}
// Person 타입이 명시적으로 구현되지 않은ㄱ ㅐㄱ체 생성
const p1={
    name: 'ggwon',
    age: 20
};

const p2={
    name: 'sdf',
    age: 50,
    hobby:'soccer'
}

const p3={
    name: 'sdfs'
}

greet(p1); // Person과 구조가 일치하기 때문에 Person 취급
greet(p2); // 구조적 타이핑에 의해 Person취급(hobby속성을 무시)
//greet(p3) 불가

// ! 중첩된 객체 타입 정의
type Address={
    street: string;
    city: string;
    zipCode?: string;
}
type UserProfile={
    username: string;
    email: string;
    address: Address;
};

let userA: UserProfile={
    username: 'sdf',
    email: 'sdfs',
    address: {
        street: 'dfs',
        city: 'sdfsa'
    }
}
userA.address.city='d';
console.log(userA);

/*
    ! 객체의 인덱스 서명
    : 객체의 모든 속성에 대해 타입을 정의하기 않고
    >> 키와 값의 타입만 정의하여 구조를 유연하게 적용하는 방법
*/
type UserDataType={
    name: string;
    // ? 인덱스 서명 사용 방법
    // [propertyName: indexType]: valueType;
    [key: string]: string | Array<string>; //키는 string사용을 권장
};

let user1: UserDataType={
    name: 'srgasg',
    height: 'sdfds',
    //age: 50; -Error
    age: '50'
}
user1.email='sdf';
user1.kk=['sdf','sdfd']
console.log(user1);