/*
    ! 문서 객체 가져오기
    ? head, body, title
    document.head
    document.body
    document.title

    ? body 요소 내부에서 만든 다른 요소들
    querySelector(), querySelectorAll(), getElementById()

    ! DOM 수정하기
    # 1) 글자 조작하기
    문서객체.textContent
    : 입력된 문자열을 그대로 넣기
    문서객체.innerHTML
    : 입력된 문자열을 HTML형식으로 넣기
*/
document.addEventListener('DOMContentLoaded', ()=>{
    const a= document.getElementById('textContent');
    const b= document.getElementById('innerHTML');

    a.textContent= '<h2>text Content속성</h2>';
    b.innerHTML= '<h2>inner HTML속성</h2>';
});

/*
    2) 속성 조작하기
    : 문서 객체의 속성을 조작
    ? 문서객체.setAttribute(속성이름, 값)
    : 특정 속성에 값을 지정
    ? 문서객체.getAttribute(속성이름)
    : 특정 속성을 추출

    cf) HTML 표준에 정의된 속성은 위의 메소드 사용없이 사용 가능
    >> 내장된 속성들은 .연산자를 사용하여 속성읽기 또는 지정이 가능
*/
document.addEventListener('DOMContentLoaded', ()=>{
    const dogs= document. querySelectorAll('.dogs');
    dogs.forEach((dog, index)=>{
        const width= (index+1)*100; // 100 ,200, 300..
        //dog.setAttribute('width', width);
        //dog.setAttribute('height', '250px');
        dog.style.width= width+ 'px';
        dog.style.height= '250px';

        const source='';
        const alter= '강아지 이미지';
        dog.src= source;
        dog.alter=alter;
    });
});

/*
    # 3. 스타일 조작하기
    : 문서 객체의 스타일 조작 시 style속성을 사용
    ? style 속성은 JS에서 인식
    : JS문법 체계에서는 식별자에 - 기호 사용X
    >> lowerCamelCase 사용을 권장
    text-align >>textAlign, font-size >>fonstSize

    ? style객체 사용법
    : 주로 점 사용
*/
document.addEventListener('DOMContentLoaded',()=>{
    const divs= document.querySelectorAll('#container div');
    divs.forEach((div, index)=>{
        const gradation= index*10; // 0~240
        div.style.height='10px';
        div.style['backgroundColor']= `rgba(${gradation}, ${gradation}, ${gradation})`;
    });
});