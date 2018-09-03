import _ from 'lodash';

function component() {
  let element = document.createElement('h1');

  element.innerHTML = `[1, 2, 3] is array? ${_.isArray([1, 2, 3])}`;

  return element;
}

document.body.appendChild(component());