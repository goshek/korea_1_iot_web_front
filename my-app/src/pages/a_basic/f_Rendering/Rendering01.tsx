import React from 'react'

/*
    !렌더링
    : 작성한 코드를 화면에 출력하는 기능
    >> 조건부 렌더링
*/
// # 조건부 컴포넌트
interface IItem{
    /*
        여행 짐싸기
        >> 짐 항목의 이름, 준비 완료 여부
    */
   name: string;
   isPacked: boolean; // 짐을 챙겼을 경우 (true) false
}
function Item({name, isPacked}: IItem){
    // ! if 조건문을 사용한 조건부 렌더링
    // if(isPacked){
    //     return(
    //         <li>{name}😆</li>
    //     )
    // }
    // else{
    //     return(
    //         <li>{name}</li>
    //     )
    // };
    // ! 삼항 연산자를 사용한 조건부 렌더링
    /* HTML 내에서 JS 문법 사용 시: {}내에 작성` */
    //return isPacked? <li>{name}😆</li>: <li>{name}</li>
    return(
        <li>
        {isPacked? name+'😊': name}
        </li>
    )
};

function Rendering01() {
  return (
    <div>
        <p>여행용 짐 목록</p>
        <ul style={{border: '2px solid black', listStyleType: 'square'}}>
            <Item name='과자' isPacked={true}/>
            <Item name='수건' isPacked={false}/>
        </ul>
    </div>
  )
}

export default Rendering01