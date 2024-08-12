/*
    ! 자바스크립트 비동기 프로그래밍 -async(비동기적인)/ await (기다리다)
    : async 함수 내에서 await 키워드를 사용
    >> 비동기 작업이 완료될 때까지 awiat 실행을 일시적으로 멈춤

    ? async 함수 구조
    : 함수 자체를 비동기 함수로 정의하는 키워드
    : async function 함수명(){}
    >> 항상 Promise 객체를 반환
    - async 함수 내부에서 awiat키워드를 사용
    >> Promise의 결과를 기다림

    # async awiat 비동기 예시
    : 사용자의 정보를 가져오는 함수
*/
async function fetchData(){
    // 비동기 작업을 수행
}
async function fetchUserData(){
    /*
        fetch('url')함수
        : 해당 url을 사용해서 서버와 통신을 하는 메소드
        >>Response 객체를 반환
    */
    let data= await fetch('https://api.example.com/data'); //시간이 걸리는 작업    
    let jsonDat= await data.json();

    console.log(jsonData);
}

/*
    : await 키워드는 async 내부에서만 사용 가능
    >> Promise가 완료될때까지 기다림

    # 비동기 작업과 예외 처리
    : 예외 처리 코드와 함께 사용 '권장'
*/
async function fetchCustomerData(){
    try{
        //? 실제 로직이 구현되는 블록
        //: 해당 블록에서 에서 발생시 즉시 catch 블록으로 이동
        let data= await fetch('url');
        if(!data.ok){
            throw new Error('네트워크 응답이 종료되었습니다.');
            // 에러 발생 후에는 해당 함수 실행이 종료
        }
        /*
            .json() 메소드
            : json형싱으로 파싱
            >> 응답 데이터를 js에서 사용할 수 있도록 객체를 반환
        */
        let jsonData= await data.json();
        console.log(jsonData);
    }catch(e){ //try 블록에서 에러 발생 시 해당 에러를 매개변수로 받아 처리
        console.log(e.message);
        //error.message 속성
        //: 에러 내의 설명이 출력
    }
    
}

fetchCustomerData();