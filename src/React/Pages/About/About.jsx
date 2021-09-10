import React from 'react';
import styled from 'styled-components';
import YouTube from './YouTube/YouTube.jsx';

import Tabbed from '../Welcome/Tabbed/Tabbed.jsx';

const About = () => {

    return (
        <AboutStyled className='About'>
            <Tabbed />

        </AboutStyled>
    );
}

export default About;

const AboutStyled = styled.div`
    
    
`;