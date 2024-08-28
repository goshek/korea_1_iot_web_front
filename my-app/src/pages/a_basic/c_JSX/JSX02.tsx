import React from 'react'

// # 기능 함수
function example01(){
}
function example02(){
}

export {example01, example02};

// # 컴포넌트 함수
function Example01(){};
function Example02(){};
export {Example01, Example02};
export default function JSX02() {
    /*
        픽사베이
        : 이미지 경로를 변수에 저장
    */
   //const imgUrl= 'https://cdn.pixabay.com/photo/2019/11/22/03/58/cat-4644008_1280.jpg';

   const cat={
    catUrl: 'https://cdn.pixabay.com/photo/',
    description: '2019/11/22/03/58/',
    imageId: 'cat-4644008_1280.jpg',
    name: '고양이의 고향은 고양',
    imageTheme: {
        width: '200px',
        height: '150px'
    },
    theme: {
        backgroundColor: 'black',
        color: 'brown'
    }
   }
  return (
    <>
        <div style={cat.theme}>
            <p>고양이의 고향은 고양</p>
            <img src={cat.catUrl+ cat.description + cat.imageId} alt={cat.name} width={cat.imageTheme.width} height={cat.imageTheme.height} />
        </div>
    </>
  )
}
