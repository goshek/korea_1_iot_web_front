import React from 'react'

/*
    ! JSX(TSX)
    : JS(TS) 파일 내에서 HTML과 유사한 마크업을 작성할 수 있도록 해주는 JS 구문 확장 문법

    ? 사용 목적
    - 선언적 뷰 설계 가능 (UI를 직관적으로 설계)
    - 불필요한 DOM 설정 불필요

    ? 특징
    : JS + HTML(XML) 형태로 엄격한 문법 체계
    : JSX내에서 Babel을 사용해 JS로 변환하려면 XML 문법을 준수

    # JSX 문법 규칙
    
    1) 단일 루트 노드
    : 하나의 '컴포넌트'는 단일 루트 노드만 반환
    >> 최상단의 루트 태그가 존재해야 함
    >> <></> 빈 Fragment로 감싸서 표현

    2) 태그 닫기
    : 태그는 반다시 닫혀야 하며 단일 태그 사용 시 닫히는 꺽쇠괄호에 /가 첨부
    >> input, br, hr, img등

    3) 대소문자 구분
    : 태그 내의 이름이 대소문자를 구분
    >> 소문자로 시작: 'HTML' 요소로 인식
    >> 대문자로 시작: 사용자 정의 컴포넌트로 인식

    4) HTML 코드를 JSX로 변환 시 주의점
    - 대부분 lowerCamelCase 사용
    : css속성, on- 메소드 등

    - class 속성의 경우 className으로 변경
    : JS의 class(객체 틀)과의 이름 충돌
*/
function Div(){
    return(
        <>
            <div className="hello"></div>
            <div className="hello"></div>
            <div className="hello"></div>
        </>
    )
}

// ! JSX 안에서 자바스크립트 값 사용

// JSX 내에서 중괄호 사용 방법 (2가지)

// 1. JSX 태그 내에서 직접적인 데이터 사용
// 2. '속성=' 기호 바로 다음

export default function JSX01(){
    const welcomeMsg= '환영합니다.';
    const greeting=(name: string)=> `안녕하세요 ${name}님`;
    const userInfo= {
        name: 'gwon',
        age: 20
    }

    const handleClick=(value: string)=>{
        console.log(`${value}`);
    }

    // CSS객체(값: 문자열 지정)
    const divStyle= {
        backgroundColor:'blue',
        color: 'white',
        padding: '10px'
    }

    return(
        <>
            <div>JSX01</div>
            <p style={{fontSize: '20px', color: 'coral'}}>안녕하세요</p>
            <input type="text" name="" id="" />
            <img src="" alt="" />
            <br />
            <hr />

            <div>{welcomeMsg}</div>
            <div>{greeting('hyuck')}</div>
            <div>
                이름: {userInfo.name}/
                나이: {userInfo.age}
            </div>
            <button onClick= {() => handleClick('oo')}>클릭해주세요</button>

            <div style={divStyle}>DIV 요소</div>
        </>

    )
}