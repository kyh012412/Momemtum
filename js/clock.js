const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const Hours = setLong(date.getHours());
  const Minutes = setLong(date.getMinutes());
  const Seconds = setLong(date.getSeconds());
  clock.innerHTML = `${Hours}:${Minutes}:${Seconds}`;
}

getClock();

setInterval(getClock, 1000);

function setLong(num) {
  return num < 10 ? '0' + num : num;
}

// setTimeout(getClock, 5000);
