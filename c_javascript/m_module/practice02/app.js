import { TodoManager } from "./TodoManager.js";

/*
    app.js

    # 1. 프로젝트 기능 정의
    - TodoManager 모듈의 기능을 사용하여 할 일 앱을 구현
    - 이벤트 등록, 할 일 목록 없데이트등 로직을 담당

    ? TodoManager의 인스턴스를 생성
*/
const todoManager= new TodoManager();

// ? HTML 요소 가져오기
const form= document.querySelector('#new-todo-form');
const input= document.querySelector('#new-todo');
const todoList= document.querySelector('#todo-list');

form.addEventListener('submit',(e)=>{
    e.preventDefault() // 기본 제출 이벤트 방지

    //form 내부에서 데이터를 할 일 목록에 추가
    const text= input.value.trim();
    if(text !=''){
        todoManager.addTodo(text);
        input.value= '';
        updateTodoList();
    }
});

// 할 일 목록을 업데이트 하는 함수
function updateTodoList(){
    // 모든 할 일 가져오기
    const todos= todoManager.getTodos();

    // ul 태그 내부의 데이터(내용)을 삭제
    // HTML요소.innerHTML: 요소 내부의 전체 HTML 코드를 문자열로 가져오기
    todoList.innerHTML= '';
    todos.forEach(todo=>{
        //태그에 사용될 텍스트 그대로를 전달
        const li=document.createElement('li');
        li.textContent= todo.text;
        if(todo.completed){ //순회되는 요소의 완료 여부가 true라면
            li.classList.add('completed');
        }
        else{
            li.classList.remove('completed');
        }

        li.addEventListener('click', ()=>{
            todoManager.toggleCompleted(todo.id);
            updateTodoList();
        });
 
       
//삭제 버튼 생성
        const deleteButton= document.createElement('button');
        deleteButton.textContent= 'Delete';
        deleteButton.classList.add('delete-button');

        deleteButton.addEventListener('click',(e)=>{
            todoManager.removeTodo(todo.id);
            updateTodoList();
        });

        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

updateTodoList();