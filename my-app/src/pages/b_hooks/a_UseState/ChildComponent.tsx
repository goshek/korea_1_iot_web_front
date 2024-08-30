import React from 'react'

type UserType={
    username: string;
    height: number;
}

type ChildProps={
    userData: UserType | undefined
}

export default function ChildComponent({userData}: ChildProps) {
  return (
    <div>
        {userData && (
            <>
                <p>사용자 이름: {userData.username}</p>
                <p>사용자 키: {userData.height}</p>
            </>
        )}
    </div>
  )
}
