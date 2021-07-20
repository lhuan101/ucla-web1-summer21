import React from 'react';
import styled from 'styled-components';
const Nav = () => {
    return <NavStyled>
        <a href="/">Welcome</a>
        <a href="/Services">Services</a>
        <a href="/Contact">Contact</a>
        <a href="/Login">Login</a>
        <a href="/Homework">Homework</a>
        
        </NavStyled>


}

export default Nav;

const NavStyled = styled.nav`
    background-color: #dcd0dd;
    color: white;
    padding: 10px;
    text-align: center;

    a{
            display: inline-block;
            background-color: white;
            color: darkgrey;
            padding: 10px;
            border-radius: 5px;
            margin: 0px 10px;

            text-decoration: none;
            text-transform: uppercase;

            &:hover {
                color: grey;
                background-color: white;
            }


    }
`;