/*
    ! DOM (문서 객체 모델, Document Object Model)

    +) 문서 객체
    : HTML 안에서 요소로 불리는 객체를 JS에서는 문서 객체라 불림

    #1. DOM 정의
    : 웹 페이지를 문서 객체로 조작하고 관리할 수 있는 인터페이스(상호작용, 규약)

    # 2. DoM 활용 방법
    : JS에서 DOM에 접근하는 경우 요소를 선택, 추가, 수정, 삭제하는 메소드와 속성에 접근이 가능

    # 3. DOM 조작 방법
    1) DOMContentLoded 이벤트
    : JS 내에서 문서 객체를 조작할 때 사용
    >> HTML의 모든 문서 구조(내용)가 모두 로드된 이후 이벤트 발생

    문서 객체가 정립된 이후에 콜백 함수(화살표 함수)가 실행
 */
document.addEventListener('DOMContentLoaded', ()=>{
    // 해당 위치에 DOM 조작 코드를 작성
});

/*
    ? 2) 문서 객체 가져오기
    : 전체 HTML 구조를 객체로 인식하여 속성을 가져옴
    2.1 documnet.body, document.head, document.title등...처럼 읽어오기 가능

    2-2 querySelector() & querySelctorAll() 메소드
    : head 요소와 body요소 내부에 생성한 다른 요소들을 읽어올 때 사용
    >> 선택자 부분에는 CSS 선택자를 입력
    ex) tag, #아이디, .class, 선택자A 후손B(자식 요소 선택자)
*/
document.addEventListener('DOMContentLoaded',()=>{
    /*
        querySelector: 요소를 하나만 추출
        첫 번째 것만 호출
    */
   const header=document.querySelector('h1');
   //텍스트와 스타일을 변경
   header.textContent='HEADER ONE';
   header.style.color='white';
   header.style.backgroundColor='black';
   header.style.padding='10px';
});

document.addEventListener('DOMContentLoaded',()=>{
    const items= document.querySelectorAll('li');
    items.forEach((item)=>{
        item.textContent= 'LIST_ITEM';
        item.style.color= 'pink';
        item.style.listStyle= 'none';
        item.style.backgroundColor='black';
    });
});

/*
    * 2-3 getElementById('아이디명')
    : 주어진 ID를 가진 요소를 찾아 해당 요소를 반환
    >> ID읠 경우 문서 내에서 유일
    >> #기호 없이 아이디명만 문자열로 전달  
*/
document.addEventListener('DOMContentLoaded',()=>{
    const example= document.getElementById('example');
    example.style.color= 'blue';
    example.style.backgroundColor= 'yellow';
})