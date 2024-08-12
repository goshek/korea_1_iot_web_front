let numbers= [];
let sum=0;

function randomIntFromInterval(min, max) { //범위 내 랜덤
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

for(let i=0;i<5;i++){
    numbers[i]= randomIntFromInterval(1,100); // 1~100사이의 랜덤 값
}

function calculateSum(array){ //계산 함수
    let temp= 0;
    for(let i=0;i<array.length;i++){
        temp+= array[i];
    }
    return temp;
}
console.log(numbers);
sum= calculateSum(numbers);
console.log(sum);
alert(`합은 ${sum}입니다.`);