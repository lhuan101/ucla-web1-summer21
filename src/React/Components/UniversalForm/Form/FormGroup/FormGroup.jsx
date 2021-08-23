import React from 'react';
import styled from 'styled-components';

import FormControl from './FormControl.jsx';
import FormLabel from './FormLabel.jsx';
const FormGroup = () => {

    return (
        <FormGroupStyled className='FormGroup'>
             
            <FormLabel />
            <FormControl />
            
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    
`;