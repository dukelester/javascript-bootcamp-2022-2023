// Type of events
// click
// const h5 = document.querySelectorAll('h5');
// h5.addEventListener('click', () => alert('welcome'));
const changeColor = function () {
  const pricing = document.querySelector('h1');
  pricing.style.color = 'aqua';
};

const button = document.querySelector('button');
console.log(button);
button.addEventListener('click', () => {
  button.style.color = 'green';
});

// document.addEventListener('mousemove', (e) => {
//   console.log(e.clientX, e.clientY);
//   const R = Math.round((e.pageX * 255) / window.innerWidth);
//   const B = Math.round((e.pageY * 255) / window.innerHeight);
//   const color = `rgb(${R},0,${B})`;
//   console.log(color);
//   document.body.style.backgroundColor = color;
//   // rgb(0,0,0)
// });

const gettingStarted = document.querySelector('#getting-started');
console.log(gettingStarted);
gettingStarted.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.shiftKey && event.altKey) {
    gettingStarted.style.backgroundColor = 'yellow';
  }
});
// const para = document.querySelector('#para');
// para.addEventListener('oncopy', () => false);

button.addEventListener('click', (e) => {
  e.target.parentElement.remove();
});

const main = document.querySelector('main');
main.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'TH') {
    console.log('The TH was clicked', e.target);
    e.target.classList.toggle('select');
  } else if (e.target.tagName === 'TD') {
    e.target.classList.toggle('selected-td');
    const heart = document.createElement('span');
    heart.innerHTML = '&hearts;';
    e.target.append(heart);
  }
});
