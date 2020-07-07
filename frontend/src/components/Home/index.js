import React from "react";
import styled from "styled-components";
import {rem} from "polished";
import {MainTitle, TitleHr} from "../../style/GlobalTitles";
import Home_page_Restaurant from "../../assets/images/food-4505943_1920.jpg";
import {
    RestaurantCard,
    RestaurantCardContent,
    RestaurantCardImg,
    StarContainer,
    TitleContainer
} from "../../style/GlobalWrappers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import placeHolderRestaurant from "../../assets/images/restaurant.png";
import {SearchInput} from "../../style/GlobalInputs";
import {BigButton} from "../../style/GlobalButtons";



const HomePageWrapper = styled.div`
    background: #F2F2F2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderHomePageForm = styled.section`
    display: flex;
    flex-flow: column;
    background-image: url(${Home_page_Restaurant}), linear-gradient(102deg, #c468ff, #6e91f6);
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-width:100%;
    max-height:100%;
    height: 45%;
`

const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
`

const BestRatedRestaurantsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid green;
    height: 65%;
    width: 100%;
`

const BestRatedRestaurantContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 30px;
  grid-template-areas: ". . . .";
  margin: 42px;
`

const HomePageTitle = styled(MainTitle)`
  margin-top: 50px;
`;

const SearchHomePageInput = styled(SearchInput)`
  background: #FFFFFF
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

    return (
        <>
            <HomePageWrapper>
                <HeaderHomePageForm>
                    <SearchForm>
                        <SearchHomePageInput
                        placeholder="Search..."
                        type="text"
                    ></SearchHomePageInput>
                    <SearchHomePageButton>Search</SearchHomePageButton>
                    </SearchForm>
                    <img src={Home_page_Restaurant}></img>
                </HeaderHomePageForm>
                <BestRatedRestaurantsSection>
                    <TitleContainer>
                        <HomePageTitle>BEST RATED RESTAURANTS</HomePageTitle>
                        <Line></Line>
                    </TitleContainer>
                    <BestRatedRestaurantContainer>
                        <RestaurantCard>
                            <RestaurantCardContent>
                              <h2>Restaurant Name</h2>
                              <p>Address</p>
                              <div>
                                <StarContainer>
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                                  <FontAwesomeIcon icon={["far", "star"]} />
                                </StarContainer>
                                <h2>11</h2>
                              </div>
                            </RestaurantCardContent>
                            <RestaurantCardImg>
                              <img src={placeHolderRestaurant}></img>
                            </RestaurantCardImg>
                         </RestaurantCard>
                        <RestaurantCard>
                            <RestaurantCardContent>
                              <h2>Restaurant Name</h2>
                              <p>Address</p>
                              <div>
                                <StarContainer>
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                                  <FontAwesomeIcon icon={["far", "star"]} />
                                </StarContainer>
                                <h2>11</h2>
                              </div>
                            </RestaurantCardContent>
                            <RestaurantCardImg>
                              <img src={placeHolderRestaurant}></img>
                            </RestaurantCardImg>
                         </RestaurantCard>
                        <RestaurantCard>
                            <RestaurantCardContent>
                              <h2>Restaurant Name</h2>
                              <p>Address</p>
                              <div>
                                <StarContainer>
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                                  <FontAwesomeIcon icon={["far", "star"]} />
                                </StarContainer>
                                <h2>11</h2>
                              </div>
                            </RestaurantCardContent>
                            <RestaurantCardImg>
                              <img src={placeHolderRestaurant}></img>
                            </RestaurantCardImg>
                         </RestaurantCard>
                        <RestaurantCard>
                            <RestaurantCardContent>
                              <h2>Restaurant Name</h2>
                              <p>Address</p>
                              <div>
                                <StarContainer>
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                  <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                                  <FontAwesomeIcon icon={["far", "star"]} />
                                </StarContainer>
                                <h2>11</h2>
                              </div>
                            </RestaurantCardContent>
                            <RestaurantCardImg>
                              <img src={placeHolderRestaurant}></img>
                            </RestaurantCardImg>
                         </RestaurantCard>
                    </BestRatedRestaurantContainer>
                </BestRatedRestaurantsSection>
            </HomePageWrapper>
        </>
    )
};


export default Home;