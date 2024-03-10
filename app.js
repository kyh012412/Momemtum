const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');

function onLoginBtnClick(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(event);
  console.log(username);
}

// form의 submit이 발생하는 조건은 엔터를 누르거나 button이 눌릴때 발생함
loginForm.addEventListener('submit', onLoginBtnClick);

// 여기에서 콜백함수에는 ()를 붙여주지 않는다. 그것은 이곳에서 죽시 실행한다는 뜻이기 때문이다.
// loginForm.addEventListener('submit', onLoginBtnClick());

// 정상적으로 작동은 하지만 browser가 form 이 submit 될때 refresh하도록 되어 있음

//모든 EventListener function의 첫번째 argument는 항상 방금일어난 정보를 지닌다.
