/*! e_condition.js
 자바 스크립트의 제어문
 ? 1. JS 조건문의 종류
    if, else, else if, swith문
    1) if문
    if(조건문){
    
    }
    2) else if문
    else if(if조건문에서 false인 내용){
    
    }
    3) else문
    else{
    
    }

    switch문
 */
// var switch_test= Number(75);
// switch(100){
//     case 50:
//         console.log('50');
//         break;
//     case 100:
//         console.log('100');
//         break;
//     default:
//         console.log('위값을 충족하지 않거나 정수가 아닙니다.');
//         break;  
// }
//비교해보기
true? console.log('A'):console.log('B'); 
false? console.log('B'):console.log('A');
true && console.log('출력A');
true || console.log('출력A');

/*
    1.비교 연산자 사용시 '==' 대신 '==='사용을 권장
    console.log(0==false) true
    console.log(0===false) false

    2. 변수에 대한 조건 활용시 일치/ 불일치 여부를 생략
    let isTrue=true;
    if(isTrue===true){
        console.log('isTrue는 참이다.');
    }
*/

