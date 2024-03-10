const toDoForm = document.querySelector('#todo-form');
const todoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'toDos';

let toDos = [];

function savedToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodoObj) {
  const li = document.createElement('li');
  li.id = newTodoObj.id;

  const span = document.createElement('span');
  span.innerText = newTodoObj.text;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.append(li);
}

function deleteToDo(e) {
  const li = e.currentTarget.parentElement;
  toDos.filter((todoObject) => todoObject.id !== li.id);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  savedToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

window.onload = () => {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // toDos = [...parsedToDos];
    toDos = parsedToDos;
    parsedToDos.forEach((todoObject) => {
      paintToDo(todoObject);
    });
  }
};

console.dir(window);

window.onbeforeunload = () => {
  localStorage.setItem(TODOS_KEY, toDos);
};
