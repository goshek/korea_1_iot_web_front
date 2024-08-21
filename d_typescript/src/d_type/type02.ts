export const tmp='';
/*
    ! typescript의 객체 타입

    ? 1. 객체 타입 지정(명시)
    : {} 중괄호를 사용하여 표현
    >> 각 테이터별 타입 명시의 구분은 세미콜론 사용을 권장
*/

const user:{
    /*
        각 타입 구분 시 콤마와 세미콜론 모두 사용 가능
        >> 세미콜론 사용을 권장
    */
    name: string,
    height: number;
    favorite: any[];
}={
    // 객체 내부에서 각 속성의 구분은 콤마로 표시
    name: 'Gwon',
    height: 178,
    //hobby: 'Study' -Error
    // >> 객체는 타입 명시를 하지 않은 속성은 정의할 수 없다.
    favorite: ['exercise', 'game[]', 7,['apple', 'mellon']]
}

/*
    ! 객체의 선택 속성
    : 선택적 프로퍼티 
    >> 속성명 뒤에 물음표를 붙여 해당속성이 존재하지 않을 수도 있음을 표현
*/
    const info:{
        name: string;
        height?: number;
    }={
        name: 'hyuck',
        //height: 190 생략해도 오류X
    }
/*
    ! 읽기 전용 속성
    : 속성명 앞에 "readonly" 키워드를 사용하여 해당 속성의 재할당을 금지
    >> 해당 키워드가 붙은 속성은 const키워드를 사용하여 정의한 변수와 유사(상수)
*/
const readonlyName:{
    readonly name: string;
    readonly age?: number;
    address?: string;
}={
    name: 'Kwon',
    age: 20,
    address: 'seoul'
};
/*
    객체의 속성값 수정
    => 객체.속성= 재할당값;
*/
//readonlyName.name='gwon'; -Error
readonlyName.address='busan';
console.log(readonlyName);

// === 객체 타입 어노테이션 ===
//! 문제1
// 다음 객체 타입을 정의하고, 해당 타입을 가진 객체를 하나 생성
// person: 객체는 name(문자열), age(숫자), hobby(문자열, 선택적) 속성을 가져야 한다.
const person:{
    name: string;
    age: number;
    hobby?: string;
}={
    name: 'ggwon',
    age: 21,
    hobby: 'soccer'
}

//! 문제2
// readonly를 사용하여 car 객체 타입을 정의하고, model(읽기 전용, 문자열)과 year(숫자) 속성을 포함하는 객체를 생성
// + model 속성에 다른 값을 할당하려고 할 때 발생하는 오류를 설명
const car:{
    readonly model: string;
    year: number;
}={
    model: "SUV",
    year: 2024
}