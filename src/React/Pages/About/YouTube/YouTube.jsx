import React from 'react';
import styled from 'styled-components';

import ReactPlayer from 'react-player/youtube';

const YouTube = () => {

    return (
        <YouTubeStyled className='YouTube'>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </YouTubeStyled>
    );
}

export default YouTube;

const YouTubeStyled = styled.div`
    width: 100%;
`;