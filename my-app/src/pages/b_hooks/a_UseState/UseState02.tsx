import React, { useState } from "react";

/*
    ! useState
    : 컴포넌트 내에서 데이터에 대한 상태 관리

    - 리액트의 이벤트 핸들러와 함께 사용
    >> UI에서 발생하는 이벤트에 반응하여 상태를 변화


    ! 여러 개의 입력 관리
    >> 스프레드 연산자, 비구조화 할당
*/
const fruits = ["사과", "바나나", "망고"];
const fruits2 = [...fruits];

const person = {
  name: "gwon",
  age: 20,
};

const person1 = {
  name: "pp",
  age: 19,
  like: "bear",
};
// ...(스프레드 연산자)에서 속성이 없었으면 추가, 있었다면 업데이트
const person2 = { ...person, name: "hyun", hobby: "soccer" };
const person3 = { ...person, ...person1 }; //name, age, like 3개의 속성

// ! 리액트 상태에서 객체를 변경할 때
const book = {
  title: "안녕",
  author: "sun",
};
book.title = "hello"; // 리액트에서 상태 변화 감지X
// >> setBook({...book, title: 'hello'});
// : 상태 설정 함수를 사용, 새로운 참조값에 데이터를 담아 전달

interface ILogin{
    id: string;
    password: string;
}

export default function UseState02() {
  // # 훅 정의
  const [inputValue, setInputValue] = useState<string>("");

//   const [id, setId] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
const[login, setLogin]= useState({
    id:'',
    password: ''
});
const {id, password}= login;

  /*
        # 이벤트 핸들러 정의
        : Input창에 Change(변화)가 일어나면 처리할 (handle) logic
    */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let inputText = e.target.value;
    console.log(inputText);
    setInputValue(inputText);
  };

  const handleResetClick = () => {
    setInputValue("");
  };

  // # 여러 개의 입력값을 관리 하는 핸들러
  const handleLoginChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
    /*
        매개변수로 전달받는 e 이벤트 객체의 target(요소)안에는 요소에 명시되어있는 속성의 값에 접근 가능
        아이디와 비밀번호의 input창을 변경할 수 있는 핸들러
    */
   //e.target
   //{...login, 이벤트가 발생한 요소명: 이벤트가 발생한 요소의 value값}
   const {name, value}= e.target;
   setLogin({
    // name 키를 가진 값을 value로 설정(해당 변경된 필드의 값만을 업데이트)
    ...login, [name]: value
   })
  };

  const handleResetLogin=()=>{
    setLogin({
        id: '',
        password: ''
    })
  }

  const hanleLoginSubmit=(e:React.FormEvent)=>{
    e.preventDefault(); //폼의 기본 제출 동작 방지
    console.log('폼 데이터가 제출되었습니다.', login);
    //데이터에 대한 활용 후에는 데이터에 대한 초기화가 필수
    setLogin({
        id: '',
        password: ''
    });
  }

  return (
    <div>
      <p style={{ color: "blue" }}>Use with useState Event Handeler</p>

      <input type="text" value={inputValue} onChange={handleInputChange} />
      {/* 
        >> onChangeEvent
         : 사용자가 요소에 변화를 일으킬 때마다 발생하는 이벤트 
        EX) input, select, textarea등의 요소에 적용
        <select name="" id="" onChange={handleInputChange}>
            <option value="1">1</option>
            <option value="2">2</option>
        </select> */}
      <button onClick={handleResetClick}>초기화 버튼</button>
      <p>Input Value: {inputValue}</p>
      <hr />
      <h5>여러 개의 입력 상태 관리</h5>
      <form onSubmit={hanleLoginSubmit}>
        <input type="text" name="id" placeholder="아이디" value={id} onChange={handleLoginChange}/>
        <p>아이디: {id}</p>
        <input type="text" name="password" placeholder="비밀번호" value={password} onChange={handleLoginChange}/>
        <p>비밀번호: {password}</p>

        <button type="button" onClick={handleResetLogin}>초기화</button>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
