import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm';

const Login = () => {

    const defaultFormData = {
        apiUrl: '/user/login',
        hasSubmitted: false,
        request: {},
        response: {},
        message: '',

        controls: [
            {
                id: 'user',
                label: 'User',
                value: '123@gmail.com',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required','email'],
                    message:'',
                }
            },
            {
                id: 'password',
                label: 'Password',
                value: '12345',
                type: 'password',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message:'',
                }
            },
            


        ]

    }

    return (
        <LoginStyled className= 'LoginForm'>
            <UniversalForm defaultFormData={ defaultFormData }/>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;