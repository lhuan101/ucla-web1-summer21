import React from 'react';
import styled from 'styled-components';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';
import Homework from '../Homework/Homework.jsx';

const Main = () => {
    return <MainStyled>
        <h1>Main</h1>
        <SunAndMoon />
        <Homework />



        </MainStyled>

}

export default Main;

const MainStyled = styled.main`
    background-color: white;
    color: #505050;
    padding: 100px;
    text-align: left;
`;