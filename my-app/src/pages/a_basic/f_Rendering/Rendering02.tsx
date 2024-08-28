import React from 'react'
import index from '..';

function Rendering02() {
    const people=['a', 'b', 'c', 'd', 'e'];
    const peopleDescription=[
        {
            id:0,
            name: 'a',
            job: 'student'
        },
        {
            id:1,
            name: 'b',
            job: 'developer'
        },
        {
            id:2,
            name: 'c',
            job: 'business'
        },
        {
            id:3,
            name: 'd',
            job: 'professor'
        },
        {
            id:4,
            name: 'e',
            job: 'business'
        }
    ];
    /*
        map 콜백함수를 사용한 배열 렌더링
        >> 요소 개수의 변화X
         :전체 내용을 렌더링
    */
   const listItems= people.map((person, index)=>{
    // 배열을 렌더링하여 HTML요소로 반환할 경우: 각 요소를 구분할 수 있는 구분값을 key속성에 전달
    return <li key={index}>{person}</li>
   });

   /*
       filter 콜백함수를 사용한 배열 렌더링
   */
  const businessItems= peopleDescription.filter(person=>
    person.job === 'business' 
  )
  const businessItemsRender= businessItems.map(person=>
    <li>{person.id}{person.name}</li>
  )
  
  const businessItemsRender2= peopleDescription.filter(person=>
    person.job === 'business' 
  ).map(person=>
    <li>{person.id}{person.name}</li>);
  
  return (
    <div>
        <h2>Map을 사용한 전체 리스트 렌더링</h2>
        <ul>{listItems}</ul>
        <h2>Filter을 사용</h2>
        <ul>{businessItemsRender2}</ul>
    </div>
  )
}

export default Rendering02