import React from "react";
import styled from "styled-components";
import rem from "polished/lib/helpers/rem";
import { useState } from "react";
import { BigButton } from "../../../style/GlobalButtons";
import { MainTitle, SmallTitleHr, TitleHr } from "../../../style/GlobalTitles";
import { BaseInput } from "../../../style/GlobalInputs";
import { PageContainer } from "../../../style/GlobalWrappers";
import { sendLoginAction } from "../../../store/actions/loginActions";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const LoginWrapper = styled(PageContainer)`
  width: 100vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #f2f2f2; */
`;

const LoginFormContainer = styled.form`
  flex-direction: column;
  display: flex;
  height: ${rem("420px")};
  width: ${rem("350px")};
  justify-content: center;
  align-items: center;
  margin-bottom: ${rem("100px")};
`;

const LoginFormButton = styled(BigButton)`
  margin-top: ${rem("30px")};
`;

const LoginTitle = styled(MainTitle)`
  margin-bottom: ${rem("16px")};
`;

const LoginTitleHr = styled(SmallTitleHr)`
  margin-bottom: ${rem("40px")};
`;

export const LoginInput = styled(BaseInput)`
  background: #ffffff;
  box-sizing: border-box;
  width: ${rem("340px")};
  margin-bottom: ${rem("20px")};

  ::placeholder {
    font-weight: bold;
  }
`;

const ErrorPlaceholder = styled.div`
  width: ${rem("340px")};
  height: ${rem("52px")};
`;

const Login = (props) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });

    console.log('loginInfo', loginInfo)
    const handleEmail = e => {
        const value = e.currentTarget.value
    setloginInfo({
      ...loginInfo,
      email: value,
    });
  };

  const handlePassword = (e) => {
    const value = e.currentTarget.value;
    setloginInfo({
      ...loginInfo,
      password: value,
    });
  };

  const handleSubmit = async e => {

      e.preventDefault();
      console.log("in the ubmit")
      const response = await dispatch(sendLoginAction(loginInfo));
      if (response.status === 200) {
          history.push("/home")
      }
  };

  console.log("data", loginInfo);

  return (
    <PageContainer>
      <LoginWrapper>
        <LoginFormContainer onSubmit={handleSubmit}>
          <LoginTitle>Login</LoginTitle>
          <LoginTitleHr></LoginTitleHr>
          <ErrorPlaceholder></ErrorPlaceholder>
          <LoginInput onChange={handleEmail} type="email" placeholder="Email" required />
          <LoginInput onChange={handlePassword} type="password" placeholder="Password" required />
          <LoginFormButton >Login</LoginFormButton>
        </LoginFormContainer>
      </LoginWrapper>
    </PageContainer>
  );
};

export default Login;
