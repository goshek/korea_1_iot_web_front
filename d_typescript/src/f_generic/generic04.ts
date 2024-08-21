/*
    ! 유니온 타입과 제네릭
    유니온 타입(or, |)
    : 여러 타입 중 하나가 될 수 있는 값을 의미

    ? 유니온 타입을 제네릭의 타입 변수에 적용
    extends 키워드를 사용(확장)
*/
// 해당 함수 호출 시
// string 또는 number타입의 매개변수만 적용
function unionGeneric<T extends string | number>(value:T){
    if(typeof value=== 'string'){
        return value.toLowerCase();
    }
    return value;
}
const result1= unionGeneric('sTriNg');
const result2= unionGeneric(1000);

console.log(result1, result2);

/*
    # 제네릭 유틸리티 타입
    : TS에 내장된 제네릭 타입
    >> 기존의 타입을 변환하거나 조작하는데 사용

    1) Partial(부분적인, 선택적인)
    >> 모든 속성을 선택적으로 만들어줌
    >> Partial<T>
*/
interface User2{
    name: string;
    age: number;
}

const users:{[key: number]: User2}={
    1:{
        name:'gwon',
        age: 20
    },
    2:{
        name: 'hyuck',
        age: 21
    }
};

/*
    사용자 데이터를 업데이트 하는 함수 구현
    >> id값을 사용하여 해당 데이터의 name 또는 age값을 수정
*/
function updateUser(id: number, changes: Partial<User2>){
    const user= users[id]; //User타입의 객체
    if(!user){
        console.log(`해당 id의 사용자는 없습니다.`);
    }
    // changes(객체 >> name과 age속성이 모두 선택적 속성)
    users[id]= {...user, ...changes}; //spread 연산자 를 사용하여 객체의 속성 값의 형태만 추출
};

updateUser(1, {name: 'kwon'});
updateUser(2, {age: 10});
updateUser(3, {name:'hyo'});
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);

updateUser(1, {name: 'pp', age:80});
console.log(users[1]);

/*
    2) readonly
    : 모든 속성을 읽기 전용 속성으로 변경(상수)
    : readonly<T>
*/
interface Human{
    name: string;age:number;
}

let user: Readonly<Human>={
    name: 'll',
    age: 90
}
// user.name='sdfs' -Error

/*
    3) Omit(생략하다)
    : 특정 속성을 제거한 타입을 반환
    : Omit<T, K>
    >> T타입에서 K 속성을 제거
*/

interface Employee{
    id: number;
    name: string;
    age: number;
    position: string;
}
type EmployeeWithoutId= Omit<Employee, 'id'>;
const newEmployee: EmployeeWithoutId={
    name: 'dfsfds',
    age: 50,
    position: 'student'
};