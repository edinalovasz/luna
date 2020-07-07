import React from "react";
import {InputTextArea} from "../../style/GlobalInputs";
import styled from "styled-components";
import {PageContainer, StarContainer} from "../../style/GlobalWrappers";
import Food_pic from "../../assets/images/Vegan_Zürich_595.jpg";
import star from "../../assets/icons/star.svg";
import rem from "polished/lib/helpers/rem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CreateReviewWrapper = styled(PageContainer)`
    flex-direction: column ;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
`;

const CreateReviewHeader = styled.section`
    background-image: url(${Food_pic});
    background-repeat: no-repeat;
    background-size: cover;
    max-width:100%;
    max-height:100%;
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.div`
    height: ${rem("115px")};
    width: ${rem("420px")};
    margin: 23px 897px 49px 130px;
`

const RestaurantName = styled.h1`
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    color: #FFFFFF;
    margin-bottom: 5px;
`

const RestaurantCategory = styled.p`
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 5px;
`

const Stars = styled(StarContainer)`
    justify-content: flex-start;
`

const CreateReviewMainContainer = styled.section`
    height: 67.5vh;
`
const ReviewText = styled(InputTextArea)`
    resize: none;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    box-sizing: border-box;
    line-height: 23px;
    
    ::placeholder{
        color: #BBB7B7;
    }
`;

const ReviewCreate = props => {

    return (
        <CreateReviewWrapper>
            <CreateReviewHeader>
                <HeaderText>
                    <RestaurantName>Läderach Chocolatier Suisse</RestaurantName>
                    <RestaurantCategory>Chocolatiers & Shops</RestaurantCategory>
                    <Stars>
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                        <FontAwesomeIcon icon={["far", "star"]} />
                    </Stars>
                </HeaderText>
            </CreateReviewHeader>
            <CreateReviewMainContainer>
                <ReviewText placeholder=" Your review helps others learn about great local businesses.
                Please don't review this business if you received a freebie for writing this review,
                or if you're connected in any way to the owner or employees."
                        rows={20}>
                </ReviewText>
            </CreateReviewMainContainer>
        </CreateReviewWrapper>
    )
}


export default ReviewCreate;