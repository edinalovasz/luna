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
import {
  generalSearchAction,
  getAllRestaurantsAction,
  getAllReviewsAction,
  getAllUserProfilesAction,
  resetSearch,
} from "../../store/actions/searchActions";
import Spinner from "../GenericSpinner";

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

const Search = (props) => {
  const {
    dispatch,
    searchReducer: { allUsersList, allRestaurantsList, allReviewsList },
  } = props;
  useEffect(() => {
    console.log("getting all again");
    dispatch(getAllUserProfilesAction());
    dispatch(getAllRestaurantsAction());
    dispatch(getAllReviewsAction());
  }, []);

  const [active, setActive] = useState("restaurants");
  const [searchParams, setSearchParams] = useState({
    type: `restaurants`,
    search_string: "",
  });

  const handleSearch = (e) => {
    const value = e.currentTarget.value;
    setSearchParams({ ...searchParams, search_string: value });
  };

  const handleClick = (e) => {
    const value = e.target.id;
    setActive(value);
    setSearchParams({ ...searchParams, type: value });
  };

  const keyPressed = (event) => {
    if (event.key === "Enter") {
      dispatch(resetSearch());
      dispatch(
        generalSearchAction(searchParams.type, searchParams.search_string)
      );
      setSearchParams({ ...searchParams, search_string: "" });
    }
  };
  return (
    <>
      <SearchPageWrapper>
        <SearchPageHeader>
          <HeaderSearchInput
            value={searchParams.search_string}
            onKeyPress={keyPressed}
            onChange={handleSearch}
            placeholder="Search"
          />
          <SelectSearchCategory active={active === "restaurants"}>
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
            {allRestaurantsList ? (
              allRestaurantsList.map((restaurant, index) => {
                return (
                  <GenericRestaurantCard key={index} restaurant={restaurant} />
                );
              })
            ) : (
              <Spinner />
            )}
          </Content>
          <Content active={active === "reviews"}>
            {allReviewsList ? (
              allReviewsList.map((review, index) => {
                return <GenericReviewCard key={index} review={review} />;
              })
            ) : (
              <Spinner />
            )}
          </Content>
          <Content active={active === "users"}>
            {allUsersList ? (
              allUsersList.map((user, index) => {
                return <GenericUserCard key={index} user={user} />;
              })
            ) : (
              <Spinner />
            )}
          </Content>
        </SearchPageBody>
      </SearchPageWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userProfileReducer: state.userProfileReducer,
    searchReducer: state.searchReducer,
  };
};

export default connect(mapStateToProps)(Search);
