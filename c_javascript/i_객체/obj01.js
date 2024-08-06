/*
    # 1. 객체의 정의
    : 관련된 데이터와 함수를 모아 놓은 집합
    : 객체 내부에서는 데이터와 함수를 포로퍼티와 메서드라고 불림
    cf) 객체지향 프로그래밍
    : 실세계에 존재하고 인지하는 모든 것을 객체로 표현

    # 2. 객체의 특징
    : (참조) 데이터 타입 중 하나, 다양한 값을 담을 수 있는 컨테이너

    # 3. 객체의 구조
    객체 지향 프로그램의 객체 - 고유한 특성과 동작을 가지는 것
    * EX) 사람이라는 객체를 정의
    ?특성 (속성, 프로퍼티)- 변수
    : 객체가 가진 데이터(값), 객체를 구성하는 정보의 일부, 해당 객체의 상태를 나타냄
    - 이름, 나이, 성별, 주민등록번호... 등
    ?기능 (동작, 메소드) -함수
    : 객체가 수행할 수 있는 행동이나 기능을 정의
    : 객체의 속성을 활용하거나 조작 가능
    - 걷다, 먹다, 생각하다, 휘두르다.. 등

    # 4. 객체의 기본형태(구조)
    cf) let arrayName= {요소1, 요소2, ...};
*/
let objectName= {
    //키1: 값1, 키2: 값2...
    //>> 값의 데이터 형식에는 제한X(배열, 또 다른 객체, 함수 모두 사용 가능)
    //>> 키와 값을 하나의 쌍으로 나열, 각각의 쌍은 콤마로 구분
    /// 값은 중복될 수 있으나, 키는 중복될 수 없음
};
let gw=['g','w'];
let gw2={
    lastName: 'g',
    firstName: 'w'
};
/*
    5. 객체 생성 방법
    1) 리터럴 방식
    : 가장 간단하고 일반적인 객체 생성 방식
    : 중괄호 {}를 사용하여 객체를 선언하고 초기화- 내부에 속성과 메소드 정의
*/
let person={
    name:{
        last: '사',
        first: '람'
    },
    age: 99,
    gender: 'male',
    interests: ['eat','sleep'],
    isMarried: false
};
/*
    2) 생성자 함수 사용 방식
    : new 키워드와 함께 '사용자 정의 생성자 함수'를 사용하여 객체를 생성
    >> 같은 형태(구조)의 객체를 여러개 생성할 대 유용
    : 함수 내부에서는 this 키워드를 사용해 객체의 속성(프로퍼티) 정의
    
    ? 생성자 함수명은 UpperCamelCae 사용을 권장
        : 객체 생성을 위한 함수로 사용성을 명확하게 지정하기 위함임
*/
function Human(namePara, heightPara){
    //this키워드의 경우
    //: 해당 생성자 함수로 생성되는 객체 그 자체
    //: 해당 함수로 생성되는 객체마다 this값이 달라짐
    this.name= namePara;
    this.height=heightPara;

    this.greet= function(){
        console.log('Hellow World');
    }
}

let person1= new Human('Gwon', 177);
let person2= new Human('Hyuck', 180);
console.log(person1.name);
console.log(person2.name);
console.log(person1.height);
console.log(person2.height);

/*
    ! 객체의 멤버 접근 방법
    ? cf) 배열(리스트)은 각 요소 접근 시 인덱스 번호를 사용
*/
let array=[1,2,3,4];
array[0]=5;console.log(array);
/*
    객체는 각 요소값에 대해 '키'로 접근
    객체명.속성명(키)
    객체명.메소드명(키)
    >> 점표기법 사용

    객체명[속성명]
    객체명[메소드명]
    >> 대괄호 표기법
*/
let dog={
    name:{
        last: 'hello',
        first: 'world'
    },
    age: 3,
    color: 'white',
    favoriteToy:['bear', 'tug'],

    bark: function(){
        console.log(`Hi, ${this.name.first}`);
    }
};
console.log(dog.favoriteToy[0]);
dog.bark();

console.log(dog['age']);
/*
    ! 객체 속성 추가
    객체명. 포로퍼티명= 값(데이터);
*/
dog.speed= 10;
console.log(dog);
/*
    JS의 this 키워드
    객체
    : 지금 동작하고(호출되어지고) 있는 코드를 가지고 있는 객체를 가리킴

    ? 1. 전역 컨텍스트
    : 전체 실행 상태
*/
console.log(this);
/*
    {}: 해당 파일의 전역 스코프(전역 상태)
    Node.js에서는 global(전역)객체
    브라우저 환경에서는 window

    ? 2. 함수 컨텍스트
    1) 일반 함수의 this
*/
    function showthis(){
        console.log(this);
    }
    showthis();//전역 상태에 대한 정의
/*
    2) 메소드로 쓰이는 함수 내부의 this
    : 객체의 메소드로 함수를 호출한 경우
        ,this는 해당 메소드를 호출한 객체에 바인딩
*/
const myObject={
    name: 'object',
    showThis:function(){
        console.log(this);
    }
}
myObject.showThis();//{ name: 'object', showThis: [Function: showThis] }
/*
    리터럴 객체 사용 시
    :this 값이 고정
    생성자 함수 사용한 객체 생성 시
    :this값은 현재 쓰이는 객체에 바인딩(어떠한 객체를 호출하느냐에 따라 달라짐)
*/
function Person02(name){
    //this는 Person02 생성자 함수로 생성되는  각각의 객체를 의미
    //this.name은 각 객체의 속성
    //우항의 name은 생성자 함수 호출시 전달되는 인자값
    this.name=name;
}
const human01= new Person02('Kwon');
const human02= new Person02('Hyo');
console.log(human01.name);
console.log(human02.name);

const arrowObject={
    name: 'object',
    showThis:()=>{
        // 화살표 함수가 정의되는 객체의 생성 스코프를 this가 받아 옴
        //>> 화살표 함수가 들어있는 객체의 전역을 가져옴
        console.log(this);
    }
}
arrowObject.showThis();//# {}: 전역 컨텍스트의 this와 동일- 전역 객체
/*
    ! 객체 내부의 this
    객체 내부에서 현재 쓰이는 객체를 가죠오기 위해서
    , this값 활용시 일정한 형태의 함수 사용을 권장
    >> 선언적 함수, 함수 표현식 등 function 키워드 사용
*/