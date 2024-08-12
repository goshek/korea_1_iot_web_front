let temp=[];
let bigNum=0;
let sum=0;

for(let i=0;i<3;i++){
    temp[i]=Number(prompt(`${i+1}번째 숫자를 입력해주십시오.`));
};//입력 받기
for(let i=0;i<temp.length;i++){
    sum+=temp[i];
}//합 구하기
for(let i=0;i<temp.length;i++){
    if(temp[i]>bigNum){
        bigNum=temp[i];
    }
}//큰 값 구하기
console.log(`세 숫자의 합은 ${sum}`);
console.log(`세 숫자의 평균은 ${sum/temp.length}`);
console.log(`세 숫자중 가장 큰 값은 ${bigNum}`);
