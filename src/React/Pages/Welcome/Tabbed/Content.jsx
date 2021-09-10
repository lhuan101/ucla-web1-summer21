import React from 'react';
import styled from 'styled-components';

import ReactPlayer from 'react-player/youtube';


const Content = ({chosenTab}) => {

    return (
        <ContentStyled className='Content'>
            <div className="video">
                <ReactPlayer url={chosenTab.video} />
            </div>

        </ContentStyled>

    );
}

export default Content;

const ContentStyled = styled.div`
    padding: 20px;
    min-height: 200px;
    

    display: flex;

    .image{
            flex: 1;
            img {
                max-width: 100%;
            }

    }
    
    .info{
        flex: 4;
        padding: 0px 20px;
    }

    .video{
        width: 100%;
        margin: auto;
        display: block;
    }
`;