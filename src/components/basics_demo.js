import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BasicsDemo extends Component {
  render() {
    return (
        <div>
          <h1>Basics DemoX</h1>
          <Link to="/">Back to Menu</Link> 
        </div>    
    );
  }
}

export default BasicsDemo;
