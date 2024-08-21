// todo.ts
export const tmp='';
/*
    !타입스크립트 TODO리스트 구현
    # 요구사항(기능정리)
    -Todo 항목의 인터페이스 정의(ITodoItem)
    : id(number), task(string), completed(boolean)
    >> 각각의 할 일을 todos배열로 관리
    - 할 일 리스트를 관리할 수 있는 함수 구현
    1. addTodo: 새로운 할 일을 추가
    2. completedTodo: Todo 항목의 completed상태를 true로 변경
    3. deleteTodo: Todo항목을 삭제
    >> 각 함수는 Todo항목 배열을 입력받고 변경된 배열을 반환
*/

//? 할 일 객체의 인터페이스 명시

interface ITodoItem{
    id: number;
    task: string;
    completed: boolean;
}

function addTodo(todos:Array<ITodoItem>, task: string){
    const newTodo: ITodoItem={
        id: Math.max(0, ...todos.map(todo=> todo.id))+ 1,
        task: task,
        completed: false
    }

    const newTodos=[...todos, newTodo];
    return newTodos;
}
function completedTodo(todos:ITodoItem[], id:number):ITodoItem[]{
    const changeTodo= todos.map(todo=>{
        return todo.id=== id? {...todo, completed: !todo.completed}: todo
    });
    return changeTodo;
}
function deleteTodo(todos: ITodoItem[], id: number): ITodoItem[]{
    const changeTodo= todos.filter(todo=> todo.id !== id);
    return changeTodo;
};

//# 함수 사용 예시
let todos: ITodoItem[]= [];
todos= addTodo(todos, '집가서 잠자기');
console.log(todos);