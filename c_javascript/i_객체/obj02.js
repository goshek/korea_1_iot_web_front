/*
    ! 자바스크립트의 객체 '프로토타입'
    : 객체의 원형(프로토타입)을 사용하여 새로운 객체를 생성
    >> 객체의 속성과 메소드 재사용 가능
    cf) 프로토타입: 시제품
    >> 프로토타입 기반 언어
    : 객체를 원형(프로토타입)으로 하는 복제 과정을 통해 객체 동작을 재사용하게 하는 로직
    : 모든 객체들이 메소드와 속성을 상속받기 위한 템플릿(틀)로써 프로토타입 객체를 가짐

    # 1. 생성자 함수를 사용한 객체 생성
    : new 키워트를 사용하여 함수를 호출
    : 관례적으로 함수명을 UpperCamelCase 사용
*/
function Person(firstName, lastName, age, gender){
    this.name={
        first: firstName,
        last: lastName
    }
    this.age= age;
    this.gender= gender;
    this.greeting=function(){
        //객체의 메소드는 화살표 함수보다 function 키워드 사용을 권장
        console.log(`Hello, ${this.name.last}`);
    }
}
let person1= new Person('Gwon', 'Hyuck', 20, 'male');
person1.greeting();

/*
    # 2. 클래스를 사용한 객체 생성 방법
    : 새로운 객체를 생성하는 템플릿 역할
    ! 클래스의 생성자
    : 클래스에서 객체를 생성하고 초기화하기 위한 '특별한 메소드'
    : new 키워드로 클래스의 객체를 생성할 때 자동 호출
    >> 각 클래스는 하나의 consrtructor(생성자)만을 가짐

    ! 클래스의 메소드
    : 클래스를 기반으로 생성된 객체가 공통적으로 가지는 함수
    >> 클래스 내부에서는 function키워드 사용X

    ===클래스 생성 방법===
    : class 키워드를 사용
    : 클래스명은 대문자 사용을 권장(UpperCamelCase)

    class 클래스명{
    }
*/
class Human{
    // 속성- 생성자 함수 정의와 동일
    name='kkk';
    age='aa';
    job='bb';
    //생성자- constructor() 메소드 정의
    //: 생략시 빈 생성자가 자동 정의
    constructor(name2, age2, job2){
        //생성자의 역할
        //: 클래스로 생성되는 객체의 속성값을 초기화
        this.name=name2;
        this.age=age2;
        this.job=job2;
    }
    greet(){
        console.log(`안녕하세요.${this.name}님`);
    }
}//클래스가 호출X/ 생성자 함수가 호출
let human1= new Human('aaa',21,'고등학생');
let human2= new Human('bbb',27,'회사원');
console.log(human1);