function onGeoOK(pos) {
  console.log(pos);
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  console.log('You live in ', lat, lng);
}

function onGeoFail() {
  alert("Can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoFail);
