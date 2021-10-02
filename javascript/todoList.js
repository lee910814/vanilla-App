const todoForm=document.querySelector(".todo-form");
const todoInput=document.querySelector(".todo-form input");
const todoList=document.querySelector(".todo-list");


function deleteToDo(event){
    const li = event.target.parenElement;
    li.remove();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML=newTodo;
    const button = document.createElement("button");
    button.innerHTML="삭제";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
function todoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    paintToDo(newTodo);
}


todoForm.addEventListener("submit",todoSubmit);

