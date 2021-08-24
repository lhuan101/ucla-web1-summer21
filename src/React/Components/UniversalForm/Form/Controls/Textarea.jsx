import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../../Context/index.js';
import { updateControl } from '../../Context/actions.js';

const Textarea = ({ control }) => {
    const { dispatch,state } = useContext(Context);


    const handleUpdate = (e) => {
        updateControl(control.id, e.target.value, dispatch, state);
        

    }

    return (
        <TextareaStyled 
            className="Textarea" 
            type={ control.type }
            id={ control.id }
            value={ control.value }
            onChange={ handleUpdate }
        />
    );
}

export default Textarea;

const TextareaStyled = styled.textarea`
    width: 100%;
    height: 200px;
    font-size: 20px;
    padding: 10px;
    border: solid 2px grey;
    outline: none;

    &:focus {
        background-color: #eee;
    }

    &.error {
        border: solid 2px red;
    }
`;