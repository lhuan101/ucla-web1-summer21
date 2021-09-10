import React from 'react';
import styled from 'styled-components';

const CloseButton = ({onClick}) => {

    return (
        <CloseButtonStyled className='CloseButton' onClick={ onClick }>
            X 
        </CloseButtonStyled>
    );
}

export default CloseButton;

const CloseButtonStyled = styled.div`
    display: block;
    width: 25px;
    border-radius: 75%;
    text-align: center;
    color: white;
    background-color: transparent;
    cursor: pointer;
`;