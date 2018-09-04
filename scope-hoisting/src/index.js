import str from './utils.js';

function component() {
  let element = document.createElement('h1');

  element.innerHTML = str;

  return element;
}

document.body.appendChild(component());