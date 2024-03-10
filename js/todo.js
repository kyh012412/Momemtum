const toDoForm = document.querySelector('#todo-form');
const todoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
let todoJson = [];

function paintToDo(newTodo) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.innerText = newTodo;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.append(li);
}

function deleteToDo(e) {
  const li = e.currentTarget.parentElement;
  console.dir(li);
  li.remove();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoJson = [...todoJson, newTodo];
  todoInput.value = '';
  paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
