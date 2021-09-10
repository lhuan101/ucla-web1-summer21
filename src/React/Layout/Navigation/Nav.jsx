import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts -------------------------- */
import { mediaQueries } from 'common/mediaQueries/mediaQueries';

const Nav = () => {
    return <NavStyled>
        <NavLink to="/" exact >Home</NavLink>
        <NavLink to="/Services">Characters</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Homework">Homework</NavLink>
        
        </NavStyled>


}

export default Nav;

const NavStyled = styled.nav`
    color: grey;
    padding: 10px;
    text-align: center;
    font-family: Chalkduster, fantasy;

    a{
            display: block;
            background-color: white;
            color: darkgrey;
            padding: 10px;
            border-radius: 5px;
            margin: 5px 0px;

            text-decoration: none;
            text-transform: uppercase;

            &:hover {
                color: grey;
                background-color: white;
            }
            &.active{
                color: grey;
                background-color: white;
            }


    }

    @media ${mediaQueries.mdUp} {
        a {
            display: inline-block;
            margin: 0px 10px;
            font-size: 10px;
            border-radius: 5px;

        }
    }
`;