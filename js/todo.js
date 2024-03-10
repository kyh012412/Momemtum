const toDoForm = document.querySelector('#todo-form');
const todoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'toDos';

let toDos = [];

function savedToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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
  console.log(span);
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
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // toDos = [...parsedToDos];
    toDos = parsedToDos;
    parsedToDos.forEach((todo) => {
      paintToDo(todo);
      toDos.push(todo);
    });
  }
};
