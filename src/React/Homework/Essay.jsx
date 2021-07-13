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
        border: solid 5px teal;
        margin: 20px;

        h3 { margin: 0px; }

        .question {
            font-size: 18px;
            background-color: rgba(189, 133, 133, 0.157);
            padding: 10px;
        }
        .answer {
            font-size: 18px;
            background-color: #c08787;
            padding: 10px;
        }
    
    `;