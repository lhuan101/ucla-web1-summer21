import React from 'react';
import styled from 'styled-components';

const Item = ({ service }) => {

    return (
        <ItemStyled className='Item'>
            <img src={ service.img } alt={ service.title } />
            <h3>{ service.title }</h3>
        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    img{
        width: 100%;
        display: black;
    }
    h3{
        background-color: #e6aae6;
        color: white;
        padding: 5px;
        font-size: 18px;
        margin: 0px;
    }
`;