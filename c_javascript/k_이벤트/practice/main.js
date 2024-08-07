/*
    main.js

    ! 간단한 todo 리스트 만들기

    - input 태그에 할 일을 입력
    - 추가 버튼 클릭으로 할 일을 추가
    - 할 일은 ul태그 내에 li 태그로 저장
*/

let todoInput= document.querySelector('#todo-input');
let addButton= document.querySelector('#add-button');
let todoList= document.querySelector('#todo-list');
addButton.addEventListener('click',function(){
    // input 태그에 입력 값이 있는 경우
    if(todoInput.value!== ''){
        // 동적으로 li 태그 생성
        let newItem= document.createElement('li');
        newItem.textContent= todoInput.value;
        // HTML요소.classList.add('클래스명')
        //: 해당 요소의 class 속성으로 클래스명을 추가
        newItem.classList.add('todo-item');
        //생성된 li태그를 ul태그 내에 삽입
        //부모요소.appendChild(자식요소)
        todoList.appendChild(newItem);
        //? input등과 같이 상호작용 된 데이터를 사용하고나면
        //? , 해당 데이터를 초기화
        todoInput.value='';
    }
    // 추가 버튼 클릭 시 동적으로 li태그 생성
    
});