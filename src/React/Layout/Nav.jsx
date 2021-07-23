import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return <NavStyled>
        <NavLink to="/" exact >Welcome</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Homework">Homework</NavLink>
        
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
            &.active{
                color: goldenrod;
                background-color: #e7dac7;
            }


    }
`;