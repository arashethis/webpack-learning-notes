function component() {
  let element = document.createElement('h1');

  element.innerHTML = 'I was injected from moduleB';

  return element;
}

document.body.appendChild(component());