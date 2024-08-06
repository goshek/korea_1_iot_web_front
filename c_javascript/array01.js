/*
    ! 자바스크립트의 배열
*/

let fruits=['사과','오렌지', '포도'];
let num=[1,2,3,45,5];
let empty_Array=[];
let variableArray= ['문자', 123, true, undefined, null];

let arrayFruits= new Array('사과', '바나나', '포도');
/*
    각 요소는 고유한 인덱스를 통해 접근 & 수정 가능
    1) 요소 접근
    배열명[인덱스번호]
    2) 요소 수정
    배열명[인덱스번호]= 수정 데이터 할당

    cf) 참조 자료형
    : 함수, 배열, 객체등 (복합 자료형)
    >>변수에 값이 아닌 '메모리 주소를 저장'하여 참조

    ?배열의 길이
    : 배열명.length 속성
    >> 배열의 마지막 요소 인덱스 번호 == 배열의 길이 -1
    *탐색
    1) indexof
    :배열의 지정된 요소를 찾고 그 요소의 첫 번 째 인덱스를 반환 (없으면 -1 반환)
*/
let snacks=['칸쵸', '초코송이', '오감자','칸쵸'];
console.log(snacks.indexOf('칸쵸')); //0
console.log(snacks.indexOf('오예스')); //-1
/*
    2:lastIndexOf()
    : 배열의 끝부터 시작하여 요소를 탐색(없으면 -1반환)
*/
console.log(snacks.lastIndexOf('칸쵸')); //3
/*
    3) includes()
    : 배열에 특정 요소가 존재하는지 확인
    : 해당 결과를 불리언 값으로 반환
*/
console.log(snacks.includes('오감자')); //true
console.log(snacks.includes('오예스')); //false

/*
    배열 조작 함수(기능)
*/
fruits= ['Apple', 'Banana'];
/*
    1) 요소 추가
    push(): 배열의 끝아 하나 이상의 요소를 추가
    >> 수정된 배열의 길이를 반환
*/
console.log(fruits.push('Cherry'));

/*
    2) 요소 삭제
    pop(): 배열의 마지막 요소를 제거, 그 제거된 요소를 반환(빈 배열은 undifined반환)
*/
console.log(fruits.pop());
/*
    +) shift()
    : 배열의 첫 번째 요소를 제거, 반환
*/
console.log(fruits.shift());
/*
    +) unshift()
    : 배열의 시작 부분에 하나 이상의 요소를 추가
*/
console.log(fruits.unshift('StrawBerry','mellon'));
/*
    +)splice()
    splice(시작 인덱스, 삭제할 요소의 개수)- 삭제
    splice(시작 인덱스, 0, 아이템 나열, ...)- 추가
*/
console.log(fruits.splice(1,1));
console.log(fruits.splice(1,0,'Mango','peach'));
/*
    3) 요소 정렬 & 순서 변경
*/
console.log(fruits.reverse());
console.log(fruits.sort());