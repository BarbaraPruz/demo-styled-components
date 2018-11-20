import React from 'react';
import { Link } from 'react-router-dom';
//import { Button } from 'semantic-ui-react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex; 
    justify-content: center;   
`;
// const Column = styled.div`
//     flex: 1;
//     text-align: center;  
// `;
const Column = styled.div `
`;

const LinkButton = styled.link`
    display: 'block'; 
    height: '100%';
    background-color:blue;
    color: white;
`;
export default () => {
    return (
        <div>
            <h1>React Styled Components Demo</h1>
            <Container>
                <Link primary to="/basics">
                    <button>Basics</button>
                </Link>
                <Link primary to="/themes">
                    <button>Themes</button>
                </Link>                
            </Container>  
        </div>     
    )
}
