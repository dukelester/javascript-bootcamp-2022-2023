// const h1 = document.querySelector('h1');
// Random colors using the RGB using a function
// eslint-disable-next-line func-names
const randomRGB = function () {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return `rgb(${R},${G},${B})`;
};

console.log(randomRGB());
// setInterval(() => { h1.style.color = randomRGB(); }, 1500);
const letters = document.querySelectorAll('.letter');
setInterval(() => {
  letters.forEach((letter) => {
    // eslint-disable-next-line no-param-reassign
    letter.style.color = randomRGB();
  });
}, 1000);
