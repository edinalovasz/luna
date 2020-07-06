import React from "react";
import {BaseInput} from "../../../style/GlobalInputs";
import {BigButton} from "../../../style/GlobalButtons";
import styled from "styled-components";
import {rem} from "polished";
import {BigTitleHr, MainTitle, TitleHr} from "../../../style/GlobalTitles";
import {TitleContainer} from "../../../style/GlobalWrappers";

const VerificationWrapper = styled.div`
    height: 100vh;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid red;
    justify-content: center;
`

const VerificationForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid red;
`

const Line = styled(TitleHr)`
  border: 3px solid #e47d31;
  width: ${rem("170px")};
`;

const VerInput = styled(BaseInput)`
    
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
                        <VerInput></VerInput>
                        <BigButton>Finish Registration</BigButton>
                </VerificationForm>
            </VerificationWrapper>
        </>
    )
};


export default Verification;