// let fruits=['apple', 'banana', 'orange'];

// for(let i=0;i<fruits.length;i++){
//     console.log(`${i+1}번째 과일은 ${fruits[i]} 입니다.`);
// }

// var k=0;
// while(k<fruits.length){
//     console.log(`${k+1}번째 과일은 ${fruits[k++]} 입니다.`);
// }

// var k=0;
// do{
//     console.log(`${k+1}번째 과일은 ${fruits[k++]} 입니다.`);
// }while(k<fruits.length);

/*
    ! 구구단 출력기
    - 사용자로부터 1~9까지의 숫자를 입력받기(prompt)
    - 입력받은 데이터 값을 숫자 자료형으로 변환(Number())
*/
while(1){
    const input_num=Number(prompt('1~9사이의 숫자를 입력'));
    var check=0;
    for(var i=0;i<10;i++){
        if(input_num==i){
            check=1;break;
        }
    }
    if(check==1){
        for(var i=1;i<10;i++){
            console.log(`${input_num}X${i}=${input_num*i}`);
        }
        break;
    }
    else{
        console.log('잘못된 값');
    }
}