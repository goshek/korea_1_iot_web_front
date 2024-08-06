/*
    !while 반복문

    ? for문의 기본 구조(형태)
    for(초기식;표현식;증감식){
        반복할 코드
    }

    ? while문의 기본 구조(형태)
    while(조건식){
        반복할 코드
    }

    ? do while문의 기본 구조(형태)
    do{
        초기 1회 라도 실행할 코드
    }while(조건식)
*/

for(let i=0;i<5;i++){
    console.log('발생 시점에 따른 엔티티 분류: 기본*키 엔티티, 중심 엔티티, 행위 엔티티');
}
let k=0;

while(k<5){
    console.log('hello world');
    k++;
}

var p=0;
do{
    console.log('Bye');
}while(p===1);
// p!=1이지만 do while 문에 의해 최초 1회는 실행 된다.
