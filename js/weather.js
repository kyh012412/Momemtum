function onGeoOK(pos) {
  console.log(pos);
  const API_KEY = 'af353277809e5311f5f12c0a8fa5030e';
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  console.log('You live in ', lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
    });
}

function onGeoFail() {
  alert("Can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoFail);
