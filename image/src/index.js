import './style.css';
import smallImg from './images/small.png';

function component() {
  let element = document.createElement('h1');

  element.innerHTML = 'Hello webpack';

  return element;
}

document.body.appendChild(component());

let img = document.createElement('img');
img.src = smallImg;
document.body.appendChild(img);