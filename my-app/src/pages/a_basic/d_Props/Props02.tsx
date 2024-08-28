import React from 'react'

// # 자식 컴포넌트 
// 화살표 함수를 사용한 컴포넌트 생성

type User={
    name: string;
    age: string;
    email: string;
}

/*
    props 데이터는 변수, 객체든 상관없이 무조건 {}객체 내에 작성
    : 객체의 데이터를 한 번에 받아오기 위해서는 본인의 {}객체 틀 외에 또 다른 {}객체
*/
type UserCardProps={user: User}
const UserCard= ({user}: UserCardProps)=>{
    console.log(user.age);
    const {name, age, email}= user;
    console.log(name);
    return(
        <div>
            <h2>{user.name}</h2>
        </div>
    )   ; 
};

// * 다른 컴포넌트를 감싸는 Wrapper컴포넌트
// : props 데이터로 다른 컴포넌트를 전달받음
type ChiledrenType={
    // ReactNode: React내의 HTML요소들 +사용자 정의 컴포넌트들의 타입
    children: React.ReactNode;
}

export const Wrapper= ({children}: ChiledrenType)=>{
    return(
        <div style={{border: '2px solid black', padding: '16px', backgroundColor: 'blueviolet'}}>
            {children}
        </div>
    )
}

// # 부모 컴포넌트
function Props02() {
    const userData={
        name: 'kk',
        age: '21',
        email: 'sdf'
    }
  return (
    <Wrapper>
        <UserCard user={userData}/>;
    </Wrapper>
  )
}
export default Props02;