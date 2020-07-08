import React, { useState } from "react";
import { BaseInput } from "../../../style/GlobalInputs";
import { BigButton } from "../../../style/GlobalButtons";
import styled from "styled-components";
import { rem } from "polished";
import { MainTitle, TitleHr } from "../../../style/GlobalTitles";
import { TitleContainer } from "../../../style/GlobalWrappers";
import { validate } from "../../../store/actions/registrationActions";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const VerificationWrapper = styled.div`
  /* background: #F2F2F2; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const VerificationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

const Line = styled(TitleHr)`
  border: 2px solid #e47d31;
  width: ${rem("120px")};
  margin: 8px;
`;

const InputsContainers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 30px;
  grid-template-areas: ". ." ". ." ". .";
  margin: 100px;
  div {
    border: solid red;
    margin: 10px;
  }
`;
const VerInput = styled(BaseInput)`
  width: ${rem("500px")};
  height: ${rem("55px")};
  font-size: ${rem("20px")};
  background: #ffffff;
`;

const Verification = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState({
        email: "",
        username: "",
        code: "",
        first_name: "",
        last_name: "",
        password: "",
        password_repeat: "",
    });

  const onChangeHandler = (event, property) => {
    const value = event.currentTarget.value;
    setUserInfo({ ...userInfo, [property]: value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await dispatch(validate(userInfo));
        if (response.status < 300){
            history.push("/auth/login")
        }else{
            console.log('error', response)
        }
    };

    return (
        <>
            <VerificationWrapper>
                <VerificationForm onSubmit={handleSubmit}>
                        <TitleContainer>
                            <MainTitle>Verification</MainTitle>
                            <Line></Line>
                        </TitleContainer>
                        <InputsContainers>
                            <div></div>
                            <div></div>
                            <VerInput
                                onChange={(e) => onChangeHandler(e, "email")}
                                placeholder="E-Mail address"
                                type="email"
                                required
                            />
                            <VerInput
                                onChange={(e) => onChangeHandler(e, "code")}
                                placeholder="Validation Code"
                                type="number"
                                required
                            />
                            <div></div>
                            <div></div>
                            <VerInput
                                onChange={(e) => onChangeHandler(e, "username")}
                                placeholder="Username"
                                type="text"
                                required
                            />
                            <VerInput
                                onChange={(e) => onChangeHandler(e, "first_name")}
                                placeholder="First Name"
                                type="text"
                                required
                            />
                            <div></div>
                            <div></div>
                            <VerInput
                                onChange={(e) => onChangeHandler(e, "last_name")}
                                type="text"
                                placeholder="Last Name"
                                required
                            />
                            <VerInput
                                onChange={(e) => onChangeHandler(e, "location")}
                                type="text"
                                placeholder="Location"
                                required
                            />
                            <div></div>
                            <div></div>
                            <VerInput
                                onChange={(e) => onChangeHandler(e, "password")}
                                placeholder="Password"
                                type="password"
                                required
                            />
                            <div></div>
                            <div></div>
                            <VerInput
                                onChange={(e) => onChangeHandler(e, "password_repeat")}
                                placeholder="Password Repeat"
                                type="password"
                                required
                            />
                        </InputsContainers>
                        <BigButton onChange={handleSubmit} type="submit" >Finish Registration</BigButton>
                </VerificationForm>
            </VerificationWrapper>
        </>
    )
};

export default Verification;
