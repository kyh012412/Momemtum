const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

// 대문자로 표현한 상수는 String을 주로 저장함
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

window.onload = () => {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername) {
    paintGreetings(savedUsername);
  } else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginBtnClick);
  }
};

function onLoginBtnClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

const paintGreetings = (username) => {
  // greeting.innerHTML = 'Hello ' + username;
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};
