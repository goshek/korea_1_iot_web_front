document.cooke="cookie02=안녕;"

/*
    ! 쿠키 값 가져오는 방법
    1) document.cookie에서 반환된 문자열을 분석
    2) 특정 쿠키 이름을 찾아 해당 값을 추출

    ? 쿠키 문자열 분리
    : 웹 문서에 저장된 쿠키로부터 문자열을 세미콜론을 기준으로 분리해서 개별 쿠키를 배열로 반환
*/
function getCookieValue(cookiename){
    let cookies= document.cookie.split(";");
    let length= cookies.length;
    for(let i=0; i<length;i++){
        let cookie= cookies[i]; //배열을 순횐하며 각 쿠키를 변수에 저장
        let parts= cookie.split('='); //쿠키를 이름과 값으로 분리
        let name= parts[0].trim();
        if(name=== cookie.name){
            return parts[1] || ''; // 값이 있으면 반환하고, 해당 이름에 값이 없으면 빈 문자열을 반환
        }
    }
    return '';
}
let username= getCookieValue('username');
console.log(username);
let userAge= getCookieValue('userAge');
console.log(userAge);

function deleteCookie(cookieName){
    document.cookie= cookieName+ "=; expires=Fri, 17 May 2024 00:00:00 GMT; path=/;"
}
deleteCookie('username');
deleteCookie('userAge');
deleteCookie('oneDay');

// 원하는 쿠키이름, 쿠키 값 >> 전체 프로젝트 경로에서 접근 가능한 쿠키 설정
// +) 만료 날짜 1시간 뒤
let date= new Date();
date.setTime(date.getTime()+ (1*60*60*1000)); //현재 시간에 1시간을 추가
let expires= "expires=" + date.toUTCString(); //시간을 문자열로 변환
// "expires=시간 문자열"
document.cookie="cookieName=chocoCookie;"+ expires+ "; path=/";