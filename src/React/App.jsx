import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Layout/Navigation/Navigation.jsx';
import Main from './Layout/Main.jsx';

import styled from 'styled-components';

import {MediaQueryProvider} from 'common/mediaQueries/useMediaQuery.js';

const App = () => {
    return (
       <MediaQueryProvider>
        <BrowserRouter>
            <AppStyled>
                
                 <Navigation />
                 <Main />
                 
             </AppStyled>
        </BrowserRouter>
        </MediaQueryProvider> 
    );
}

export default App;

const AppStyled = styled.div`
   
    //background-image: url('https://m.media-amazon.com/images/I/51qgMyaXioL._AC_SX466_.jpg');
    //background-repeat: no-repeat;
    //background-attachment: fixed;
    //background-size: cover;

`;