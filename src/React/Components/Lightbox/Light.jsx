import React from 'react';
import styled from 'styled-components';


const Light = () => {

    return (
        <LightStyled className='Light'>
            Light 
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`

    position: absolute;

    background-color: #ffff;

    width: 200px;
    height: 300px;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    
`;