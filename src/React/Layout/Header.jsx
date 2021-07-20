import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
    <HeaderStyled>
        <h2>Spa Sanctury</h2>
        <h3>A SPA for every occasion</h3>



    </HeaderStyled>
    )

}

export default Header;

const HeaderStyled = styled.header`
    background-color: #b08cbb;
    padding: 20px;
    text-align: center;
    font-size: 100px;
    color: white;



`;