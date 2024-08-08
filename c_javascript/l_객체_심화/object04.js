/*
    ! 객체의 속성 존재 여부 확인
    : 객체에 없는 속성에 접근- undefined 자료형
    >> 조건문을 활용하여 undefined여부 확인

    # 1. 객체 내부에 해당 속성 여부 확인
*/
if(Object.name !== undefined){
    console.log('name 속성 O');
}
else{
    console.log('name속성 X');
}
/*
    name 속성 O

    # 2. 조건문을 연산자로 간단하게 표시
    object.name
    object.hobby

    1) 논리 연산자(and,or not)
    or 연산자 >> 둘 중 하나라도 true면 true

    ! 기본 속성 지정
    : 삼항 연산자
*/ 
Object.name= Object.name !== undefined? Object.name: '이름을 알 수 없는 고객';
console.log(Object.name);