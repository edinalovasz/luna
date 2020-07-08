import React, { useState } from "react";
import styled from "styled-components";
import rem from "polished/lib/helpers/rem";
import { BigButton } from "../../../style/GlobalButtons";
import { SmallTitleHr, MainTitle } from "../../../style/GlobalTitles";
import { BaseInput } from "../../../style/GlobalInputs";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { validate } from "../../../store/actions/registrationActions";

const SignUpWrapper = styled.div`
  width: 100vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #f2f2f2; */
  height: ${rem("603px")};
`;

const SignUpFormContainer = styled.form`
  flex-direction: column;
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
`;

const SignUpTitle = styled(MainTitle)`
  margin-bottom: ${rem("16px")};
`;

const SignUpTitleHr = styled(SmallTitleHr)`
  margin-bottom: ${rem("20px")};
`;

const ErrorPlaceholder = styled.div`
  width: ${rem("340px")};
  height: ${rem("52px")};
`;

const SignUpInput = styled(BaseInput)`
  background: #ffffff;
  box-sizing: border-box;
  width: ${rem("340px")};
  margin-bottom: ${rem("20px")};

  ::placeholder {
    font-weight: bold;
  }
`;

const SignUp = (props) => {
  const push = useHistory();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: "",
  });

  const onChangeHandler = (event, property) => {
    const value = event.currentTarget.value;
    setUserInfo({ ...userInfo, [property]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(validate(userInfo));
    debugger;
    if (response.status === 200) {
      push("/auth/signup/validation");
    } else {
      console.log("error", response);
    }
  };

  return (
    <SignUpWrapper>
      <SignUpFormContainer onSubmit={handleSubmit}>
        <SignUpTitle>Registration</SignUpTitle>
        <SignUpTitleHr></SignUpTitleHr>
        <ErrorPlaceholder></ErrorPlaceholder>
        <SignUpInput
          onChange={(e) => onChangeHandler(e, "email")}
          placeholder="E-Mail address"
          type="email"
          required
        />
        <SignUpButton type="submit">Register</SignUpButton>
      </SignUpFormContainer>
    </SignUpWrapper>
  );
};

export default SignUp;
