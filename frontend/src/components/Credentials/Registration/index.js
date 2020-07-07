import React from "react";
import styled from "styled-components";
import rem from "polished/lib/helpers/rem";
import {BigButton} from "../../../style/GlobalButtons";
import {SmallTitleHr, MainTitle} from "../../../style/GlobalTitles";
import {BaseInput} from "../../../style/GlobalInputs";


const SignUpWrapper = styled.div`
    width: 100vw;
    flex-direction: column ;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
    height: ${rem("603px")};
`;

const SignUpFormContainer = styled.form`
    flex-direction: column ;
    display: flex;
    height: ${rem("420px")};
    width: ${rem("350px")};
    justify-content: center;
    align-items: center;
    height: auto;
    margin-bottom: ${rem("200px")};
`;

const SignUpButton = styled(BigButton)`
        margin-top: ${rem("30px")};
    `

const SignUpTitle = styled(MainTitle)`
        margin-bottom: ${rem("16px")};
    `

const SignUpTitleHr = styled(SmallTitleHr)`
        margin-bottom: ${rem("20px")};
    `

const ErrorPlaceholder = styled.div`
        width: ${rem("340px")};
        height: ${rem("52px")};
`

const SignUpInput = styled(BaseInput)`
      background: #FFFFFF;
      box-sizing: border-box;
      width: ${rem("340px")};
      margin-bottom: ${rem("20px")};
      
      ::placeholder{
          font-weight: bold;
      }
    `


const SignUp = props => {
    //const [email, setEmail] = useState([]);
    //const [password, setPassword] = useState([]);


    return (
        <SignUpWrapper>
            <SignUpFormContainer>
                <SignUpTitle>Registration</SignUpTitle>
                <SignUpTitleHr></SignUpTitleHr>
                <ErrorPlaceholder></ErrorPlaceholder>
                <SignUpInput type="email" placeholder="E-mail address" required />
                <SignUpButton>Register</SignUpButton>
            </SignUpFormContainer>
        </SignUpWrapper>
    )
}


export default SignUp;