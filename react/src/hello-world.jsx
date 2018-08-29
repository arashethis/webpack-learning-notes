import React, { Component } from 'react';

class HelloWorld extends Component {

  componentDidMount() {
    let x = "hello, react";
    console.log(x);
  }

  render () {
    return <h1>Hello, Webpack!</h1>
  }
}

export default HelloWorld;
