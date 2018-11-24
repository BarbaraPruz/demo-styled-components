import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import LinkButton from './LinkButton';



const DemoContainer = styled.div`
  padding: 4em;
  background: papayawhip;
  width: 80%;
  margin: 20px auto;
  color: black;
`;

const ThemedButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

const TP = styled.p`
  color: white;
`;


class ThemesDemo extends Component {

  // normally, theme details would be global. But for demonstrating the "themed div"
  // the theme definitions are kept in the Demo's state.
  THEMES = [
    { main: "mediumseagreen" },
    { main: "brown" },  
    { main: "red"}
  ];

  state = {
    themeId: 0
  }
  handleChangeTheme = () => { 
    let i = (this.state.themeId + 1) % (this.THEMES.length)
    this.setState({themeId: i});
  };

  render() {
    return (
        <DemoContainer>
          <h1>Themes Demo</h1>
          <p>This is Themes as directly supported by Styled Components.  For apps where Themes
          may be more complex (controlling more attributes, etc.), styled theming (https://github.com/styled-components/styled-theming)
          is worth a look.</p>
          <button onClick={this.handleChangeTheme}>Change Theme</button>
          <LinkButton to="/">Home</LinkButton>            
          <ThemeProvider theme={this.THEMES[this.state.themeId]}>
          <div>
          <h1>Themed Div</h1>
          <TP>watch me change colors</TP>  
          <ThemedButton>Themed</ThemedButton>
          </div>       
          </ThemeProvider>   
          <LinkButton to="/">Home</LinkButton>      
        </DemoContainer>    
    );
  }
}

export default ThemesDemo;
 
