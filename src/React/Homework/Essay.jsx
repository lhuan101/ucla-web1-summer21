import React from 'react';
import styled from 'styled-components';
const Essay = ( {number, question, children}) => {
    return (
        <EssayStyled>
            <h3>Essay # {number }</h3>
            <div className="question">{question}</div>
            <div className="answer">{children}</div>
        

        </EssayStyled>
    );
    
    
    }
    
    export default Essay;

    const EssayStyled = styled.div`

        padding: 20px;
        border: solid 1px #dcd0dd;
        margin: 20px;

        h3 { margin: 0px; }

        .question {
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
            background-color: rgba(255, 255, 255, 0.157);
            padding: 10px;
        }
        .answer {
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
            background-color: #e8e3e96e;
            padding: 10px;
        }
    
    `;