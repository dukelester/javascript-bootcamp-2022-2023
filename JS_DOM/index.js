console.log('Welcome');

window.onload = () => {
  const htmlHeadingElement = document.createElement('h1');
  const htmlElementText = document.createTextNode('I am a header created by the dom');
  htmlHeadingElement.appendChild(htmlElementText);
  document.body.appendChild(htmlHeadingElement);
};

const story = document.body.querySelector('.story');
const setText = document.body.querySelector('#set-text');

setText.addEventListener('click', () => {
  story.textContent = 'Duke lester is learning the JS DOM';
});

const clearText = document.body.querySelector('#clear-text');
clearText.addEventListener('click', () => {
  story.textContent = '';
});

const parent = document.body.querySelector('.parent');
const addChild = document.body.querySelector('#add-child');

addChild.addEventListener('click', () => {
  if (parent.childNodes.length > 1) {
    return;
  }

  const child = document.body.createElement('div');
  child.classList.add('child');
  child.textContent = 'child';
  parent.appendChild(child);
});
const removeChild = document.body.querySelector('#remove-child');
removeChild.addEventListener('click', () => {
  const child = document.body.querySelector('.child');
  parent.removeChild(child);
});

const myDiv = document.getElementById('myContainer');
console.log(myDiv);

const myDivs = document.getElementsByTagName('p');
console.dir(myDivs);
const buttons = document.getElementsByTagName('button');
console.log(buttons);
const containers = document.getElementsByClassName('container');
console.dir(containers);

const inputs = document.querySelector('input[type="email"]');
console.log(inputs);
const myInputs = document.querySelectorAll('input');
console.log(myInputs);

function debuggingFunction() {
  const username = prompt('Enter your username  ');
  const email = prompt('Enter your email address  ');
  const password = prompt('Enter your password  ');

  if (username.indexOf(' ') !== -1) {
    const response = confirm('Please enter a valid username ... ');
    console.log(response);

    if (response) {
      const username = prompt('Enter a valid username...');
      console.log(username.trim());
    }
  }
  debugger;
  if (email.indexOf(' ') !== -1 && email.length < 10 && !email.includes('@')) {
    console.log('Invalid email address');
    const response = confirm('Please enter a valid email address ... ');
    console.log(response);
  }
  console.log(username);
}

debuggingFunction();
