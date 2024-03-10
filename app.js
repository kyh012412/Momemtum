const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

// 대문자로 표현한 상수는 String을 주로 저장함
const HIDDEN_CLASSNAME = 'hidden';

function onLoginBtnClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  console.log(username);
  localStorage.setItem('username', username);
  setUsername(username);
}

loginForm.addEventListener('submit', onLoginBtnClick);

window.onload = () => {
  const username = localStorage.getItem('username');
  if (username) {
    setUsername(username);
  }
};

const setUsername = (username) => {
  // greeting.innerHTML = 'Hello ' + username;
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
};
