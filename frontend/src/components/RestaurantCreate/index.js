import React from "react";
import {BaseInput} from "../../style/GlobalInputs";
import styled from "styled-components";
import rem from "polished/lib/helpers/rem";
import {MainTitle, Title, TitleHr} from "../../style/GlobalTitles";
import {PageContainer} from "../../style/GlobalWrappers";
import {BigButton} from "../../style/GlobalButtons";

const RestaurantCreateWrapper = styled(PageContainer)`
    flex-direction: column ;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: 95%;
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
    margin-bottom: ${rem("28px")};
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

const RestaurantCreateSelect = styled.select`
    background: #FFFFFF;
    box-sizing: border-box;
    width: ${rem("370px")};
    height: ${rem("50px")};
    font-family: Helvetica, sans-serif;
    font-size: ${rem("22px")};
    line-height: ${rem("26px")};
    padding: ${rem("5px")};
    border: 1px solid #ebebeb;
    border-radius: 3px;
    color: #D8D8D8;
`;

const Options = styled.option`
    color: #000
`;

const CategoryTitle = styled(Title)`
    font-family: Karla, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #4C4C4C;
    height: ${rem("23px")};
    margin-bottom: ${rem("9px")};
`;

const CategoryDetailTitle = styled(Title)`
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #979797;
    margin-bottom: ${rem("11px")};
`;

const RequiredText = styled.p`
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #B00000;
    margin-top: ${rem("5px")};
`;

const InputLabel = styled.label`
      border-radius: ${rem("30px")};
      border: none;
      width: ${rem("216px")};
      height: ${rem("38px")};
      background: #e47d31;
      cursor: pointer;
      font-style: normal;
      font-weight: normal;
      line-height: ${rem("18px")};
      text-align: center;
      padding-top: ${rem("10px")};
      color: #ffffff;
      margin-top: ${rem("12px")};

      :hover {
          background-color: #cd702c;
      }
      :active {
          background-color: #cd702c;
      }
`

const InputFile = styled.input`
      display: none;
      
`

const CreateRestaurantButton = styled(BigButton)`
    margin-top: ${rem("30px")};
`;


const RestaurantCreate = props => {

    return (
        <RestaurantCreateWrapper>
            <FormWrapper>
                <RestaurantCreateTitle>Create new restaurant</RestaurantCreateTitle>
                <RestaurantCreateTitleHr/>
                <FormContainer>
                    <InputContainer>
                        <CategoryTitle>Basic</CategoryTitle>
                        <CategoryDetailTitle>Name *</CategoryDetailTitle>
                        <RestaurantCreateInput/>
                        <RequiredText>This field is required</RequiredText>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle/>
                        <CategoryDetailTitle>Category *</CategoryDetailTitle>
                        <RestaurantCreateSelect>
                            <Options label="Select a value..."/>
                            <Options value={1}>Ethnic</Options>
                            <Options value={2}>Fast food</Options>
                            <Options value={3}>Fast casual</Options>
                            <Options value={4}>Casual dining</Options>
                            <Options value={5}>Premium casual</Options>
                            <Options value={6}>Family style</Options>
                            <Options value={7}>Fine dining</Options>
                            <Options value={8}>Pub</Options>
                        </RestaurantCreateSelect>
                        <RequiredText>This field is required</RequiredText>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle/>
                        <CategoryDetailTitle>Country *</CategoryDetailTitle>
                        <RestaurantCreateSelect>
                            <Options label={"Select a value..."}/>
                            <Options>Switzerland</Options>
                            <Options>Germany</Options>
                            <Options>Italy</Options>
                            <Options>France</Options>
                            {/*https://restcountries.eu/rest/v2/all*/}
                        </RestaurantCreateSelect>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Address</CategoryTitle>
                        <CategoryDetailTitle>Street *</CategoryDetailTitle>
                        <RestaurantCreateInput/>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle/>
                        <CategoryDetailTitle>City *</CategoryDetailTitle>
                        <RestaurantCreateInput/>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle/>
                        <CategoryDetailTitle>Zip</CategoryDetailTitle>
                        <RestaurantCreateInput/>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Contact</CategoryTitle>
                        <CategoryDetailTitle>Website</CategoryDetailTitle>
                        <RestaurantCreateInput/>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle/>
                        <CategoryDetailTitle type={"tel"}>Phone *</CategoryDetailTitle>
                        <RestaurantCreateInput/>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle/>
                        <CategoryDetailTitle type={"email"}>Email</CategoryDetailTitle>
                        <RestaurantCreateInput/>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle>Details</CategoryTitle>
                        <CategoryDetailTitle>Opening hours *</CategoryDetailTitle>
                        <RestaurantCreateInput/>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle/>
                        <CategoryDetailTitle>Price level</CategoryDetailTitle>
                        <RestaurantCreateSelect/>
                    </InputContainer>
                    <InputContainer>
                        <CategoryTitle/>
                        <CategoryDetailTitle>Image</CategoryDetailTitle>
                        <InputLabel htmlFor="restaurant_image">Choose a file...</InputLabel>
                            <InputFile id="restaurant_image" accept={"image/*"} type="file"/>
                    </InputContainer>
                </FormContainer>
                <CreateRestaurantButton>Submit</CreateRestaurantButton>
            </FormWrapper>
        </RestaurantCreateWrapper>
    )
}


export default RestaurantCreate;