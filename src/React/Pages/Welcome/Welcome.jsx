import React from 'react';
import styled from 'styled-components';

import fun from './fun.gif'


const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
          <div className='test'><img src={fun} />
          </div>
          

        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`

    
    .test{
        
        height: 100vh;
        display: flex;
        justify-content: center;

    }
      
`;