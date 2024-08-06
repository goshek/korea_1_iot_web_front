//함수 & 배열
/*
    ! 1. 배열의 합계를 구하기
*/
let array=[1,2,3,4,5];
function sumArray(array){
    let sum=0;
    for(var i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}
console.log(`배열의 합계는 ${sumArray(array)}입니다.`);//배열의 합계는 15입니다.

/*
    ! 2. 특정 수 이상의 요소 필터링
*/
//배열 안에서 10이상의 요소만 필터링
function filter_TenOver(array){
    let filtered=[]; //10이상의 요소만 담을 새 배열 생성
    for(let i=0;i<array.length;i++){
        if(array[i]>=10){
            filtered.push(array[i]);
        }
    }
    return filtered;
}
console.log(filter_TenOver([98,9,8,69,9,6,11,10,9]));
//[ 98, 69, 11, 10 ]

/*
    ! 3. 배열 요소 검색
*/
function contain_Element(array, element){
    for(let i=0;i<array.length;i++){
        if(array[i]===element)return true;
    }
    return false;
}
console.log(contain_Element([98,9,8,69,9,6,11,10,9],6));
console.log(contain_Element([98,9,8,69,9,6,11,10,9],8795));

/*
    ! 4. 배열 평균 구하기
*/
function find_Avg(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum/array.length;
}
console.log(find_Avg([98,9,8,69,9,6,11,10,9]));
/*
    ! 5. 최댓값 찾기
*/
function findMax(array){
    let temp=0;
    for(let i=0;i<array.length;i++){
        if(temp<array[i]) temp=array[i];
    }
    return temp;
}
let p=[98,9,8,69,9,6,11,10,9];
console.log(findMax([98,9,8,69,9,6,11,10,9]));
const maxValue = Math.max.apply(null, p);
console.log(maxValue);

let findOdds=(arr)=>{
    let odds=[];
    let num=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            odds[num++]=arr[i];
            //odds.push(arr[i]);
        }
    }
    return odds;
}

console.log(findOdds(p));