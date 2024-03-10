# Momentum clone 코딩

## 필요한 eventListener을 찾는 법

###

[h1 html element mdn](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement)를 검색

또는

###

```js
let element = documnet.querySelector('.condition');

console.dir(element);
// 출력된 결과로 가서 on~으로 시작하는것들을 확인
```

## window

[window문서](https://developer.mozilla.org/en-US/docs/Web/API/window)

```js
hello.addEventListener('click', handleHelloClick);
```

```js
hello.onclick = handleHelloClick;
```

위 두개는 기능상 같은 동작을 할 수 있다.

addEventListener로 추가한것은 추후에 희망시에
removeEventListener로 제거 할 수 있다.

그 외에 많은 것들을 부착할수 있다.
window 기준 ex) copy online offline resize 등..

## className

className은 getter이면서 동시에 setter이다.

## classList

[classList 참조문서](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)

```js
if (h1.classList.contains(clickedClass)) {
  h1.classList.remove(clickedClass);
} else {
  h1.classList.add(clickedClass);
}
```

는 다음 한 줄과 같은 기능을 한다.

```js
h1.classList.toggle(clickedClass);
```

## form 속성

```html
<form class="" id="login-form">
  <input required maxlength="15" type="text" placeholder="What is your name?" />
  <button>Log In</button>
</form>
```

다음처럼 어느정도 유효성검사를 할 수 있다.
ex) required, maxlength

하지만 개발자 도구에서 값이 수정이 가능하다.

#### 4.2

```js
// form의 submit이 발생하는 조건은 엔터를 누르거나 button이 눌릴때 발생함
loginForm.addEventListener('submit', onLoginBtnClick);

// 여기에서 콜백함수에는 ()를 붙여주지 않는다. 그것은 이곳에서 죽시 실행한다는 뜻이기 때문이다.
// loginForm.addEventListener('submit', onLoginBtnClick());

// 정상적으로 작동은 하지만 browser가 form 이 submit 될때 refresh하도록 되어 있음
```

#### 4.4

```js
greeting.innerHTML = 'Hello ' + username;
greeting.innerHTML = `Hello +${username}`;
```

위 두 가지 방법은 똑같은 결과를 낸다.

#### 4.5

##### localStorage

```js
localStorage; // 이미 있음
```

[localStroage 참조문서](https://developer.mozilla.org/en-US/docs/Web/API/window/localStorage)

- setItem()

```js
localStorage.setItem('key', 'value');
// 이 방법으로 같은 키값에 덮어쓰기하면 키에 해당하는 value를 덮어쓰기를 할 수 있다.
```

- getItem()

```js
const value = localStorage.getItem('key');
```

- removeItem()

```js
const key = 'something that already set';
localStorage.removeItem(key);
```

정의되있지 않은 키로 set를 하려고하면 null이 나온다.

#### 5.0 setInterval

setInterval 은 두 개의 매개변수를 받는다.
실행하고자 하는 함수 , 실행할 간격

##### setTimeout

일정시간이 지난 뒤 실행하고 싶은 함수
두 개의 매개변수를 받으며
첫 번째 매개변수로는 실행할 함수
두 번째 매개변수로는 대기할 시간( ms)
