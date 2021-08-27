import React, {useContext} from 'react';
import styled from 'styled-components';

import Context from '../../Context';
import { submitForm } from '../../Context/actions';

const SubmitButton = () => {

    const { dispatch, state } = useContext(Context);

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        submitForm(dispatch, state);
    }

    return (
        <SubmitButtonStyled 
            className='SubmitButton'
            type='submit'
            onClick={ handleClick }>
            Submit
        </SubmitButtonStyled>
    );
}

export default SubmitButton;

const SubmitButtonStyled = styled.button`
    background-color: #915573;
    color: #fff;

    padding: 10px 20px;
    border-radius: 5px;
    border: none;

    &:hover, &:focus {
        background-color: #dfacc5
    }


`;