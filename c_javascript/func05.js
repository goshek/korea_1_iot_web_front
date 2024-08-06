/*
    # 1. reduce()
    : 배열의 각 요소에 대해 함수를 적용하여 단일 값을 생성

    *기본 형태(구조)
    ? reduce 메소드의 인자값: 콜백 함수, 초기값(initialValue)
    배열명.reduce((accumulator, currentValue, currentIndex, array)=>{
        
    }, initialValue);

    *reduce 콜백함수의 인자값
    1. accumulator
    >> 이전 작업물의 반환값 (이전 리듀서 호출의 반환값)
    : 첫 번째 호출에서는 initialValue값이 지정됨

    2. currentValue- 현재 순회되는 값
    3. currentIndex(선택)
    4. array (선택)
    +) initialValue: 초기값, 생략 시 배열의 첫 번째 요소 값(선택)
*/
let numbers=[1,2,3,4];
//let sum= numbers.reduce((acc,value)=>acc+value,0);
// let sum=numbers.reduce((acc,value)=>{
//     return acc+ value
// },0); //acc+=value;
let sum=numbers.reduce(function(acc,value){
     return acc+ value
},0); //acc+=value;
console.log(sum);

/*
    ? cf) 배열의 고차함수(콜백함수) 사용 시 (forEach 제외)
    중괄호 사용의 경우: 반드시 return 사용
    중괄호 미사용의 경우: 반드시 return 생략

    #) reduce 예시 2
*/
let cars=['audi', 'bmw', 'volvo', 'kia'];
let combinedcar= cars.reduce(function(acc,car){
    return acc+ ','+ car;
},'hyundai');
console.log(combinedcar); //hyundai,audi,bmw,volvo,kia

// # 2. sort(): 배열의 요소를 정렬(오름차순)
let numberArray=[3,1,5,2,7,6] //[ 1, 2, 3, 5, 6, 7 ]
console.log(numberArray.sort());
// # 3. reverse(): 배열의 요소를 정렬(내림차순)
console.log(numberArray.reverse());//[ 7, 6, 5, 3, 2, 1 ]
/*
    # 4. 배열의 요소를 검색 & 평가
    1) indexOf, lastIndexOf: 특정 요소의 인덱스를 찾는 메소드
    2) find, findIndex: 조건을 만족하는 요소나 해당 인덱스를 찾는 메소드
*/
nums = [5, 4, 3, 6, 1, 7];

let firstOverFive = nums.find(num => num > 5);
let firstOverFiveIndex = nums.findIndex(num => num > 5);
console.log(firstOverFive); // 6
console.log(firstOverFiveIndex); // 3

/*
    자바스크립트의 내장 함수 - 콜백 함수 활용(고차 함수)
    ! 타이머 함수
    : 특정한 시간이 지난 후 함수를 실행하거나 일정 간격으로 함수를 반복 실행하는 기능

    & 1. setTimeout(콜백함수, 시간);
    : 지정된 시간이 지난 후, 주어진 콜백 함수를 단 한 번 실행
    - (지연) 시간: 밀리초(ms)

    *기본 사용법
*/
function greet(name='gwon'){
    console.log(`Hello, ${name}`);
}
/*
    2초 뒤에 실행
    >> 콜백 함수로 함수를 전달
    >> 콜백 함수의 인자 전달은 세 번째 인자부터 나열되는 값이 함수 의 매개변수로 전달
*/
setTimeout(greet,2000,'gwon');
//* 익명함수 사용
setTimeout(function(){
    console.log('4초 뒤에 실행됩니다.')
})
setTimeout(function(){
    console.log('3초 뒤에 실행됩니다.')
})
/*
    cf) 타이머 취소
    : clearTimeout(타이머_ID)
    : setTimeout으로 설정된 타이머를 제거
    >>setimeout()은 타이머 ID를 자동 반환

    & 2. setInterval(콜백함수, 시간);
    지정된 시간 간격마다 함수를 반복해서 실행
    : 사용법 setTimeout()와 유사
*/
var count=1;
let id=setInterval(() => {
    console.log(`3초마다 실행 됩니다. ${count++}번째`);
}, 3000);
setTimeout(() => {
    console.log('타이머를 종료합니다.');
    clearInterval(id);
}, 15000);