/*
    ! 자바 스크립트 함수 구조
    매개변수 & 인자(Parameter, argument)

    # 1. 매개변수(parameter)
    : 함수를 정의하고 호출할 때 함수에 데이터를 전달하는 방식(변수) -선언
    : 함수를 사용 시에는 괄호 안에 인수(arguments)를 넣어서 전달 -호출
    
    # 2. 인자(argument)
    : 함수를 호출할 때 전달하는 실제 값(데이터)
    : 함수 호출마다 다른 데이터 전달이 가능
*/

// function add(a, b){ //소괄호 안의 a, b는 Parameter
//     console.log(`${a+b}`);
// }

// add(3,4); // 소괄호 안의 3,4는 인자값

/*
    ? 자바스크립트에서의 파라미터와 아규먼트 사용
    : 두가지의 수가 무조건 일치할 필요 없다.
*/

// log(); // undefined -인자를 전달하지 않은 파라미터 값은 undefinded로 지정
// log('안녕하세요!') //안녕하세요!
// log('안녕하세요', '만나서 반값습니다.') //안녕하세요
// 여러개의 파라미터 & 인자값 나열 시 콤마로 구분해서 나열 가능
// 지정된 수 이상의 파라미터 인수는 읽히지 않는다.

// function introduce(name, age){
//     console.log(`이름: ${name}, ${age}세 입니다. `);
// }
// introduce('gwon','22');//매개변수와 인자는 차례대로 입력

/*
    # 3. 반환값(return)
    : 입력 받아 처리한 결과를 반환
    : return 키워드를 사용하여 반환할 데이터를 지정 가능

    >> 함수 내에서 return 키워드 사용시 실행을 중지하고 return 을 반환
*/
var x=5;

function square(x){
    return x*x;
}
console.log(square(5));

const square02=x=>console.log(x*x);
square02(x);

const square03=function(x){
    console.log(x*x);
}
square03(x);