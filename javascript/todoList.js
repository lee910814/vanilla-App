const todoForm=document.querySelector(".todo-form");
const todoInput=document.querySelector(".todo-form input");
const todoList=document.querySelector(".todo-list");


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerHTML="삭제";
    span.innerHTML=newTodo;
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
button.addEventListener("click",deleteToDo);
