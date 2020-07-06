import React from "react";
import styled from "styled-components";
import rem from "polished/lib/helpers/rem";
import {useState} from "react";
import {BigButton} from "../../../style/GlobalButtons";

export const LoginWrapper = styled.div`
    width: 100vw;
    flex-direction: column ;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
`;

export const LoginFormContainer = styled.form`
    flex-direction: column ;
    display: flex;
    height: ${rem("420px")};
    width: ${rem("350px")};
    justify-content: center;
    align-items: center;
    
    h1{
      color: #4C4C4C;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      text-transform: uppercase;
      width: ${rem("100px")};
      height: ${rem("44px")};
      border-bottom: 3px solid #E47D31;
      margin-bottom: ${rem("89px")};
    }
      
    input{
      background: #FFFFFF;
      border: 1px solid #EBEBEB;
      box-sizing: border-box;
      border-radius: 3px;
      width: ${rem("340px")};
      height: ${rem("52px")};
      margin-bottom: ${rem("20px")};
      
      ::placeholder{
        height: ${rem("23px")};
        font-style: normal;
        font-weight: bold;
        font-size: ${rem("20px")};
        line-height: ${rem("23px")};
        color: #979797;
        padding-left: ${rem("23px")};
      }
    }
`;

const LoginFormButton = styled(BigButton)`
        margin-top: ${rem("30px")};
    `



const Login = props => {
    //const [email, setEmail] = useState([]);
    //const [password, setPassword] = useState([]);


    return (
        <LoginWrapper>
            <LoginFormContainer>
                <h1>Login</h1>
                <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required />
                <LoginFormButton>Login</LoginFormButton>
            </LoginFormContainer>
        </LoginWrapper>
    )
}


export default Login;