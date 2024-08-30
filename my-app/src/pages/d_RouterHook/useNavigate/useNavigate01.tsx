import React from 'react'
import { useNavigate } from 'react-router-dom';

/*
    !useNavigate()
    : React Router에서 제공하는 Hook
    >> 사용자를 다른 페이지로 이동시킬때 사용

    ? Link 컴포넌트와의 차이
    >> 이벤트 핸들러나 비동기 작업 내에서의 특정 경로 이동이 가능
*/

export default function useNavigate01() {
  /*
    # useNavigate() 사용방법
    const navigate= useNavigate();
    >> '네비게이트'라는 이름으로 호출 
    >> 원하는 경로를 인수로 전달하여 이동
  */
const navigate= useNavigate();

//? useNavigate 훅의 옵션
// -state옵션
//: 네이게이션(경로)과 함께 상태 전달이 가능
/// >> 해당 상태는 useLocation을 통해 접근 가능
  const goToParentPage=()=>{
    console.log('버튼이 클릭됨');
    navigate('/parent', {state:{userId:12345}});
  }

  const goToHomePage=()=>{
    console.log('버튼이 클릭됨');
    navigate('/');
  }

  const goToPrevPage=()=>{
    console.log('버튼이 클릭됨');
    navigate(-1);
  }
    return (
    <div>
        <p>UseNavigate01 페이지입니다.</p>
        <button onClick={goToParentPage}>parent 페이지로이동합니다.</button>
        <button onClick={goToHomePage}>HOME 페이지로이동합니다.</button>
        <button onClick={goToPrevPage}>이전 페이지로이동합니다.</button>
    </div>
  )
}
