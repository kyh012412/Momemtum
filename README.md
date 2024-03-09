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
