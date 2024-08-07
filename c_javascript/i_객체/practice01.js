// practice01.js

//! 객체, 배열, 함수 복습 문제

//? 문제 1
// 1. 객체 생성
// : person 객체 생성 - name (문자열), age (숫자), isStudent (불리언) 속성을 추가

// 2. 배열 사용
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가(3가지)
// : 두 번째 과일을 콘솔에 출력

// 3. 함수 정의
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수 add를 작성
// function Person(name='gwon',age='20',isSudent='true'){
//     this.name=name;
//     this.age=age;
//     this.isSudent=isSudent;
// }
let Person={
    name:'gwon',
    age:20,
    isstudent: true
};

let fruits=['apple','banana','orange'];
console.log(fruits[1]);

function add(num0, num1){
    return num0+num1;
}
console.log(add(5,4));

//? 문제 2
// 1. 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
// >> for in 반복문 사용
// let person1= new Person('gwon', 'hyuck', 20);
// console.log(person1);

//*for in 반복문
// 객체와 배열의 순회를 가볍게 처리하는 반복문(for문의 객체, 배열 순회 -인덱스 번호가 필요없는 경우 사용)
let array=[1,2,3,4,5];
for(let num in array){
    console.log(array[num]);
}

// 2. 배열 메서드 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력
let fruitsUpper=fruits.map(function(value){
    return value.toUpperCase();
});
console.log(fruitsUpper);
// 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성

// [1, 2, 3]
// [4, 5, 6]
// >> [5, 7, 9]
let arr0=[1,2,3];
let arr1=[4,5,6];
let arr2=[];
// function addArr(arr0, arr1){
//     for(let i=0;i<arr0.length;i++){
//         arr2[i]=arr0[i]+arr1[i];
//     }
// }
function addArr(arr0, arr1){
    let result=arr0.map(function(element,index){
        return element+arr1[index];
    });
    return result;  
}
console.log(addArr(arr0,arr1));
//? 문제 3
// 1. 객체 깊은 복사
// : person 객체를 깊은 복사하는 함수를 작성

// 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환하는 함수를 작성
// : 메서드 체이닝 사용

const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Doe", age: 18 }
  ];

let users2= JSON.parse(JSON.stringify(users));
let filtered_users=users.filter(function(value){
    return value.age>=18;
}).forEach(value=>console.log(value.name));
