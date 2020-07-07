import React from "react";
import styled from "styled-components";
import {rem} from "polished";
import {MainTitle, TitleHr} from "../../style/GlobalTitles";
import Home_page_Restaurant from "../../assets/images/food-4505943_1920.jpg";
import {
    PageContainer,
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

const BestRatedRestaurantContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 30px;
  grid-template-areas: ". . . .";
  padding: 42px;
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
                <HeaderHomePage>
                    <SearchForm>
                        <SearchHomePageInput
                        placeholder="Search..."
                        type="text"
                    ></SearchHomePageInput>
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