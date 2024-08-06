/*
    !콜백 함수(고차 함수)

    자료형: 기본 자료형 VS 참조 자료형(배열, "함수", 객체)
    >> JS에서 함수는 "자료형"
        , 변수에 할당 가능, 함수의 매개변수로 전달 가능(인자로 사용)

    # 1. 콜백 함수(CallBack)
    : 다른 함수에 인자로 전달되어, 그 함수의 내부에서 실행되는 함수

    # 2. 콜백 함수의 중요성
        - 비동기 처리
          : 순차적인 코드 흐름을 개발자가 원하는 방식으로 제어 가능
          : 사용자 행동에 반응하는 이벤트 내부에서 동작 가능

    #3. 콜백 함수의 응용 사례
    - 서버 요청 처리
    - 이벤트 처리
    - 타이머 함수

    & 콜백 함수 예제

    1) 선언적 함수를 사용한 콜백 함수 구현
*/
console.log('콜백함수: 선언적 함수');
//0~2까지 콘솔창에 출력 >>3회 실행
function callback1(callbackFunc){ //callbackFunc 매개변수(함수를 데이터로 전달받음)
    // 함수 내부에서 다양한 기능, 동작 작성 기능
    for(let i=0; i<3;i++){
        callbackFunc(i); // callbackFunc(print함수)의 인자로 i값을 전달
    }
}
//let callbackFunc=index=>console.log(`${index}번째 함수 호출`);
//복잡한 로직(예시)
function print(index){
    console.log(`${index}번째 함수 호출`);
}
callback1(print); //print함수(콜백 함수)를 callback1(메인로직)의 인자로 전달

// 2) 익명함수를 사용한 콜백 함수 구현
console.log('콜백함수: 익명 함수');
const print2=function(count){
    console.log(`${count}번째 함수 호출`);
}
callback1(print2);

// 3) 화살표 함수를 사용한 콜백 함수 구현
console.log('콜백함수: 화살표 함수');
function callback2(number, callbackFunc1,callbackFunc2){
    //number변수(데이터), callbackFunc함수
    if(number%2===0){
        callbackFunc1(number);
    }
    else{
        callbackFunc2(number);
    }
}
const print3_1=even=>console.log(`${even}은 짝수 입니다.`);
const print3_2=odd=>console.log(`${odd}은 홀수 입니다.`);
callback2(7,print3_1,print3_2);
callback2(945632,print3_1,print3_2);

/*
    ! 콜백함수를 활용하는 자바스크립트의 내장 함수
    '배열'이 가지는 콜백 함수의 활용
        >> 메서드의 형태
    배열.속성
    배열.기능동작(): 메소드: 어딘가에 소속된 함수

    *배열의 콜백 함수의 형태
    배열.메소드(콜백함수)
    >> 콜백함수를 가지는 배열의 메소드의 공통된 기능은 배열을 순회한다.
    >> 콜백함수는 3가지 함수 선언 방식 모두 사용 가능

    *배열 콜백 함수의 '인자값'
*/
function call_back(value, index, arr){}
/*
    1) value
    : 배열에서 순회되는 값 요소의 값
    2) index
    : 배열에서 순회되는 값 요소의 값
    3) array
    : 배열 그 자체
    >> 콜백함수의 인자값은 필수 사항X (value만 사용하는 경우가 많음)
        : 사용하지 않는 인자값은 생략 가능
    매개변수는 함수 내부의 로컬 변수이기 때문에 이름 변경 가능

    # 배열의 콜백함수를 가지는 메소드 종류
    & 1. foreach()
    : 각 요소에 대해 동일한 함수를 실행
    : 배열 내부의 요소를 사용하여 콜백함수를 호출
*/
console.log('forEach()');
const num= [23,41,19,7,36];
//배열명. forEach(각 요소들에게 적용할 함수 -콜백 함수)
num.forEach(function(val, index, num){
    console.log(`${index+1}번째 요소: ${val}`);
})//[ 23, 41, 19, 7, 36 ]


/*
    & 2. map()
    : 배열의 각 요소에 대해 함수를 적용하고 새로운 배열을 생성하여 반환
    : 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 생성
    >> 전체 배열의 요소 개수의 변화가 없다.
*/
console.log('map()');
console.log(num);
const new_num=num.map(function(val){
    let square= val*val;
    return square;
});
//: 배열의 메소드로 반환되는 값은 자동으로 배열 내에 저장
console.log(new_num);//[ 529, 1681, 361, 49, 1296 ]

const arrowMap=num.map(value=>value*value)

/*
    & 3. filter()
    : 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만드는 함수
    >> 기존의 배열과 요소의 수가 일치하지 않을 수 있다.
*/
const basicArray= [0,684,3543,354321,53843,21,678];
const evenNumbers= basicArray.filter(function(value){
    return value%2 ===0;
})
console.log(evenNumbers);//[ 0, 684, 678 ]

/*
    # 배열을 활용한 콜백 함수 예제
*/
let cars=['audi', 'bmw', 'volvo', 'kia'];
// 1. 전체 배열의 요소를 순회하여 출력
cars.forEach(value => console.log(value));
// 2. 전체 배열의 요소를 대문자(영문자)로 변환
const upper_cars=cars.map(function(value){
    let temp=value.toUpperCase();
    return temp;
});
console.log(upper_cars);
// 3. 전체 배열의 요소 중 문자열의 길이가 4보다 큰 요소만 반환
const overfour= cars.filter(value=>value.length>4);
console.log(overfour);

/*
    & 메소드 체이닝
    : 메소드를 연속으로 호출하는 프로그래밍 패턴
    >> 어떤 메소드가 반환한느 값을 기반으로 또 다른 메소드를 줄줄이 사용하는 것
*/
let numbersArray=[0,1,2,3,4,5,6,7,8,9];
//짝수만 선택, 해당값을 제곱, 콘솔에 출력
const changeArray=numbersArray.filter(function(value){
    return value%2===0;
}).map(value=>{
    return value*value;
}).forEach(function(value){
    console.log(value);
});
