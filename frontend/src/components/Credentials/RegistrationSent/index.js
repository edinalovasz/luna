import React from "react";
import styled from "styled-components";
import rem from "polished/lib/helpers/rem";
import { SmallTitleHr, MainTitle } from "../../../style/GlobalTitles";

const SignUpWrapper = styled.div`
  width: 100vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #F2F2F2; */
  height: ${rem("603px")};
`;

const SignUpSentContainer = styled.div`
  flex-direction: column;
  display: flex;
  height: ${rem("250px")};
  width: ${rem("500px")};
  justify-content: center;
  align-items: center;
  height: auto;
  margin-bottom: ${rem("250px")};

  p {
    display: flex;
    text-align: center;
    font-size: 20px;
    line-height: 23px;
    color: #4c4c4c;
  }
`;

const SignUpTitle = styled(MainTitle)`
  margin-bottom: ${rem("16px")};
`;

const SignUpTitleHr = styled(SmallTitleHr)`
  margin-bottom: ${rem("68px")};
`;

const SignUpSent = (props) => {
  //const [email, setEmail] = useState([]);
  //const [password, setPassword] = useState([]);

  return (
    <SignUpWrapper>
      <SignUpSentContainer>
        <SignUpTitle>Registration</SignUpTitle>
        <SignUpTitleHr></SignUpTitleHr>
        <p>
          Thanks for your registration.
          <br />
          Our hard working monkeys are preparing a digital
          <br /> message called E-Mail that will be sent to you soon.
          <br />
          Since monkeys aren't good in writing the message could
          <br /> end up in your junk folder. Our apologies for any
          <br /> inconvenience.
        </p>
      </SignUpSentContainer>
    </SignUpWrapper>
  );
};

export default SignUpSent;
