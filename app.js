const h1 = document.querySelector('div.hello:first-child h1');
// const title2 = document.querySelector('#hello:first-child');

console.log(h1);

h1.innerText = 'Hello';

function handleHelloClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor != 'blue') {
    newColor = 'blue';
  } else {
    newColor = 'tomato';
  }
  h1.style.color = newColor;
}

// hello.onclick = handleHelloClick;
h1.addEventListener('click', handleHelloClick);

/* 3.5
  //onmouseenter
  // hover처럼? 클릭이아니라 마우스가 요소의 범위내로 들어왔을때
  function handleMouseEnter() {
    console.log('mouse is here');
    h1.innerText = 'Mouse is here!';
  }

  h1.addEventListener('mouseenter', handleMouseEnter);

  const handleMouseLeave = () => {
    console.log('mouse is leaved');
    h1.innerText = 'Mouse is leaved!';
    h1.style.color = 'black';
  };

  h1.addEventListener('mouseleave', handleMouseLeave);

  function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
  }

  // window내에서 복사가 사용됐을때 작동함
  function handleWindowCopy() {
    alert('copier');
  }

  window.addEventListener('resize', handleWindowResize);

  // window내에서 복사가 사용됐을때 작동함
  window.addEventListener('copy', handleWindowCopy);

  function handleWindowOffline() {
    alert('SOS no WIFI');
  }

  function handleWindowOnline() {
    alert('all good!');
  }

  window.addEventListener('offline', handleWindowOffline);
  window.addEventListener('online', handleWindowOnline);
*/
