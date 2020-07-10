import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PageContainer, StarContainerFix } from "../../style/GlobalWrappers";
import { BaseButton, Button, SplitButton } from "../../style/GlobalButtons";
import { FilterListInput } from "../../style/GlobalInputs";
import rem from "polished/lib/helpers/rem";
import StarRatingFix from "../StarRatingFix";
import GenericWideReviewCard from "../GenericWideReviewCard";

import { connect } from "react-redux";
import {
  getRestaurantByIDAction,
  getRestaurantReviewsAction,
  resetRestaurantObj,
  updateRestaurantAction,
} from "../../store/actions/restaurantActions";

import { useHistory } from "react-router";
import { validate } from "../../store/actions/registrationActions";
import Spinner from "../GenericSpinner";
import {
  reviewSearchAction,
  resetSearch,
} from "../../store/actions/searchActions";
import Home_page_Restaurant from "../../assets/images/food-4505943_1920.jpg";
import placeholderImageMap from "../../assets/images/map.png";
import placeholderImageLocation from "../../assets/images/location.png";
import placeholderImagePhone from "../../assets/images/phone.png";
import placeholderImageWebsite from "../../assets/images/website.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const RestaurantReviewWrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderRestaurantReview = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  height: 500px;
  overflow: hidden;
  z-index: -1;
  position: relative;
  img {
    object-fit: cover;
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }
`;

const HeaderMainInfoContainer = styled.div`
  position: absolute;
  height: 212px;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
`;

const HeaderMainInfo = styled.div`
  margin: 33px 130px;
  display: flex;
  flex-direction: column;
  height: 212px;
`;

const MapInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 336px;
  position: absolute;
  top: 15%;
  right: 10%;
`;

const MapContainer = styled.div`
  flex-grow: 1;
  background-image: url(${placeholderImageMap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const InfoContainer = styled.div`
  height: 50%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconContainer = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30%;
`;

const LocationContainer = styled(IconContainer)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  p {
    margin-left: 20px;
    font-size: 20px;
  }
`;

const PhoneContainer = styled(IconContainer)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  p {
    margin-left: 20px;
    font-size: 20px;
  }
`;

const WebsiteContainer = styled(IconContainer)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  p {
    margin-left: 20px;
    font-size: ${rem("14px")};
  }
`;

const Icon = styled.div`
  background-image: url(${placeholderImageLocation});
  height: 35px;
  width: 35px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Location = styled(Icon)`
  background-image: url(${placeholderImageLocation});
`;

const Phone = styled(Icon)`
  background-image: url(${placeholderImagePhone});
`;

const Website = styled(Icon)`
  background-image: url(${placeholderImageWebsite});
`;

const RestaurantName = styled.p`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
`;

const RestaurantCategory = styled.p`
  font-family: Helvetica;
  font-weight: lighter;
  font-size: 19px;
  line-height: 34px;
  color: #ffffff;
  margin-top: 7px;
`;

const RestaurantReviewInfoContainer = styled.div`
  padding-top: 20px;
  display: flex;
  width: 80%;
`;

const LeftInfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding-right: 39px;
`;

const RightInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  p {
    font-family: Helvetica;
    font-style: normal;
    font-weight: 400;
    font-size: ${rem("20px")};
    line-height: 23px;
  }
`;

const FilterForm = styled.form`
  padding-bottom: 15px;
  display: flex;
  justify-content: flex-end;
`;
const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ScheduleInfo = styled.div`
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
  height: 48px;
  svg {
    margin-right: 12px;
    margin-left: 15px;
  }
  p {
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
`;
const PriceInfo = styled.div`
  height: 48px;

  margin-bottom: 15px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 12px;
    margin-left: 15px;
  }
  p {
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
`;

const OtherOptions = styled.div`
  display: flex;
  align-items: flex-start;
`;

const SignInMessage = styled.div`
  background-color: #fff;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 50px;
  font-size: 25px;
  margin-top: 40px;
  border-radius: 5px;
`;

const FilterInput = styled(FilterListInput)`
  background: #ffffff;
`;

const FilterButton = styled(Button)`
  margin-left: 20px;
`;

const OptionsButton = styled(BaseButton)`
  width: ${rem("250px")};
  margin-right: 40px;
`;

const RestaurantReview = (props) => {
  const push = useHistory();
  const {
    dispatch,
    match: {
      params: { restaurantId },
    },
    restaurantReducer: { restaurantObj, restaurantReviews },
    authReducer: { authenticated },
  } = props;

  useEffect(() => {
    dispatch(getRestaurantByIDAction(restaurantId));
    dispatch(getRestaurantReviewsAction(restaurantId));
    console.log("hola");
    return () => {
      dispatch(resetRestaurantObj());
    };
  }, []);

  const [userInfo, setUserInfo] = useState({
    filter: "",
  });

  const placeholderImage = "https://picsum.photos/2000/2000";

  const [searchParams, setSearchParams] = useState({
    search_string: "",
  });

  const handleSearch = (e) => {
    const value = e.currentTarget.value;
    setSearchParams({ ...searchParams, search_string: value });
  };

  //   const keyPressed = (event) => {
  //     if (event.key === "Enter") {
  //       dispatch(resetSearch());
  //       dispatch(reviewSearchAction(searchParams.search_string));
  //       setSearchParams({ ...searchParams, search_string: "" });
  //     }
  //   };

  const btnPressed = (e) => {
    e.preventDefault();
    console.log("search parms :  ", searchParams.search_string);
    dispatch(reviewSearchAction(searchParams.search_string));
    setSearchParams({ ...searchParams, search_string: "" });
  };

  return (
    <RestaurantReviewWrapper>
      <HeaderRestaurantReview>
        {restaurantObj ? (
          <img
            alt={"restaurant"}
            src={restaurantObj.image ? restaurantObj.image : placeholderImage}
          />
        ) : null}
        <HeaderMainInfoContainer>
          <HeaderMainInfo>
            <RestaurantName>
              {restaurantObj ? restaurantObj.name : null}
            </RestaurantName>
            <RestaurantCategory>
              {restaurantObj ? restaurantObj.category : null}
            </RestaurantCategory>
            <StarContainerFix>
              {restaurantObj ? (
                <StarRatingFix
                  avg_rating={parseInt(restaurantObj.avg_rating)}
                />
              ) : null}
              <p>
                {restaurantObj ? restaurantObj.no_of_ratings : null} reviews
              </p>
            </StarContainerFix>
          </HeaderMainInfo>
          <MapInfoContainer>
            <MapContainer />
            <InfoContainer>
              <LocationContainer>
                <Location />{" "}
                <p>{restaurantObj ? restaurantObj.street : null}</p>
              </LocationContainer>
              <PhoneContainer>
                <Phone /> <p>{restaurantObj ? restaurantObj.phone : null}</p>
              </PhoneContainer>
              <WebsiteContainer>
                <Website />{" "}
                <p>{restaurantObj ? restaurantObj.website : null}</p>
              </WebsiteContainer>
            </InfoContainer>
          </MapInfoContainer>
        </HeaderMainInfoContainer>
      </HeaderRestaurantReview>
      <RestaurantReviewInfoContainer>
        <LeftInfoContainer>
          <FilterForm>
            <FilterInput
              value={searchParams.search_string}
              //   onKeyPress={keyPressed}
              onChange={handleSearch}
              placeholder="Filter Reviews"
            />
            <FilterButton onClick={btnPressed}>FILTER</FilterButton>
          </FilterForm>
          <ReviewsContainer>
            {restaurantReviews ? (
              restaurantReviews.map((review, index) => {
                return <GenericWideReviewCard key={index} review={review} />;
              })
            ) : (
              <Spinner />
            )}
          </ReviewsContainer>
        </LeftInfoContainer>
        <RightInfoContainer>
          <ScheduleInfo>
              <h2>Opening Hours:</h2>
            <p>
              <FontAwesomeIcon icon={["fas", "clock"]} />
              {restaurantObj ? restaurantObj.opening_hours : null}
            </p>
          </ScheduleInfo>
          <PriceInfo>
              <h2>Price level:</h2>
            <p>
              <FontAwesomeIcon icon={["fas", "money-bill-wave"]} />
              {restaurantObj ? restaurantObj.price_level : null}
            </p>
          </PriceInfo>
          {authenticated ? (
            <OtherOptions>
              <Link to={`/restaurant/review/create/${restaurantId}`}>
                <OptionsButton>WRITE A REVIEW</OptionsButton>
              </Link>
              {restaurantObj ?( restaurantObj.is_from_logged_in_user ? <Link to={`/restaurant/edit/${restaurantId}`}>
                <OptionsButton>EDIT DATA</OptionsButton>
              </Link>: null): null}
            </OtherOptions>
          ) : (
            <SignInMessage>Please login to write a review</SignInMessage>
          )}
        </RightInfoContainer>
      </RestaurantReviewInfoContainer>
    </RestaurantReviewWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    restaurantReducer: state.restaurantReducer,
    authReducer: state.authReducer,
  };
};

export default connect(mapStateToProps)(RestaurantReview);
