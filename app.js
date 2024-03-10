const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');

const link = document.querySelector('a');

function onLoginBtnClick(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(event);
  console.log(username);
}

loginForm.addEventListener('submit', onLoginBtnClick);

function handleLinkClick(event) {
  console.dir(event);
  // alert('clicked'); //alert를 사용하면 모든 js를 막음
  event.preventDefault();
}

link.addEventListener('click', handleLinkClick);
// 뒤에 함수에 javascript가 필요한 정보를 자동으로 넣어준다.(ex event)
