const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, '0');
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
