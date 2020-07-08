import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { rem } from "polished";
import { MainTitle, TitleHr } from "../../style/GlobalTitles";
import Home_page_Restaurant from "../../assets/images/food-4505943_1920.jpg";

import { PageContainer, TitleContainer } from "../../style/GlobalWrappers";
import { SearchInput } from "../../style/GlobalInputs";
import { BigButton } from "../../style/GlobalButtons";

import GenericRestaurantCard from "../GenericRestaurantCard";
import { useHistory } from "react-router";
import {connect, useDispatch} from "react-redux";
import { validate } from "../../store/actions/registrationActions";
import {getTopFourAction} from "../../store/actions/searchActions";

const HomePageWrapper = styled(PageContainer)`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 35vh;
  width: 100%;
`;

const SearchForm = styled.form`
  position: absolute;
  z-index: 2;
`;

const BestRatedRestaurantsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 53vh;
`;

const BestRatedRestaurantContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 30px;
  grid-template-areas: ". . . .";
  padding: 42px;
`;

const HomePageTitle = styled(MainTitle)`
  margin-top: 50px;
`;

const SearchHomePageInput = styled(SearchInput)`
  background: #ffffff;
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
    const [topFour, settopFour] = useState(null);

    useEffect(() => {
  async function fetchData() {

    const response = await dispatch(getTopFourAction());
   settopFour(response.data)
  }
  fetchData();
}, [])

    console.log('topFour', topFour)


    const push = useHistory()
    const dispatch = useDispatch()
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
        if (response.status === 200){
            console.log('do something')
        }else{
            console.log('error', response)
        }
    };

    return (
        <>
            <HomePageWrapper>
                <HeaderHomePage>
                    <SearchForm onSubmit={handleSubmit}>
                        <SearchHomePageInput
                                onChange={(e) => onChangeHandler(e, "searchText")}
                                placeholder="Search..."
                                type="text"
                                required
                        ></SearchHomePageInput>
                        <SearchHomePageButton type="submit" >Search</SearchHomePageButton>
                    </SearchForm>
                    {/*<img src={Home_page_Restaurant}></img>*/}
                </HeaderHomePage>
                <BestRatedRestaurantsSection>
                    <TitleContainer>
                        <HomePageTitle>BEST RATED RESTAURANTS</HomePageTitle>
                        <Line></Line>
                    </TitleContainer>
                    <BestRatedRestaurantContainer>
                        {topFour ? topFour.map((restaurant, index) => {
                            return (
                                <GenericRestaurantCard
                                    key={index}
                                    restaurant={restaurant}
                                />
                            )
                        } ) : null}
                    </BestRatedRestaurantContainer>
                </BestRatedRestaurantsSection>
            </HomePageWrapper>
        </>
    )
};

const mapStateToProps = (state) => {
  return {
    userProfileReducer: state.userProfileReducer,
  };
};

export default connect(mapStateToProps)(Home);
