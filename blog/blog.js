const message = 'welcome';
console.log(message.toUpperCase());

const h1 = document.querySelector('h1');
console.log(h1.innerText);
h1.innerText = '';
const main = document.querySelector('main');
console.log(main.innerText, main.textContent);

const para = document.querySelector('p');
console.log(para.innerHTML);
const ol = document.querySelector('ol');
para.innerHTML = ol.innerHTML;
para.innerHTML += '<img src="https://static.timesofisrael.com/jewishstanddev/uploads/2022/09/03-2-DogDriving-AdobeStock_297978053-640x400.jpg"/>';

para.style.color = 'teal';

const paragraphs = document.querySelectorAll('p');
// eslint-disable-next-line no-param-reassign
paragraphs.forEach((paragraph) => { paragraph.style.color = 'teal'; });
const headings = document.querySelectorAll('h2');
// eslint-disable-next-line no-param-reassign
headings.forEach((heading) => {
  // eslint-disable-next-line no-param-reassign
  heading.style.color = 'darkgreen';
  // eslint-disable-next-line no-param-reassign
  heading.style.fontSize = '30px';
});

const getAllInputs = () => {
  const inputs = document.querySelectorAll('.form-control');
  console.log(inputs.length);
  inputs.forEach((input) => {
    // console.log(input.style);
    input.setAttribute('required', true);
    console.log(input.getAttribute('type'));
    console.log(input.hasAttribute('type'), input.hasAttribute('placeholder'));
    console.log(input.value, input.id);
    // input.setAttribute('placeholder', 'Enter your answer here');
    if (input.getAttribute('type') === 'email') {
      input.setAttribute('placeholder', 'Please enter a valid email address');
    }
    if (input.getAttribute('type') === 'text') {
      input.setAttribute('placeholder', 'Please enter your answer here');
    }
    if (input.getAttribute('name') === 'price') {
      input.setAttribute('placeholder', 'Please enter your price');
    }
    if (input.getAttribute('name') === 'phonenumber') {
      input.setAttribute('placeholder', 'Please enter your Phone number');
    }
    if (input.getAttribute('name') === 'location') {
      input.setAttribute('placeholder', 'Please enter your location');
    }
    if (input.getAttribute('name') === 'name') {
      input.setAttribute('placeholder', 'Please enter your full name');
    }
  });
};
getAllInputs();

const range = document.querySelector('input[type=range]');
range.value = 18;
const todo = document.querySelector('.todo');
todo.classList.add('completed');
document.getElementById('container');
