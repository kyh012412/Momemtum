const hello = document.querySelector('div.hello:first-child h1');
// const title2 = document.querySelector('#hello:first-child');

console.log(hello);

hello.innerText = 'Hello';

function handleHelloClick() {
  hello.style.color = 'blue';
  console.log('title was clicked');
}

hello.addEventListener('click', handleHelloClick);
