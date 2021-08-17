import React from 'react';
import styled from 'styled-components';

import { FontAwesoneIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
} from '@fortawesome/free-solid-svg-icons';
<FontAwesoneIcon icon={ faBars } />
const Hamburger = ({onClick}) => {

    return (
        <HamburgerStyled className='Hamburger' onClick={ onClick }>
            <FontAwesoneIcon icon={ faBars } />
        </HamburgerStyled>
    );
}

export default Hamburger;

const HamburgerStyled = styled.div`
    font-size: 30px;
    color: coral;
    cursor: pointer;

    
`;