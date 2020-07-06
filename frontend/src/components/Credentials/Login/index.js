import React from "react";
import styled from "styled-components";
//import rem from "polished/lib/helpers/rem";
import {useState} from "react";
import {LoginButton} from "../../../style/GlobalButtons"

export const LoginWrapper = styled.div`
    width: 100vw;
    flex-direction: column ;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
`;

export const LoginFormContainer = styled.form`
    
`;


const Login = props => {
    //const [email, setEmail] = useState([]);
    //const [password, setPassword] = useState([]);


    return (
        <LoginWrapper>
            sdfsdfsdfsdf
            <LoginFormContainer>
                <LoginButton>Login</LoginButton>
            </LoginFormContainer>
        </LoginWrapper>
    )
}


export default Login;