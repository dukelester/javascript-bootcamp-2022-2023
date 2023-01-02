/**
 * Creating an element
To create DOM nodes, there are two methods:
document.createElement(tag)
Creates a new element with the given tag:
let div = document.createElement('div');
document.createTextNode(text)
Creates a new text node with the given text:
 */
const div = document.createElement('div');
div.className = 'alert alert-success';
div.innerHTML = '<strong>Congrats!</strong> Everything is loaded successfully';
document.body.appendChild(div);
const paragraph = document.createElement('p');
paragraph.className = 'alert para';
paragraph.innerHTML = `To make the div show up, we need to insert it somewhere into documentFor
instance, in document.body .
There’s a special method for that: document.body.appendChild(div) .
Here’s the full code: `;
document.body.appendChild(paragraph);
const myList = document.body.querySelector('#list');
const newLi = document.createElement('li');
newLi.innerHTML = '5';
myList.appendChild(newLi);
myList.insertBefore(newLi, myList.children[0]);
myList.replaceChild(newLi, myList.children[2]);

const orderedList = document.body.querySelector('#ol');
const newLi2 = document.createElement('li');
newLi2.innerHTML = 'Inserted here';
orderedList.append(newLi2, newLi);
orderedList.prepend(newLi);
orderedList.before(newLi2);
orderedList.after(newLi);
orderedList.append(newLi2, newLi);

paragraph.insertAdjacentHTML('afterbegin', '<h3>Welcome to HTML</h3>');
paragraph.insertAdjacentHTML('afterend', '<div><h3> At the end</h3></div>');
paragraph.insertAdjacentHTML('beforebegin', '<span>Scanner</span>');
paragraph.insertAdjacentHTML('beforeend', '<h4>My end is here</h4>');
paragraph.insertAdjacentText('afterbegin', 'Duke lester is a programmer...');
paragraph.insertAdjacentText('beforebegin', 'Duke lester is a programmer...');
paragraph.insertAdjacentText('afterend', 'Duke lester is a programmer...');
paragraph.insertAdjacentText('beforeend', 'Duke lester is a programmer...');

const para2 = paragraph.cloneNode(true);
const para3 = paragraph.cloneNode(true);
para2.innerHTML = 'Duke lester changed me!';
para3.insertAdjacentHTML('afterbegin', ' I am a cloned paragraph with all the text...');
document.body.appendChild(para2);
document.body.appendChild(para3);

setTimeout(() => div.remove(), 2000);
setTimeout(() => para2.remove(), 3000);

console.log(document.body.className);
document.body.classList.add('article');
document.body.classList.toggle('body');
// alert(document.body.classList.contains('body'));
document.body.style.width = '1024px';
const para = document.querySelector('.para');
para.style.backgroundColor = 'orangered';
para.style.display = 'none';

setTimeout(() => { para.style.display = ''; }, 3000);
const button = document.querySelector('.button');
button.style.cssText = `
    border-radius: 10px;
    font-size: 15px;
    color: black;
    padding: 10px 10px;
    margin: 10px 0;
    font-weight: 600;
    width: 200px;
    text-align: 'center';
`;
