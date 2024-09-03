import React from 'react'
import { create } from 'zustand';

/*
    ! Zustand 상태 관리 프로그램(외부 라이브러리)
    : React Hooks를 기반
    >> 최소한의 API를 사용하영 상태를 쉽게 생성하고 접근

    ? Zustand의 장점
    1) 간결성
    : 최소한의 코드로 상태 관리
    2) 유연성
    : 여러 상태 조각을 하나의 저장소에서 결합


    ? Zustand 사용 방법
    1) 설치
    npm i zustand

    2) 사용법
    상태를 단일 저장소인 store에 저장
    +) 해당 저장소를 가져와서 (import) 컴포넌트에 자동으로 업데이트 전달

    # 1. Zustand 예제(폴더/ 파일 단위 분리X)
    * 1. store생성
    : 전역 상태가 담길 저장소
    >> 애플리케이션의 상태를 저장하는 곳
    >> create함수를 사용하여 생성(zustand 라이브러리에 포함)

    >> 애플리케이션의 상태와 상태를 업데이트 하는 함수들이 포함

    State의 타입 선언
    : 카운트 상태 저장
*/
interface CountState{
    count: number;
    increment: ()=> void;
    decrement: ()=> void;
}

// ? crete함수로 스토어 생성
// 스토어명: use+ data명+ Store

// const use데이터store= create<관리할데이터타입>();

// +) create함수는 set함수를 인자로 전달
//  : zustand 스토어의상태를 업데이트하는데 사용

// == 외부의 store공간 ==
export const useCountStore= create<CountState>(set=> ({
    // 상태변경을 하기 전 초기값 설정
    count: 0,
    increment: ()=> set(state=>({count: state.count+1})),
    decrement: ()=> set(state=> ({count: state.count -1}))
}));

// ==외부 컴포넌트==
function Component(){
    const {count, increment, decrement}= useCountStore();
    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    )
}

export default function Zustand01() {
  return (
    <div>
        <Component />
    </div>
  )
}
