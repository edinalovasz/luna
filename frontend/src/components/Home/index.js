import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { MainTitle, TitleHr } from "../../style/GlobalTitles";
import Home_page_Restaurant from "../../assets/images/food-4505943_1920.jpg";

import { PageContainer, TitleContainer } from "../../style/GlobalWrappers";
import { SearchInput } from "../../style/GlobalInputs";
import { BigButton } from "../../style/GlobalButtons";

import GenericRestaurantCard from "../GenericRestaurantCard";
import { connect, useDispatch } from "react-redux";
import { validate } from "../../store/actions/registrationActions";
import { getTopFourAction } from "../../store/actions/searchActions";
import Spinner from "../GenericSpinner";

const HomePageWrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 40px;
`;

const HeaderHomePage = styled.div`
  display: flex;
  flex-flow: column;
  background-image: url(${Home_page_Restaurant});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
`;

const SearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  z-index: 2;
  input {
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
  }
`;

const BestRatedRestaurantsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BestRatedRestaurantContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    margin: 5px; /* and that, will result in a 10px gap */
  }
`;

const TitleContainerHome = styled(TitleContainer)`
  margin-bottom: 50px;
`;

const HomePageTitle = styled(MainTitle)`
  margin-top: 50px;
`;

const SearchHomePageInput = styled(SearchInput)`
  background: #ffffff;
  min-width: ${rem("430px")};
`;

const SearchHomePageButton = styled(BigButton)`
  margin-left: 25px;
`;

const Line = styled(TitleHr)`
  border: 2px solid #e47d31;
  width: ${rem("250px")};
  margin: 8px;
`;

const Home = (props) => {
  const [topFour, settopFour] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await dispatch(getTopFourAction());
      if (response.status < 300) settopFour(response.data);
    }
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    searchText: "",
  });

  const onChangeHandler = (event, property) => {
    const value = event.currentTarget.value;
    setUserInfo({ ...userInfo, [property]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(validate(userInfo));
    if (response.status === 200) {
      console.log("do something");
    } else {
      console.log("error", response);
    }
  };

  return (
    <HomePageWrapper>
      <HeaderHomePage>
        <SearchForm onSubmit={handleSubmit}>
          <SearchHomePageInput
            onChange={(e) => onChangeHandler(e, "searchText")}
            placeholder="Search..."
            type="text"
            required
          />
          <SearchHomePageButton type="submit">Search</SearchHomePageButton>
        </SearchForm>
        {/*<img src={Home_page_Restaurant}></img>*/}
      </HeaderHomePage>
      <BestRatedRestaurantsSection>
        <TitleContainerHome>
          <HomePageTitle>BEST RATED RESTAURANTS</HomePageTitle>
          <Line></Line>
        </TitleContainerHome>
        <BestRatedRestaurantContainer>
          {topFour ? topFour.map((restaurant, index) => {
                return (
                  <GenericRestaurantCard key={index} restaurant={restaurant} />
                );
              })
            : <Spinner/>}
        </BestRatedRestaurantContainer>
      </BestRatedRestaurantsSection>
    </HomePageWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    userProfileReducer: state.userProfileReducer,
  };
};

export default connect(mapStateToProps)(Home);
