import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { connect } from "react-redux";

import { BigButton } from "../../style/GlobalButtons";
import { Title } from "../../style/GlobalTitles";
import { BaseInput } from "../../style/GlobalInputs";
import GenericRestaurantCard from "../GenericRestaurantCard";
import GenericReviewCard from "../GenericReviewCard";
import GenericUserCard from "../GenericUserCard";

const SearchPageWrapper = styled.div``;

const SearchPageHeader = styled.div`
  display: flex;
  /* width: 100vw; */
  height: 50px;
`;

const SearchPageBody = styled.div`
  /* margin-top: -155px; */
  padding: ${rem("30px")} 0 ${rem("30px")} 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const SelectSearchCategory = styled.select`
  background: #ffffff;
  box-sizing: border-box;
  width: ${rem("288px")};
  height: ${rem("50px")};
  font-size: ${rem("22px")};
  line-height: ${rem("26px")};
  padding: ${rem("5px")};
  border: 1px solid #ebebeb;
  border-radius: 3px;
  color: #d8d8d8;
  ${(props) => (props.active ? "" : "display:none")}
`;

const HeaderSearchInput = styled(BaseInput)`
  width: 100%;
  background-color: #fff;
`;

const Options = styled.option`
  color: #000;
`;

const SearchMenuItem = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${rem("46px")};
  width: ${rem("200px")};
  border-bottom: 1px solid #979797;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "5px solid #e47d31" : "")};
  padding-bottom: ${(props) => (props.active ? "14px" : "18px")};
  :hover {
    border-bottom: 5px solid #e47d31;
    padding-bottom: 14px;
  }
  h2 {
    pointer-events: none;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;

    color: #4c4c4c;
  }
`;

const SearchMenuBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${rem("58px")};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 5% 0 5%;
  @media (max-width: 760px) {
    padding-left: 0;
    padding-right: 0;
    margin-top: 0px;
  }
  @media (min-width: 1660px) {
    padding-left: 11%;
    padding-right: 11%;
  }
  > div {
    margin: 15px;
  }
  ${(props) => (props.active ? "" : "display:none")}
`;

const Profile = (props) => {
  const [active, setActive] = useState("restaurants");

  const handleClick = (e) => {
    const value = e.target.id;
    setActive(value);
  };

  return (
    <>
      <SearchPageWrapper>
        <SearchPageHeader>
          <HeaderSearchInput placeholder="Search"></HeaderSearchInput>
          <SelectSearchCategory
            active={active === "restaurants"}
            // onChange={(e) => onChangeHandler(e, "category")}
          >
            <Options label="Select a category..." />
            <Options value={1}>Ethnic</Options>
            <Options value={2}>Fast food</Options>
            <Options value={3}>Fast casual</Options>
            <Options value={4}>Casual dining</Options>
            <Options value={5}>Premium casual</Options>
            <Options value={6}>Family style</Options>
            <Options value={7}>Fine dining</Options>
            <Options value={8}>Pub</Options>
          </SelectSearchCategory>
        </SearchPageHeader>
        <SearchPageBody>
          {/* menu */}
          <SearchMenuBar>
            <SearchMenuItem
              onClick={handleClick}
              active={active === "restaurants"}
              id={"restaurants"}
            >
              <h2>Restaurants</h2>
            </SearchMenuItem>
            <SearchMenuItem
              onClick={handleClick}
              active={active === "reviews"}
              id={"reviews"}
            >
              <h2>Reviews</h2>
            </SearchMenuItem>
            <SearchMenuItem
              onClick={handleClick}
              active={active === "users"}
              id={"users"}
            >
              <h2>Users</h2>
            </SearchMenuItem>
          </SearchMenuBar>
          {/* content */}
          <Content active={active === "restaurants"}>
            <GenericRestaurantCard />
            <GenericRestaurantCard />
            <GenericRestaurantCard />
            <GenericRestaurantCard />
            <GenericRestaurantCard />
            <GenericRestaurantCard />
            <GenericRestaurantCard />
            <GenericRestaurantCard />
          </Content>
          <Content active={active === "reviews"}>
            <GenericReviewCard />
            <GenericReviewCard />
            <GenericReviewCard />
            <GenericReviewCard />
            <GenericReviewCard />
            <GenericReviewCard />
            <GenericReviewCard />
            <GenericReviewCard />
          </Content>
          <Content active={active === "users"}>
            <GenericUserCard />
            <GenericUserCard />
            <GenericUserCard />
            <GenericUserCard />
            <GenericUserCard />
            <GenericUserCard />
            <GenericUserCard />
            <GenericUserCard />
            <GenericUserCard />
            <GenericUserCard />
            <GenericUserCard />
            <GenericUserCard />
          </Content>
        </SearchPageBody>
      </SearchPageWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userProfileReducer: state.userProfileReducer,
  };
};

export default connect(mapStateToProps)(Profile);
