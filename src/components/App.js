import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import OptionsMenu from './options_menu';
import BasicsDemo from './basics_demo';
import ThemesDemo from './themes_demo';
//          {/* <Route exact path="/" component={App} /> */}
class App extends Component {
  render() {
    return (
      <Router>
         <React.Fragment>
          <Route exact path="/" render={OptionsMenu} />
          <Route exact path="/basics" component={BasicsDemo} />        
          <Route exact path="/themes" component={ThemesDemo} />            
        </React.Fragment>
      </Router>       
    );
  }
}

export default App;

