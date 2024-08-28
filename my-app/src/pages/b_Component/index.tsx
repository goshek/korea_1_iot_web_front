import React from 'react'
// export 내보내기 가져오기
import {Img} from './Component01'
// 기본 내보내기 가져오기 (컴포넌트 명칭 수정- Comp01)
import {Img as Comp01} from './Component01'
export default function Index() {
  return (
    <div style={{backgroundColor: 'orange'}}>
      컴포넌트 학습 중(0826, index파일)
      <Img />
      2
      <Comp01 />
    </div>
  )
}
