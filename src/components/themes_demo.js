import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ThemesDemo extends Component {
  render() {
    return (
        <div>
          <h1>Themes Demo</h1>
            <Link to="/">Home</Link>
        </div>    
    );
  }
}

export default ThemesDemo;
