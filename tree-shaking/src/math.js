function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

cube.a = 123;
cube.b = 456;

export {
  square,
  cube
}
