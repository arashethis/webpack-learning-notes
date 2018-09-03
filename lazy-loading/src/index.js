var btn = document.createElement('button')
btn.innerHTML = 'Click Me!';

btn.onclick = function () {
  import(/* webpackChunkName: "lodash" */ 'lodash')
  .then(({ default: _ }) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    document.body.appendChild(element);
  })
}

document.body.appendChild(btn);