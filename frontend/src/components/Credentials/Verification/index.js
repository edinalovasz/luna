import React, {useState} from "react";
import {BaseInput} from "../../../style/GlobalInputs";
import {BigButton} from "../../../style/GlobalButtons";
import styled from "styled-components";
import {rem} from "polished";
import {MainTitle, TitleHr} from "../../../style/GlobalTitles";
import {TitleContainer} from "../../../style/GlobalWrappers";
import {validate} from "../../../store/actions/registrationActions";
import {useHistory} from "react-router";
import {connect, useDispatch} from "react-redux";
import ErrorComponent from "../../ErrorComponent";
import {resetError} from "../../../store/actions/errorActions";

const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${rem("47px")};
`;

const VerificationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${rem("50px")};
`;

const Line = styled(TitleHr)`
  border: 2px solid #e47d31;
  width: ${rem("120px")};
  margin: 8px;
`;

const InputsContainers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 30px;
  grid-template-areas: ". ." ". ." ". .";
  margin: ${rem("50px")};
  div {
  //  width: ${rem("340px")};
  // height: ${rem("52px")};
  display: flex;
  justify-content: center;
  align-items: center;
    p {
      color: red;
      text-align: center;
    };
  }
`;
const VerInput = styled(BaseInput)`
  width: ${rem("500px")};
  height: ${rem("55px")};
  font-size: ${rem("20px")};
  background: #ffffff;
`;

const Verification = (props) => {

    const {errorReducer: {error}} = props
    const history = useHistory();
    const dispatch = useDispatch();
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
        setUserInfo({...userInfo, [property]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await dispatch(validate(userInfo));
        if (response.status < 300) {
            resetError()
            history.push("/auth/login");
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
                        <div><p>{error === "1" ? "Email is incorrect" : null}</p></div>
                        <div><p>{error === "2" ? "Validation code is incorrect" : null}</p></div>
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
                        <div>
                            <p>{error === "username" ? "Username has already been used!" : (error === "5" ? "Username cannot be empty!" : null)}</p>
                        </div>
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
                        <div><p>{error === "3" ? "Passwords do not match!" : null}</p></div>
                        <VerInput
                            onChange={(e) => onChangeHandler(e, "password")}
                            placeholder="Password"
                            type="password"
                            required
                        />
                        <VerInput
                            onChange={(e) => onChangeHandler(e, "password_repeat")}
                            placeholder="Password Repeat"
                            type="password"
                            required
                        />
                        <div></div>
                        <div></div>
                    </InputsContainers>
                    <BigButton onChange={handleSubmit} type="submit">
                        Finish Registration
                    </BigButton>
                </VerificationForm>
            </VerificationWrapper>
        </>
    );
};

const mapStateToProps = (state) => {
    console.log("state", state);
    return {
        authReducer: state.authReducer,
        errorReducer: state.errorReducer,
    };
};

export default connect(mapStateToProps)(Verification);
