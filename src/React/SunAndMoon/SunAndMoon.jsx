import { BackgroundColor, yellow } from 'chalk';
import React, { useState } from 'react';
import styled from 'styled-components';
const SunAndMoon = () => {


    const [imageState, imageStateUpdate] = useState('/img/sun.png');
    const handleOnMouseOver = () => {
        console.log( 'Mousing Over');
        imageStateUpdate('/img/moon.png')
    }
    const handleOnMouseOut = () => {
        console.log( 'Mousing Out');
        imageStateUpdate('/img/sun.png')
    }
    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon Changes</h2>
            <img src= { imageState }
            alt='Sun'
            onMouseOver={ handleOnMouseOver   }
            onMouseOut={ handleOnMouseOut} />
        </SunAndMoonStyled>    

    )

}

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
    background-color: #aaaa25;

    text-align: center;
    padding-bottom:50 px;
    

    h2 {
        background-color: #ac4d5d;
        color: white;
    }
`;