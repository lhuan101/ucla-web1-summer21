import React from 'react';
import styled from 'styled-components';
const Footer = () => {
    return <FooterStyled>
        SpaSanctury &copy; 2021
        </FooterStyled>

}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #abbdbc;
    color: white;
    padding: 10px;
    text-align: center;
`;