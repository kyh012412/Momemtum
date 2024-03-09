const hello = document.querySelector('div.hello:first-child h1');
// const title2 = document.querySelector('#hello:first-child');

console.log(hello);

hello.innerText = 'Hello';

function handleHelloClick() {
  hello.style.color = 'blue';
  console.log('title was clicked');
}

hello.addEventListener('click', handleHelloClick);

//onmouseenter
// hover처럼? 클릭이아니라 마우스가 요소의 범위내로 들어왔을때
function handleMouseEnter() {
  console.log('mouse is here');
  hello.innerText = 'Mouse is here!';
}

hello.addEventListener('mouseenter', handleMouseEnter);

const handleMouseLeave = () => {
  console.log('mouse is leaved');
  hello.innerText = 'Mouse is leaved!';
  hello.style.color = 'black';
};

hello.addEventListener('mouseleave', handleMouseLeave);
