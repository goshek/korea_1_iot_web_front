/*
    ! 구조분해 할당(다중 할당)
    : 배열과 객체의 값을 한 번에 여러 개의 변수에 할당

    ? 다중 할당의 형태
    [식별자, 식별자, 식별자, ...]= 배열;
    {속성명, 속성명, ...}= 객체;
    cf) 식별자: 변수를 나열한 형태
*/
let array=[1,2];
let [a,b]= array;
console.log(a);
console.log(b);

/*
    객체는 배열과 딜리 순서 상관X
    : 각각 연결된 속성명으로 값이 자동 전달
*/
let bookObject={
    publisher: "korea",
    name: 'Gwon',
    price: 25000
};
const{publisher, name, price}= bookObject;
console.log(publisher, price, name);

// 새로운 이름에 저장
const{aaa=name, bbb=price}= bookObject;
console.log(aaa, bbb);