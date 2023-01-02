// The document object gives access to the page content. We can change or
// create anything on the page using it.
// The window is the global browser object

console.log('welcome');
const html = document.documentElement;
console.log(html);
const { body } = document.body;
console.log(body);

console.log(document.body);
console.log(document.body.childNodes.length);
for (let k = 0; k < document.body.childNodes.length; k += 1) {
  console.log(document.body.childNodes[k]);
}

console.info(document.body.hasChildNodes());
const lastNode = document.body.lastChild;
const firstNode = document.body.firstChild;
console.log(`last node ${lastNode} and first node ${firstNode}`);
document.body.childNodes.forEach((node) => console.log(node));
// document.body.children.forEach((element) => console.log(element));
const div = document.body.firstElementChild;
const ul = document.body.children[1];
const ls = ul.children[1];
console.log('the div', div, 'the ul ', ul, 'lists', ls);
console.log(document.body.lastChild.nextSibling);
console.log(document.body.children[0].previousSibling);

// Get the info using the ID
const heading = document.getElementById('heading');
console.log(heading.innerHTML, heading.style.background = 'red');
const divs = document.getElementsByTagName('div');
console.log(divs);
const inputs = table.getElementsByTagName('input');
console.log(inputs);
inputs[2].value = 60;
// eslint-disable-next-line no-restricted-syntax
for (const input of inputs) {
  console.log('input', input.value, input.checked);
}

const elements = document.querySelectorAll('ul > li:last-child');
console.log(elements);
elements.forEach((element) => console.log(element.innerHTML));
console.log(document.body instanceof HTMLBodyElement);
console.dir(document.body);
console.log(document.body.tagName, document.body.nodeName);

const bodyContent = document.body.innerHTML;
console.log(bodyContent);
// document.body.innerHTML = '<h2> Welcome to the new body</h2>';
// console.log(document.body.textContent);
const blinking = document.getElementById('hidd');
console.log(blinking);
setInterval(() => { blinking.hidden = !blinking.hidden; }, 3000);
console.log(inputs[0].type, document.body.getAttribute('hidden'));
const myDiv = document.body.querySelector('.mydiv');
console.log(myDiv.getAttribute('name'));
myDiv.setAttribute('location', 'Juja');
myDiv.setAttribute('welcome');
myDiv.removeAttribute('welcome');
console.log(myDiv.getAttribute('location'), myDiv, myDiv.outerHTML);
