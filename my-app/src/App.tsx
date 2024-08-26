import React from 'react';
import ReactExample from './pages/a_basic/a_React/ReactExample'

/*
  ! React 프로젝트 개발 실행 명령어
  : http://localhost:3000 환경에서 실행
*/

function App() {
  return (
    // jsx(tsx)에서는 return문을 사용하여 HTML 영역을 반환
    <div>
      <h1>React Project</h1>
      <ReactExample />
    </div>
  );
}

export default App;
