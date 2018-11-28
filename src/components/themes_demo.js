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

  /* Color the border and text with theme.btn */
  color: ${props => props.theme.fore_primary};
  background-color: ${props => props.theme.back_secondary}
  border: 2px solid ${props => props.theme.fore_primary};
`;

const ThemedDiv = styled.div`
  color: ${props => props.theme.fore_primary};
  background-color: ${props => props.theme.back_primary};
`;
const TP = styled.p`
  color: white;
`;


class ThemesDemo extends Component {

  // normally, theme details would be global. But for demonstrating the "themed div"
  // the theme definitions are kept in the Demo's state.
  THEMES = [
    { back_primary: "mediumseagreen", back_secondary:"white", fore_primary: "black" },
    { back_primary: "blue", back_secondary:"white", fore_primary: "orange" },  
    { back_primary: "red", back_secondary:"white", fore_primary: "blue"}
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
            <ThemedDiv>
              <h1>Themed Div</h1>
              <TP>watch me change colors</TP>  
              <ThemedButton>Themed</ThemedButton>
            </ThemedDiv>       
          </ThemeProvider>    
        </DemoContainer>    
    );
  }
}

export default ThemesDemo;
 
