// helloWorld.ts

console.log("Hello World");

/*
    ts 파일 명령어를 실행하기 위해서는 해당 파일을 js파일로 컴파일(번역)이 필요
    >> tsc 파일명.ts
    : 같은 파일명의 js 확장자 파일이 자동으로 생성

    >> 컴파일 된 js파일을 Node.js 런타임 환경에서 실행
    : node 파일명.js
*/
let num: number= 3; // type기능을 사용하는 typescript문법
console.log(num);

/*
    >> typescript 코드는 실시간으로 javascript로 컴파일되지 않는다.
    
    ! ts-node
    : ts코드를 실시간으로 js로 컴파일하고 실행(js파일 생성하지 않고)

    ? ts-node 설치
    : node_modules 폴더가 존재하는 프로젝트 최상단의 터미널에서 설치
    >> npm install -g ts-node
    >> npm install ts-node --save-dev
*/
console.log('ts-node로 ts파일 실행하기');
/*
    ts-node 파일명.ts

    # ts 파일 컴파일 & js파일 실행 명령어 정리
    1. node 파일명.js
    2. tsc 파일명.ts
    3. ts-node 파일명.ts
*/