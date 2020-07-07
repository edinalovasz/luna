import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { MainTitle, TitleHr } from "../../style/GlobalTitles";
import Home_page_Restaurant from "../../assets/images/food-4505943_1920.jpg";
import { PageContainer } from "../../style/GlobalWrappers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePicPlaceholder from "../../assets/images/small-user-image.png";
import { SearchInput } from "../../style/GlobalInputs";
import { BigButton } from "../../style/GlobalButtons";

const ProfilePageWrapper = styled.div``;

const ProfilePageHeader = styled.div`
  height: 155px;
  overflow: hidden;
  z-index: -1;
  position: relative;
`;

const ProfilePageBody = styled.div`
  margin-top: -155px;
  padding: ${rem("30px")} 9% ${rem("30px")} 9%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProfileWrapper = styled.div`
  width: ${rem("850px")};
  border: 2px solid red;
  display: flex;
`;

const ProfileLeftWrapper = styled.div`
  width: ${rem("230px")};
  height: ${rem("490px")};
  border: 2px solid red;
  img {
    width: ${rem("230px")};
    height: ${rem("230px")};
  }
  h1 {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #4c4c4c;
  }
`;

const ProfileMenuWrapper = styled.div``;

const ProfileMenuItem = styled.div``;

const ProfileRightWrapper = styled.div`
  width: ${rem("620px")};
  border: 0px solid red;
`;

const ProfileRightTopWrapper = styled.div`
  height: ${rem("124px")};
  border: 1px solid red;
`;

const ProfileRightBottomWrapper = styled.div`
  border: 1px solid red;
`;

const ProfileAboutWrapper = styled.div`
  width: ${rem("314px")};
  border: 1px solid red;
  margin-top: ${rem("124px")};
  @media (max-width: 1429px) {
    width: ${rem("850px")};
  }
`;

const Profile = (props) => {
  return (
    <>
      <ProfilePageWrapper>
        <ProfilePageHeader>
          <img src={Home_page_Restaurant}></img>
        </ProfilePageHeader>
        <ProfilePageBody>
          <ProfileWrapper>
            <ProfileLeftWrapper>
              <img src={profilePicPlaceholder}></img>

              <h1>Laurent’s profile</h1>
            </ProfileLeftWrapper>
            <ProfileRightWrapper>
              <ProfileRightTopWrapper>
                <p>test</p>
              </ProfileRightTopWrapper>
              <ProfileRightBottomWrapper>
                <p>test</p>
              </ProfileRightBottomWrapper>
            </ProfileRightWrapper>
          </ProfileWrapper>
          <ProfileAboutWrapper>
            <p>test</p>
          </ProfileAboutWrapper>{" "}
        </ProfilePageBody>
      </ProfilePageWrapper>
    </>
  );
};

export default Profile;
