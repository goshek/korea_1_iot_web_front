/*
    ! 객체의 참조 타입 이해
    '원시' 타입(기본 자료형)
    '참조' 타입(참조 자료형)
    : 메모리에 저장된 객체의 주소를 저장(변수에 주소값이 저장)
*/
let computer1= {
    name: '삼성 노트북 북3'
}
let computer2= computer1;
computer1.name= '맥북';
console.log(computer2);//맥북

function changeName(com){
    com.name='인텔';
}
changeName(computer2); //11번째 줄과 동일
console.log(computer1.name);//인텔

/*
    객체의 복사(깊은 복사& 얕은 복사)
    1) 얕은 복사
    : 속성값이 원시 타입인 경우 그 값이 직접 복사
    : 속성값이 참조 타입인 경우 해당 참조(메모리 주소)만 복사
*/
let animal1={
    name: 'choco', //원시 타입 속성
    owner:{
        name: 'gwon',
        job: 'student'
    }
}

let animal2= animal1;
animal2.name='strawberry';
animal2.owner='hyuck';
console.log(animal1);//{ name: 'strawberry', owner: 'hyuck' }
console.log(animal2);//{ name: 'strawberry', owner: 'hyuck' }

/*
    2)깊은 복사
    : 원본 객체의 값을 완전히 복제하여 새로운 객체를 생성
    : 원본 객체와 복사본이 서로 독립적

    JSON.parse(JSON.sringfy(object))
    JSON.stringfy(obj)
    : 전달받은 객체를 JSON문자열로 변환

    JSON.parse(json)
    :JSON 문자열을 JS객체로 변환: 새로운 메모리 위치에 할당
*/
let book1={
    title: '어린왕자',
    author: '생택쥐페리',
    publishYear: 2024
}
let book2= JSON.parse(JSON.stringify(book1));
book2.title='little prince';
book2.publishYear='2023';
console.log(book1); //{ title: '어린왕자', author: '생택쥐페리', publishYear: 2024 }
console.log(book2); //{ title: 'little prince', author: '생택쥐페리', publishYear: '2023' }
/*
    JSON형식
    JavaScript Object Notation(자바스크립트 객체 표기법)

    #객체의 속성 확인 연산자
    {title: '어린왕자', author: '생텍쥐페리', ' publishYear:2024}
    :속성이 객체에 존재하는지 확인을 위해 in 연산자를 사용
    >> 여부를 boolean값으로 반환
*/
console.log('title' in book1);//true
console.log('author' in book1);
console.log('publishYear' in book1);
console.log('publishyear' in book1);//false
/*
    속성 삭제
    : delete연산자를 사용
    >> 속성 삭제 시 값이 자동 삭제
*/

delete book1.author;
console.log(book1); //{ title: '어린왕자', publishYear: 2024 }
