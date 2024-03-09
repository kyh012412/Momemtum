const h1 = document.querySelector('div.hello:first-child h1');
// const title2 = document.querySelector('#hello:first-child');

console.log(h1);

h1.innerText = 'Hello';

function handleHelloClick() {
  const clickedClass = 'active';
  // 이렇게 사용할 경우 오타가 났을경우 에러로 식별할 수 있는 가능한 수준까지 피드백을 얻을 수 있다.
  if (h1.className === clickedClass) {
    h1.className = '';
  } else {
    h1.className = clickedClass;
  } // 현재 element에 달린 claasName까지 사라지는 문제가 있음 다음시간에 수정

  // h1.classList.toggle(clickedClass);
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
