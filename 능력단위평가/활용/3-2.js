let numbers=[];
let sum=0;

function randomIntFromInterval(min, max) { // 최소값과 최대값을 포함하도록 설정
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

for(let i=0;i<5;i++){
    numbers[i]=randomIntFromInterval(1,100);
}

function calculateSum(array){
    let temp=0;
    for(let i=0;i<array.length;i++){
        temp+=array[i];
    }
    return temp;
}
console.log(numbers);
sum=calculateSum(numbers);
console.log(sum);
alert(`합은 ${sum}입니다.`);