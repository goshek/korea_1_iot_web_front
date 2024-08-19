/*
    ! 로컬 스토리지
    : 웹 브라우저가 제공하는 저장 공간
    >> 사용자의 컴퓨터에 영구적으로 데이터를 저장 가능

    HTML5 웹 스토리지 사양의 일부 도입으로 쿠키의 한계를 보완한 큰 저장
    용량과 보안을 제공

    ? 1. 로컬 스토리지 데이터 저장
    : localStorage.setItem(key, value)
    >> 웹 브라우저의 저장공간에 데이터 저장(브라우저를 닫아도 데이터가 유지)
*/
;
//localStorage.setItem('key', value);

/*
    # 로컬 스토리지의 데이터 저장
    : 기본적으로 문자열 데이터만 저장
    >> 기본 자료형의 경우 저장 가능
    but, 인식은 문자열
    로컬 스토리지엣 ㅓ객체나 배열과 같은 참조 자료형 데이터를 저장하려면 문자열 형태로 변환
    >> JSON.stringfy()
*/
localStorage.setItem('userAge',50);

let userInfo={
    name: 'Hyuck',
    age: 20
};
localStorage.setItem('userInfo',JSON.stringify(userInfo));

/*
    ? 로컬 스토리지 데이터 불러오기
    localStorage.getItem(key);
    >> 해당 키가 존재하지 않으면 null을 반환
*/
console.log(localStorage.getItem('userInfo'));//{"name":"Hyuck","age":20}
console.log(localStorage.getItem('no'));//null

/*
    참조 자료형(객체, 배열)
*/
let storedData= localStorage.getItem('userInfo');
let userInfoValue= JSON.parse(storedData);
console.log(userInfoValue);
console.log(userInfoValue.name);

/*
    # 로컬 스토리지에서 데이터를 가져오는 경우
    : null을 반환하는 상활을 대비하여 데이터 사용 전 null값 처리를 확인

    ? 로컬 스토리지 데이터 삭제
    : localStorage.removeItem(key);
    : localStorage.clear();
*/
localStorage.removeItem('userAge');
localStorage.removeItem('isStudent');

localStorage.clear();