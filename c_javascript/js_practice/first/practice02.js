/*
    ! 배열 메소드+ 콜백 함수
    1. scores 배열 생성
    2. 무작위의 2자릿수 데이터를 8개 이상 채움
    3. 60점 이상인 점수의 개수를 passingCount 변수에 저장
    4. 60점 이상인 점수의 평균을 passingAverage 변수에 저장
*/
const scores=[];
const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
for(let i=0;i<10;i++){
    scores[i]=getRandom(10,100);
}
console.log(scores);
function passingScores(array){
    const passing= array.filter(value=>value>60);
    const passingCount=passing.length;
    const passingAverage= array.reduce((acc,value)=>acc+value,0)/passingCount;
    return [passingCount, passingAverage];
};
const [passingCount,passingAverage]= passingScores(scores);
console.log(passingCount);
console.log(passingAverage);

const numbers=[1,2,3,4,5];
const add_num=numbers.map(function(value){
    return value+=10;
}).forEach(value=>console.log(value));

const odd_num= numbers.filter(function(value){
    return value%2===1;
}).forEach(value=>console.log(value));

const newNum= numbers.filter(function(value){
    return value%2===0;
}).map(value=>value+=10).forEach(value=>console.log(value));
/*
    map사용 각 요소에 10을 더한 새로운 배열
    filter 사용 홀수만 추출 새로운 배열
    map, filter사용 짝수만 찾아 각 숫자에 5를 곱한 새로운 배열
*/

/*
    ! 단어 필터링
*/
const words=['apple','monkey','banana', 'pig', 'grape', 'elephant'];
const filteredWords=function(words, substring){
    //includes 메소드: 배열, 문자열의 데이터에서 인자값이 포함되어있는지를 검사
    return words.filter(word=>word.includes(substring));
}
const containsA=filteredWords(words, 'a');
console.log(containsA);