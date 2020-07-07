import React from "react";
import {BaseInput} from "../../style/GlobalInputs";
import styled from "styled-components";
import rem from "polished/lib/helpers/rem";
import {MainTitle, Title, TitleHr} from "../../style/GlobalTitles";

const RestaurantCreateWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    flex-direction: column ;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
    height: ${rem("603px")};
    border: 1px solid red;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 90%;
    border: 1px solid red;
`;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 34px;
`;

const RestaurantCreateTitle = styled(MainTitle)`
        margin-bottom: ${rem("16px")};
`;

const RestaurantCreateTitleHr = styled(TitleHr)`
    margin-bottom: ${rem("60px")};
`;

const InputContainer = styled.div`
    height: ${rem("140px")};
    width: ${rem("370px")};
    display: flex;
    flex-direction: column;
`;

const RestaurantCreateInput = styled(BaseInput)`
    background: #FFFFFF;
    box-sizing: border-box;
    width: ${rem("370px")};
`;

const CategoryTitle = styled(Title)`
    font-family: Karla, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #4C4C4C;
`;

const CategoryDetailTitle = styled(Title)`
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #979797;
`;

const RequiredText = styled.p`
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #B00000;
`;

const RestaurantCreate = props => {

    return (
        <RestaurantCreateWrapper>
            <FormWrapper>
                <RestaurantCreateTitle>Create new restaurant</RestaurantCreateTitle>
                <RestaurantCreateTitleHr></RestaurantCreateTitleHr>
                <FormContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                        <RequiredText>This field is required</RequiredText>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle></CategoryTitle>
                        <CategoryDetailTitle>Category *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                        <RequiredText>This field is required</RequiredText>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput></RestaurantCreateInput>
                    </InputContainer>
                </FormContainer>
            </FormWrapper>
        </RestaurantCreateWrapper>
    )
}


export default RestaurantCreate;