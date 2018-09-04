import { square } from './math.js';

function component() {
  let element = document.createElement('h1');
  let num = 9;
  element.innerHTML = `${num} * ${num} = ${square(num)}`;

  return element;
}

document.body.appendChild(component());