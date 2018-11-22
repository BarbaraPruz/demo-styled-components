import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LinkButton from './LinkButton';

const ButtonsContainer = styled.div`
    display: flex; 
    justify-content: center;   
`;

const Title = styled.h1`
    text-align: center;
`;

export default () => {
    return (
        <div>
            <Title>React Styled Components Demo</Title>
            <ButtonsContainer>
                <LinkButton to="/basics">Basics</LinkButton>
                <LinkButton to="/themes">Themes</LinkButton>                                           
            </ButtonsContainer>  
        </div>     
    )
}
