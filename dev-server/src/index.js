import './style.css';
import printMe from './print.js';

function component() {
  let element = document.createElement('h1');
  let btn = document.createElement('button');

  element.innerHTML = 'Hello webpack';

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

// if (module.hot) {
//   module.hot.accept('./print.js', () => {
//     console.log('Accepting the updated printMe module!')
//     printMe()
//   })
// }