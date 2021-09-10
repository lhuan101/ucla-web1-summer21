import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Welcome from "../Pages/Welcome/Welcome.jsx";
import Login from "../Pages/Login/Login.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Services from "../Pages/Services/Services.jsx";
import Homework from '../Homework/Homework.jsx';
import About from 'React/Pages/About/About.jsx';

const Main = () => {
    return <MainStyled>
        <Switch>
            <Route path='/About'>
                <About />
             </Route>
             <Route path='/contact'>
                <Contact />
            </Route>
            <Route path='/services'>
                <Services />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/Homework'>
                <Homework />
            </Route>
            <Route path='/' exact>
                <Welcome />
            </Route>
        </Switch>
    



        </MainStyled>
    
}

export default Main;

const MainStyled = styled.main`
    
    
    
    
    color: #505050;
    padding: 100px;
    text-align: left;

    /*div {
         border: solid 2px orange;
         padding: 20px;
    }*/
`;