/*
    # 4. Math 내장 객체
    : 수학과 관련된 기본 연산의 객체
    속성: PI
*/
console.log(Math.PI);
/*
    메소드
    1) Math.random()
    : 0이상 1미만의 난수 생성
*/
console.log(Math.random()*10);

/*
    2) Math.floor()
    : 숫자를 가장 가까운 정수로 내림
*/
console.log(Math.floor(Math.random()*10)); //0부터 9까지의 정수

/*
    3) Math.sqrt() //square root
*/
console.log(Math.sqrt(16)); //4
console.log(Math.sqrt(255)); // 15.968...

/*
    # 5. Data() 객체
    : 자바스크립트에서 날짜와 시간을 관리하기 위해 사용되는 내장 객체
    현재 날짜와 시간을 반환
*/
let now= new Date();
console.log(now);
/*
    getDate(): 현재 '일'
    getDay(): 현재 '요일;
    getMonth(): 1월이 0부터 시작 ~12월을 11로 표기
*/
console.log(now.getMonth()+1);
console.log(now.getDay());
/*
    getHours()
    getMinuates()
    getSecond()
*/
console.log(now.getMinutes());