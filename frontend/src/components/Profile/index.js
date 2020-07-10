import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { connect } from "react-redux";

import GenericProfileReview from "./GenericProfileReview";
import GenericProfileComment from "./GenericProfileComment";
import GenericProfileRestaurant from "./GenericProfileRestaurant";

import Home_page_Restaurant from "../../assets/images/food-4505943_1920.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePicPlaceholder from "../../assets/images/small-user-image.png";
import {
  getCommentsByUserIDAction,
  getUserByIDAction,
  getRestaurantsByUserIDAction,
  getReviewsByUserIDAction,
} from "../../store/actions/userProfileActions";
import { BigButton } from "../../style/GlobalButtons";
import Spinner from "../GenericSpinner";
import DayJS from "react-dayjs";

const ProfilePageWrapper = styled.div``;

const ProfilePageHeader = styled.div`
  height: 155px;
  overflow: hidden;
  z-index: -1;
  position: relative;
`;

const ProfilePageBody = styled.div`
  margin-top: -155px;
  padding: ${rem("30px")} 5% ${rem("30px")} 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 85.4rem) {
    justify-content: flex-start;
  }
`;

const ProfileWrapper = styled.div`
  width: ${rem("850px")};
  /* border: 2px solid red; */
  display: flex;
`;

const ProfileLeftWrapper = styled.div`
  width: ${rem("230px")};
  height: ${rem("490px")};
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

const ProfileMenuWrapper = styled.div`
  border-bottom: 1px solid #979797;
`;

const ProfileMenuItem = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${rem("46px")};
  border-top: 1px solid #979797;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#eaeaea" : "#ffffff")};
  border-left: ${(props) => (props.active ? "5px solid #e47d31" : "")};
  padding-left: ${(props) => (props.active ? "9px" : "14px")};
  :hover {
    background-color: #eaeaea;
  }
  p {
    pointer-events: none;
    margin-left: 10px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #303030;
  }
  svg {
    pointer-events: none;
  }
`;

const ProfileRightWrapper = styled.div`
  width: ${rem("620px")};
  /* border: 0px solid red; */
`;

const ProfileRightTopWrapper = styled.div`
  height: ${rem("124px")};
  /* border: 1px solid red; */
  padding-left: 12px;
  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    line-height: 26px;
  }
  div {
    padding-top: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ProfileRightBottomWrapper = styled.div`
  width: 100%;
  border: 1px solid #ebebeb;
  background: #ffffff;
  margin-top: 1px;
  /* margin-right: 12px; */
  padding: 24px 16px 0px 16px;
  h1 {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #303030;
    margin-bottom: 12px;
  }
`;

const ProfileAboutWrapper = styled.div`
  height: 370px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: ${rem("314px")};
  /* border: 1px solid red; */
  margin-top: ${rem("124px")};
  margin-left: 18px;
  @media (max-width: 85.4rem) {
    width: ${rem("230px")};
    margin-top: ${rem("514px")};
    margin-left: 0px;
    padding-bottom: ${rem("600px")};
    padding-right: ${rem("10px")};
    position: absolute;
  }
  h1 {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #303030;
    padding-top: 23px;
  }
  h2 {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
  div {
    padding-top: 12px;
  }
`;

const ProfileBtn = styled(BigButton)`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => (props.active ? "" : "display:none")}
`;

const Profile = (props) => {
  const {
    dispatch,
    match: {
      params: { userId },
    },
    userProfileReducer: { userObj, userReviews, userRestaurants, userComments },
  } = props;

  useEffect(() => {
    console.log(userId);
    const ID = Number(userId);

    dispatch(getCommentsByUserIDAction(ID));
    dispatch(getUserByIDAction(ID));
    dispatch(getRestaurantsByUserIDAction(ID));
    dispatch(getReviewsByUserIDAction(ID));
  }, []);

  const [active, setActive] = useState("reviews");

  const handleClick = (e) => {
    const value = e.target.id;
    setActive(value);
  };

  return (
    <>
      <ProfilePageWrapper>
        <ProfilePageHeader>
          <img
            alt={"banner"}
            src={
              userObj
                ? userObj.banner
                  ? userObj.banner
                  : Home_page_Restaurant
                : Home_page_Restaurant
            }
          />
        </ProfilePageHeader>
        <ProfilePageBody>
          <ProfileWrapper>
            <ProfileLeftWrapper>
              <img
                alt={"avatar"}
                src={
                  userObj
                    ? userObj.avatar
                      ? userObj.avatar
                      : profilePicPlaceholder
                    : profilePicPlaceholder
                }
              />
              {userObj ? (
                userObj.first_name.length ? (
                  <h1>{userObj.first_name}’s profile</h1>
                ) : (
                  <h1>Profile Page</h1>
                )
              ) : null}

              <ProfileMenuWrapper>
                <ProfileMenuItem
                  onClick={handleClick}
                  active={active === "reviews"}
                  id={"reviews"}
                >
                  <FontAwesomeIcon icon={["far", "star"]} />
                  <p>Reviews</p>
                </ProfileMenuItem>
                <ProfileMenuItem
                  onClick={handleClick}
                  active={active === "comments"}
                  id={"comments"}
                >
                  <FontAwesomeIcon icon={["far", "comments"]} />
                  <p>Comments</p>
                </ProfileMenuItem>
                <ProfileMenuItem
                  onClick={handleClick}
                  active={active === "restaurants"}
                  id={"restaurants"}
                >
                  <FontAwesomeIcon icon={["fas", "store"]} />
                  <p>Restaurant</p>
                </ProfileMenuItem>
              </ProfileMenuWrapper>
            </ProfileLeftWrapper>
            <ProfileRightWrapper>
              <ProfileRightTopWrapper>
                <h1>{userObj ? userObj.first_name : null}</h1>
                <div>
                  <p>{userObj ? `${userObj.location}` : null}</p>
                  {userObj ? (
                    userObj.amount_of_reviews.length ? (
                      <p>{userObj.amount_of_reviews} Reviews</p>
                    ) : (
                      <p>{userObj.amount_of_comments} Reviews</p>
                    )
                  ) : (
                    <p>No Reviews</p>
                  )}
                  {userObj ? (
                    userObj.amount_of_reviews.length ? (
                      <p>No Comments</p>
                    ) : (
                      <p>{userObj.amount_of_reviews} Comments</p>
                    )
                  ) : (
                    <p>No Comments</p>
                  )}
                </div>
              </ProfileRightTopWrapper>
              <>
                <Content active={active === "reviews"}>
                  <ProfileRightBottomWrapper>
                    <h1>Reviews</h1>
                    {userReviews ? (
                      userReviews.map((review, index) => {
                        return (
                          <GenericProfileReview key={index} review={review} />
                        );
                      })
                    ) : (
                      <Spinner />
                    )}
                  </ProfileRightBottomWrapper>
                </Content>
                <Content active={active === "comments"}>
                  <ProfileRightBottomWrapper>
                    <h1>Comments</h1>
                    {userComments ? (
                      userComments.map((comment, index) => {
                        return (
                          <GenericProfileComment
                            key={index}
                            comment={comment}
                          />
                        );
                      })
                    ) : (
                      <Spinner />
                    )}
                  </ProfileRightBottomWrapper>
                </Content>
                <Content active={active === "restaurants"}>
                  <ProfileRightBottomWrapper>
                    <h1>Restaurants</h1>
                    {userRestaurants ? (
                      userRestaurants.map((restaurant, index) => {
                        return (
                          <GenericProfileRestaurant
                            key={index}
                            restaurant={restaurant}
                          />
                        );
                      })
                    ) : (
                      <Spinner />
                    )}
                  </ProfileRightBottomWrapper>
                </Content>
              </>
            </ProfileRightWrapper>
          </ProfileWrapper>
          <ProfileAboutWrapper>
            <h1>About {userObj ? userObj.first_name : null}</h1>
            <div>
              <h2>Location</h2>
              <p>{userObj ? userObj.location : null}</p>
            </div>
            <div>
              <h2>Luna member since</h2>
              {userObj ? (
                <p>
                  <DayJS format="MM.DD.YYYY">{userObj.date_joined}</DayJS>
                </p>
              ) : null}
            </div>
            <div>
              <h2>Things {userObj ? userObj.first_name : null} loves</h2>
              <div>
                {userObj
                  ? userObj.things_user_loves.map((thing, i) => (
                      <p key={i}>{thing}</p>
                    ))
                  : null}
              </div>
            </div>
            <div>
              <h2>More about {userObj ? userObj.first_name : null}</h2>
              <p>{userObj ? userObj.about_me : null}</p>
            </div>
          </ProfileAboutWrapper>
        </ProfilePageBody>
      </ProfilePageWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userProfileReducer: state.userProfileReducer,
  };
};

export default connect(mapStateToProps)(Profile);
