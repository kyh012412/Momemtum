const loginForm = document.querySelector('#login-form');
// loginForm은 htmlElement 이기 때문에 여기에서부터 찾을 수 있다.
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

loginButton.addEventListener('click', () => {
  console.dir(loginInput);
  console.log('hello', loginInput.value);
  loginInput.value = '';
});

// loginInput.addEventListener('keypress', (e) => {
//   if (e.key != 'Enter') {
//     console.log('pressed key is not enter', e.key);
//     return;
//   }
//   console.log(e.key);
//   loginButton.click();
// });
