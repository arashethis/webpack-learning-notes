var btn = document.createElement('button')
btn.innerHTML = 'Click Me!';

// btn.onclick = function () {
//   import(/* webpackChunkName: "lodash" */ 'lodash')
//   .then(({ default: _ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
//     document.body.appendChild(element);
//   })
// }

btn.onclick = function () {
  import(/* webpackChunkName: "utils" */ './utils.js').then(({add}) => {
    var element = document.createElement('div');
    element.innerHTML = `10 + 20 = ${add(10, 20)}`;
    document.body.appendChild(element);
  })
}

document.body.appendChild(btn);