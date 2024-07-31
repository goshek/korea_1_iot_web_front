// var name= prompt('이름 입력');
// var age= prompt('나이 입력');
// age=Number(age)

// console.log(typeof(name)+ typeof(age));

// var n0= prompt('숫자 한 개 입력');
// var n1= prompt('숫자 한 개 입력');
// console.log(`두 수의 합은 ${Number(n0)+Number(n1)}`);

// const PI=3.14;
// let radius,area;

// radius=Number(prompt('반지름 입력'));
// console.log(`넓이: ${radius*radius*3.14}`);

// let num_input= Number(prompt('숫자 값 입력'));
// num_imput=num_input%2==0?console.log('짝수'):console.log('홀수');

// var total=0;
// total+=5;total*=3;total-=2;
// console.log(total);

// var score=75;
// if(score<0 || score>100){
//     console.log('유효한 점수가 아닙니다.');
// }
// else if(score>=90)(console.log('A'));
// else if(score>=80)(console.log('B'));
// else if(score>=70)(console.log('C'));
// else if(score>=60)(console.log('D'));
// else(console.log('E'));

// switch(true){
//     case(score<0 || score>100):
//         console.log('유효한 점수가 아닙니다.');
//     case(score>=90):
//         console.log('A');
//         break;
//     case(score>=80):
//         console.log('B');
//         break;
//     case(score>=70):
//         console.log('C');
//         break;
//     case(score>=60):
//         console.log('D');
//         break;
//     default:
//         console.log('E');
// }

// 조건문 예제
// -윤년 계산기
// var i=0;
// while(i<3000){
//     if((i%4==0 && i%100!=0) || i%400==0){
//         console.log(i);
//     }
//     i++;
// }
for(var i=5;i<0;i--){
    console.log(' ');
    for(var j=0;j<5;j++){
        console.log('*');
    }
}