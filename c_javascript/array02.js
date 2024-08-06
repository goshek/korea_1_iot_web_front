/*
    ?원본과 복사본의 독립성을 보장
    스프레드 연산자(...)
    : 배열 또는 객체의 요소를 개별 요소로 확장하거나, 여러 요소를 하나의 형태로 결합할 때 사용

    1) 개별 요소 확장
*/
let sports=['축구', '야구', '농구'];
let copy= ['배구',...sports,'펜싱']; //독립적인 주소 체계를 가짐

copy[1]= 'baseball';
console.log(sports);
console.log(copy);
//2) 하나의 형태로 결합
let mergeSports1= [...sports, ...copy];

console.log(mergeSports1);
console.log([...copy, ...sports]);

/*
    !자바스크립트 배열의 기능

    배열과 문자열 사이의 변환
    1) join() -연결
    : 배열의 모든 요소를 연결하여 하나의 문자열로 변환
    : 구분자를 전달(제공하지 않을 경우 쉽표가 기본값)
*/
let fruits=['사과', '바나나', '망고'];
console.log(fruits.join('_'));//사과_바나나_망고
console.log(fruits.join());//사과,바나나,망고
console.log(fruits.join('&'));//사과&바나나&망고
/*
    2) split()- 분리
    : 문자열을 특정 구분자를 기준으로 분리하여 배열로 변환
*/
let temp=fruits.join('&');
console.log(temp.split('&'));

/*
    다차원 배열
    : 배열의 요소로 또 다른 배열을 포함하는 구조
        >> 중첩 배열
*/
let matrix=[
    [1,2,3],
    [4,5,6,],
    [7,8,9]
];
console.log(matrix[1][2]);