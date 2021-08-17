import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Layout/Header.jsx';
import Navigation from './Layout/Navigation/Navigation.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';

import styled from 'styled-components';

import {MediaQueryProvider} from 'common/mediaQueries/useMediaQuery.js';

const App = () => {
    return (
       <MediaQueryProvider>
        <BrowserRouter>
            <AppStyled>
                <Header />
                 <Navigation />
                 <Main />
                 <Footer />
             </AppStyled>
        </BrowserRouter>
        </MediaQueryProvider> 
    );
}

export default App;

const AppStyled = styled.div`
    .inset-container {
        border: solid 1px red;
        max-width: 1600px;

        margin-right: auto;
        margin-left : auto;

        //margin-top: 50px;


    }


`;