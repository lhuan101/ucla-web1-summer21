import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Scripts -------------------------- */
import { mediaQueries } from 'common/mediaQueries/mediaQueries';

import Hamburger from './Hamburger.jsx';
import Nav from './Nav.jsx';
import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

const Navigation = () => {

    const [showMenu, showMenuUpdate] = useState(false);
    const { media } = useMediaQuery();

    //console.log('media', media);

    useEffect(() => {
        showMenuUpdate(media.mdUp);
    }, [media.mdUp]);

    const handleToggle = () => {

        showMenuUpdate(!showMenu);
    }
    return (
        <NavigationStyled className='Navigation'>
            { !media.mdUp && <Hamburger onClick={ handleToggle }/> }
            { showMenu && <Nav /> }
        </NavigationStyled>
    );
}

export default Navigation;

const NavigationStyled = styled.div`

.Hamburger{
    position: absolute;
    top: 20px;
    right: 20px;

}
    
`;