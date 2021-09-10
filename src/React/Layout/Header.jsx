import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
    <HeaderStyled>
        <h1>ZZ Man X Green Tea</h1>



    </HeaderStyled>
    )

}

export default Header;

const HeaderStyled = styled.header`
    background-color: white;
    padding: 20px;
    text-align: left;
    font-size: 10px;
    color: black;

    h1{
        font-family: Helvetica;
        font-weight: 1;

    
    }



`;