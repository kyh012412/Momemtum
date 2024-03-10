const toDoForm = document.querySelector('#todo-form');
const todoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const toDos = [];

function savedToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

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
  const span = li.querySelector('span');
  li.remove();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  toDos.push(newTodo);
  paintToDo(newTodo);
  savedToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

window.onload = () => {
  JSON.parse(localStorage.getItem('toDos')).forEach((todo) => {
    paintToDo(todo);
  });
};
