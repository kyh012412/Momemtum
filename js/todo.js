const toDoForm = document.querySelector('#todo-form');
const todoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
}

toDoForm.addEventListener('submit', handleToDoSubmit);
