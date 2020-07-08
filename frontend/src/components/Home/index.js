import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {rem} from "polished";
import {MainTitle, TitleHr} from "../../style/GlobalTitles";
import Home_page_Restaurant from "../../assets/images/food-4505943_1920.jpg";

import {
    PageContainer,
    StarContainer,
    TitleContainer
} from "../../style/GlobalWrappers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import placeHolderRestaurant from "../../assets/images/restaurant.png";
import {SearchInput} from "../../style/GlobalInputs";
import {BigButton} from "../../style/GlobalButtons";

import GenericRestaurantCard from "../GenericRestaurantCard";


const HomePageWrapper = styled(PageContainer)`
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const HeaderHomePage = styled.div`
    border: solid red;
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
`

const SearchForm = styled.form`
    position: absolute;
    z-index: 2;
`

const BestRatedRestaurantsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid green;
    width: 100%;
    height: 53vh;
`

const HeaderHomePageForm = styled.section`
  display: flex;
  flex-flow: column;
  background-image: url(${Home_page_Restaurant}),
    linear-gradient(102deg, #c468ff, #6e91f6);
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  height: 45%;
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
    const [topFour, settopFour] = useState("");

    useEffect(() => {

    }, []);
    

    return (
        <>
            <HomePageWrapper>
                <HeaderHomePage>
                    <SearchForm>
                        <SearchHomePageInput placeholder="Search..." type="text"/>
                        <SearchHomePageButton>Search</SearchHomePageButton>
                    </SearchForm>
                    {/*<img src={Home_page_Restaurant}></img>*/}
                </HeaderHomePage>
                <BestRatedRestaurantsSection>
                    <TitleContainer>
                        <HomePageTitle>BEST RATED RESTAURANTS</HomePageTitle>
                        <Line></Line>
                    </TitleContainer>
                    <BestRatedRestaurantContainer>
                        <GenericRestaurantCard/>
                        <GenericRestaurantCard/>
                        <GenericRestaurantCard/>
                        <GenericRestaurantCard/>
                    </BestRatedRestaurantContainer>
                </BestRatedRestaurantsSection>
            </HomePageWrapper>
        </>
    )
};

export default Home;
