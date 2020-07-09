import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {
    PageContainer,
    StarContainerFix,
} from "../../style/GlobalWrappers";
import {BaseButton, Button} from "../../style/GlobalButtons";
import {FilterListInput} from "../../style/GlobalInputs";
import rem from "polished/lib/helpers/rem";
import StarRatingFix from "../StarRatingFix";
import GenericWideReviewCard from "../GenericWideReviewCard";
import {useHistory} from "react-router";
import {connect} from "react-redux";
import {
    getRestaurantByIDAction,
    getRestaurantReviewsAction,
    resetRestaurantObj,
    updateRestaurantAction
} from "../../store/actions/restaurantActions";

const RestaurantReviewWrapper = styled(PageContainer)`
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderRestaurantReview = styled.div` 
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content: center;
    align-content: flex-start;
    height: 35vh;
    width: 100%;
    img{
      object-fit: cover;
    }
`

const HeaderMainInfoContainer = styled.div`
    position: absolute;
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
    font-size: 30px;
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

const FilterForm = styled.form`
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

const Par = styled.p`

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

const placeholderImage = "https://picsum.photos/2550/1440"

const RestaurantReview = (props) => {
    const push = useHistory()
    const {
        dispatch,
        match: {
            params: {restaurantId},
        },
        restaurantReducer: {restaurantObj}
    } = props

    console.log(restaurantId)

    useEffect(() => {
        dispatch(getRestaurantByIDAction(restaurantId));
        console.log('hola')
        return () => {
            dispatch(resetRestaurantObj())
        }


    }, [])


    const [userInfo, setUserInfo] = useState({
        filter: "",
    });

    const onChangeHandler = (event, property) => {
        const value = event.currentTarget.value;
        setUserInfo({...userInfo, [property]: value});
    };

    const handleWriteReviewButton = async (e) => {
        e.preventDefault();
        const response = await dispatch(getRestaurantReviewsAction(restaurantId));

        if (response.status < 300){
            push.push(`/restaurant/review/create/${restaurantId}`)
        }else{
            console.log('error', response)
        }
    };

    const handleEditButton = async (e) => {
        e.preventDefault();
        const response = await dispatch(getRestaurantReviewsAction(restaurantId));

        if (response.status < 300){
            push.push(`/restaurant/edit/${restaurantId}`)
        }else{
            console.log('error', response)
        }
    };


    return (
        <RestaurantReviewWrapper>
            <HeaderRestaurantReview>
                {restaurantObj ? <img alt={"restaurant picture"} src={restaurantObj.image ? restaurantObj.image : placeholderImage}/> : null}
                <HeaderMainInfoContainer>
                    <HeaderMainInfo>
                        <RestaurantName>{restaurantObj ? restaurantObj.name : null}</RestaurantName>
                        <RestaurantCategory>{restaurantObj ? restaurantObj.category : null}</RestaurantCategory>
                        <StarContainerFix>
                            {restaurantObj ? <StarRatingFix avg_rating={parseInt(restaurantObj.avg_rating)}/> : null}
                            <p>{restaurantObj ? restaurantObj.no_of_ratings : null} reviews</p>
                        </StarContainerFix>
                    </HeaderMainInfo>
                </HeaderMainInfoContainer>
            </HeaderRestaurantReview>
            <RestaurantReviewInfoContainer>
                <LeftInfoContainer>
                    <FilterForm>
                        <FilterInput
                            onChange={(e) => onChangeHandler(e, "filter")}
                            type="text"
                            placeholder="Filter list..."
                            required
                        ></FilterInput>
                        <FilterButton type="submit">FILTER</FilterButton>
                    </FilterForm>
                    <ReviewsContainer>
                        <GenericWideReviewCard/>
                    </ReviewsContainer>
                </LeftInfoContainer>
                <RightInfoContainer>
                    <ScheduleInfo>
                        <p>{restaurantObj ? restaurantObj.opening_hours : null}</p>
                    </ScheduleInfo>
                    <PriceInfo>
                        <p>{restaurantObj ? restaurantObj.price_level : null}</p>
                    </PriceInfo>
                    <OtherOptions>
                        <OptionsButton onClick={handleWriteReviewButton}>WRITE A REVIEW</OptionsButton>
                        <OptionsButton onClick={handleEditButton}>EDIT DATA</OptionsButton>
                    </OtherOptions>
                </RightInfoContainer>
            </RestaurantReviewInfoContainer>
        </RestaurantReviewWrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        restaurantReducer: state.restaurantReducer,
    };
};

export default connect(mapStateToProps)(RestaurantReview);