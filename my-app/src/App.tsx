import React from 'react';
import Basic from './pages/a_basic'
import { Route, Routes } from 'react-router-dom';
import Hooks from './pages/b_hooks'

/*
  ! React 프로젝트 개발 실행 명령어
  : http://localhost:3000 환경에서 실행
*/

function App() {
  return (
    <div>
      <h1>React Project</h1>
      <Routes>
        {/*Route 태그: 단일 태그 사용 권장 */}
        {/*path속성: 해당 Routes내에서 사용하는 URL 경로 */}
        {/*element 속성: 해당 path속성과 일치할 경우 보여질 컴포넌트 */}
        <Route path='/basic' element={<Basic />} />
        <Route path='/hooks' element={<Hooks />} />
      </Routes>
      <hr />
      <Basic />
      <Hooks />
    </div>
  );
}

export default App;
