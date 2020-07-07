import React from "react";
import {BaseInput} from "../../../style/GlobalInputs";
import {BigButton} from "../../../style/GlobalButtons";
import styled from "styled-components";
import {rem} from "polished";
import {MainTitle, TitleHr} from "../../../style/GlobalTitles";
import {TitleContainer} from "../../../style/GlobalWrappers";

const VerificationWrapper = styled.div`
    background: #F2F2F2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const VerificationForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
`

const Line = styled(TitleHr)`
  border: 2px solid #e47d31;
  width: ${rem("120px")};
  margin: 8px;
`;

const InputsContainers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr ;
  gap: 0px 30px;
  grid-template-areas: ". ." ". ." ". .";
  margin: 100px;
    div {
      border: solid red;
      margin: 10px;
    }
`
const VerInput = styled(BaseInput)`
  width: ${rem("500px")};
  height: ${rem("55px")};
  font-size: ${rem("20px")};
  background: #FFFFFF
`;


const Verification = (props) => {

    return (
        <>
            <VerificationWrapper>
                <VerificationForm>
                        <TitleContainer>
                            <MainTitle>Verification</MainTitle>
                            <Line></Line>
                        </TitleContainer>
                        <InputsContainers>
                            <div></div>
                            <div></div>
                            <VerInput
                                type='text'
                                placeholder='Email address'
                                name='email'
                            />
                            <VerInput
                                type='text'
                                placeholder='Validation code'
                                name='email'
                            />
                            <div></div>
                            <div></div>
                            <VerInput
                                type='text'
                                placeholder='Username'
                                name='email'
                            />
                            <VerInput
                                type='text'
                                placeholder='Location'
                                name='email'
                            />
                            <div></div>
                            <div></div>
                            <VerInput
                                type='text'
                                placeholder='Password'
                                name='email'
                            />
                            <VerInput
                                type='text'
                                placeholder='Password repeat'
                                name='email'
                            />
                        </InputsContainers>
                        <BigButton>Finish Registration</BigButton>
                </VerificationForm>
            </VerificationWrapper>
        </>
    )
};


export default Verification;