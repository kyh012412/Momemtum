const loginForm = document.querySelector('#login-form');
// loginForm은 htmlElement 이기 때문에 여기에서부터 찾을 수 있다.
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

loginButton.addEventListener('click', () => {
  const username = loginInput.value;

  // 유효성 검사는 유저를 믿지 말고 꼭 하는 것이 좋음
  if (username === '') {
    console.log('please write your name');
    return;
  } else if (username.length > 15) {
    console.log('Your name is too long.');
    return;
  }

  console.dir(loginInput);
  console.log('hello', username);
  // loginInput.value = '';
});

// loginInput.addEventListener('keypress', (e) => {
//   if (e.key != 'Enter') {
//     console.log('pressed key is not enter', e.key);
//     return;
//   }
//   console.log(e.key);
//   loginButton.click();
// });
