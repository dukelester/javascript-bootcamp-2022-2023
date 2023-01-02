console.log('Js events');
const button = document.querySelector('button');
const buttonClick = (event) => {
//   alert('Clicked');
  button.classList.add('button-submit');
  console.log(event.type, event.x, event.y, event.currentTarget, event.target, event);
  button.innerText = 'Submitted';
//   button.hidden = true;
};

button.addEventListener('click', buttonClick);
const successMessage = document.createElement('h6');
successMessage.innerText = 'Data was submitted successfully';
successMessage.classList.add('success');
const submitData = (e) => {
  e.preventDefault();
  const name = e.target.value;
  console.log(name);
  document.body.appendChild(successMessage);
};
button.addEventListener('submit', submitData);
