import React, { Component } from 'react';
import styled from 'styled-components';

import LinkButton from './LinkButton';

const Title = styled.h1`
  color: ${props => props.special ? "red" : "palevioletred"};
  font-size: 1.5em;
  text-align: center;
`;

const FancyTitle = styled(Title)`
  text-decoration: underline overline dotted blue;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  width: 80%;
  margin: 20px auto;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
class BasicsDemo extends Component {

  handleClick = (event) => { console.log("Click",event) }

  render() {
    return (
        <Wrapper>
          <Title>Basics Demo</Title>
          <div>
            <Title special>Using Props</Title>
            <FancyTitle>Extended Style</FancyTitle>
            <FancyTitle special>Extended and using Props</FancyTitle>
          </div>
          <div>
            <Title special>Passing HTML Props</Title>
            <Input defaultValue="@probablyup" type="text" />
            <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />  
          </div>        
          <LinkButton to="/">Back to Menu</LinkButton> 
        </Wrapper>    
    );
  }
}

export default BasicsDemo;
