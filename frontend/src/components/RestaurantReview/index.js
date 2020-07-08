import React from "react";
import styled from "styled-components";
import {
    PageContainer,
    StarContainerFix,
} from "../../style/GlobalWrappers";
import Home_page_Restaurant from "../../assets/images/food-4505943_1920.jpg";
import {BaseButton, Button} from "../../style/GlobalButtons";
import {FilterListInput} from "../../style/GlobalInputs";
import rem from "polished/lib/helpers/rem";
import StarRatingFix from "../StarRatingFix";
import GenericWideReviewCard from "../GenericWideReviewCard";

const RestaurantReviewWrapper = styled(PageContainer)`
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderRestaurantReview = styled.div`
    display: flex;
    background-image: url(${Home_page_Restaurant});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content: center;
    align-content: flex-start;
    height: 35vh;
    width: 100%;
`

const HeaderMainInfoContainer = styled.div`
    height: 204px;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
`

const HeaderMainInfo = styled.div`
    margin: 33px 130px;
    display: flex;
    flex-direction: column;
    height: 204px;
`

const RestaurantName = styled.p`
    font-family: Helvetica;
    font-weight: bold;
    font-size: 24px;
    color: #FFFFFF;
`

const RestaurantCategory = styled.p`
    font-family: Helvetica;
    font-weight: lighter;
    font-size: 19px;
    line-height: 34px;
    color: #FFFFFF;
    margin-top: 7px;
`


const RestaurantReviewInfoContainer = styled.div`
    padding: 15px;
    display: flex;
    width: 100vw;
    height: 53vh;
`

const LeftInfoContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  padding-right: 39px;
`

const RightInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  p{
    font-family: Helvetica;
    font-style: normal;
    font-weight: 400;
    font-size: ${rem("20px")};
    line-height: 23px;
  }
`

const FilterForm = styled.div`
  padding-bottom: 15px;
  display: flex;
  justify-content: flex-end;
`
const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ScheduleInfo = styled.div`
  padding-bottom: 15px;
  display: flex;
  align-items: flex-start;
`
const PriceInfo = styled.div`
  padding-bottom: 15px;
  display: flex;
  align-items: flex-start;
`

const OtherOptions = styled.div`
  display: flex;
  align-items: flex-start;
`

const FilterInput = styled(FilterListInput)`
  background: #FFFFFF
`;

const FilterButton = styled(Button)`
  margin-left: 25px;
`;

const OptionsButton = styled(BaseButton)`
  width: ${rem("250px")};
  margin-right: 40px;
`;



const RestaurantReview = (props) => {

    return (
        <RestaurantReviewWrapper>
            <HeaderRestaurantReview>
                <HeaderMainInfoContainer>
                    <HeaderMainInfo>
                        <RestaurantName>Läderach Chocolatier Suisse</RestaurantName>
                        <RestaurantCategory>Chocolatiers & shops</RestaurantCategory>
                        <StarContainerFix>
                            <StarRatingFix></StarRatingFix>
                        </StarContainerFix>
                    </HeaderMainInfo>
                </HeaderMainInfoContainer>
            </HeaderRestaurantReview>
            <RestaurantReviewInfoContainer>
                <LeftInfoContainer>
                    <FilterForm>
                        <FilterInput
                            placeholder="Filter list..."
                            type="text"
                        ></FilterInput>
                        <FilterButton>FILTER</FilterButton>
                    </FilterForm>
                    <ReviewsContainer>
                        <GenericWideReviewCard/>
                        <GenericWideReviewCard/>
                    </ReviewsContainer>
                </LeftInfoContainer>
                <RightInfoContainer>
                    <ScheduleInfo>
                        <p>Monday-Friday 9:00 am - 8:00 pm</p>
                    </ScheduleInfo>
                    <PriceInfo>
                        <p>Price level: $$$</p>
                    </PriceInfo>
                    <OtherOptions>
                        <OptionsButton>WRITE A REVIEW</OptionsButton>
                        <OptionsButton>EDIT DATA</OptionsButton>
                    </OtherOptions>
                </RightInfoContainer>
            </RestaurantReviewInfoContainer>
        </RestaurantReviewWrapper>
    )
};

export default RestaurantReview;