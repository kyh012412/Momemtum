const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgImage = document.createElement('img');
document.body.appendChild(bgImage);

// bgImage.setAttribute('src', './img/' + chosenImage);
bgImage.src = `img/${chosenImage}`;
