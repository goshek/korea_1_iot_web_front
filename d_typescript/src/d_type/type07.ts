export const tmp='';
/*
    ! 타입스크립트의 함수
    ? 함수의 선언과 호출
    : 매개변수와 반환 값에 타입 지정 가능
*/
function greet(name: string): string{
    return `Hello${name}`;
}

/*
    ? 함수에 타입 별칭을 사용하는 경우
    >> 화살표 함수의 체계를 사용
*/
type ArrowFuncType=(name:string)=>string;
const arrowFunc:ArrowFuncType=(name)=>{
    return `Hi ${name}`;
};
console.log(arrowFunc('aaa'));
console.log(arrowFunc('bbb'));

/*
    ? 선택적 매개변수와 기본 매개변수
    1) 선택적 매개변수
    : 함수 호출 시 생략 가능
    : 변수명 뒤에 ? 작성

    2) 기본 매개변수
    : 기본값을 할당
    : 함수 호출 시 생략하는 경우에 기본값을 자동 할당
    : 매개변수명= '기본값'
*/
function select(name?: string, greeting: string= '안녕'){
    if(name){
        console.log(`${greeting}, ${name}`);
    }
    else{
        console.log(`${greeting}, guest`);
    }
};
select();
select('sdf');
select('sdf','hi');

select(undefined, 'hi');

// !Rest(나머지) 매개변수
function sum(a: number, b: number, ...c:number[]){
    return c.reduce((c1,c2)=>c1+c2,0);
}
console.log(sum(1,2,3,4,5));
/*
    ? Rest 매개변수의 주의점
    : 항상 매개변수 리스트의 마지막에 위치
    >> 타입 명시를 배열로 작성
*/