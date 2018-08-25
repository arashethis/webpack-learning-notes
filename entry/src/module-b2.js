function component() {
  let element = document.createElement('h1');

  element.innerHTML = 'I was injected from module-b2';

  return element;
}

document.body.appendChild(component());