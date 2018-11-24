import React from 'react';
import styled from 'styled-components';

import LinkButton from './LinkButton';

const ButtonsContainer = styled.div`
    display: flex; 
    justify-content: center;   
`;

const Title = styled.h1`
    text-align: center;
    font-size: 3em;
`;

const StyledLinkButton = styled(LinkButton)`
    background-color: #DB7093;
    color: #fff; 

    display: inline-block;
    margin: 10px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    font-size: 2em;
}   
`;  

export default () => {
    return (
        <div>
            <Title>React Styled Components Demo</Title>
            <ButtonsContainer>
                <StyledLinkButton to="/basics">Basics</StyledLinkButton>
                <StyledLinkButton to="/themes">Themes</StyledLinkButton>                                           
            </ButtonsContainer>  
        </div>     
    )
}
