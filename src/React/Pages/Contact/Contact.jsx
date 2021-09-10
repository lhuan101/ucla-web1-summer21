import React from 'react';
import styled from 'styled-components';

import {mediaQueries} from 'common/mediaQueries/mediaQueries.js';

import Info from "./Info/Info.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";
import Map from "./Map/Map.jsx";

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            
            <div className='row'>
                
                <div className="col">
                    <ContactForm />
                </div>

            </div>
            
        </ContactStyled>
    );
}

export default Contact;

/*const ContactStyled = styled.div`
    
    background-color: pink;

    @media (min-width: 800px){
        background-color: orange;
    }
    @media (min-width: 1200px){
        background-color: maroon;
    }


    h1{
        background-color: purple;
        color: white;

    

    @media ${mediaQueries.md} {
        background-color: black;

    }
    }
`; */

const ContactStyled = styled.div`

    @media ${mediaQueries.mdUp}{
    .row{
        width: 50%;
        margin: auto;
        /* display: flex; */
        display: block;
        /* .col{
            flex: 1;

        } */
    }
    }
    

    /* @media (min-width: 800px){
        background-color: orange;
    }
    @media (min-width: 1200px){
        background-color: maroon;
    }
    h1{
        background-color: purple;
        color: white;

        @media ${mediaQueries.md} {
            background-color: black;

        }

    } */

`;