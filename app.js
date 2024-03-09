const h1 = document.querySelector('div.hello:first-child h1');
// const title2 = document.querySelector('#hello:first-child');

console.log(h1);

h1.innerText = 'Hello';

function handleHelloClick() {
  h1.classList.toggle('active');
}

// hello.onclick = handleHelloClick;
h1.addEventListener('click', handleHelloClick);
