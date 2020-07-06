import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Button,
  BigButton,
  SmallButton,
  SplitButton,
  LikeButton,
  CommentButton,
  LoginButton,
  SignupButton,
  SocialButton,
} from "../../style/GlobalButtons";

import {
  SocialsContainer,
  StarContainer,
  TitleContainer,
} from "../../style/GlobalWrappers";
import {
  MainTitle,
  TitleHr,
  SmallTitleHr,
  BigTitleHr,
} from "../../style/GlobalTitles";
import {
  BaseInput,
  SearchInput,
  FilterListInput,
  CommentInput,
  InputTextArea,
} from "../../style/GlobalInputs";

function Template() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Buttons</h1>
        <br></br>
        <Button>Button</Button>
        <p>.</p>
        <SmallButton>Small Btn</SmallButton>
        <p>.</p>
        <BigButton>Big Button</BigButton>
        <p>.</p>
        <SplitButton>
          <SignupButton>Signup</SignupButton>
          <LoginButton>Login</LoginButton>
        </SplitButton>
        <p>.</p>
        <SplitButton>
          <LikeButton>
            <FontAwesomeIcon icon={["fa", "thumbs-up"]} />
            Like 11
          </LikeButton>
          <CommentButton>Comment 22</CommentButton>
        </SplitButton>
        <br></br>
        <br></br>
        <h1>Icons</h1>
        <br></br>
        <SocialsContainer>
          <SocialButton>
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </SocialButton>
          <SocialButton>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </SocialButton>
          <SocialButton>
            <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
          </SocialButton>
          <SocialButton>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </SocialButton>
        </SocialsContainer>
        <br></br>
        <br></br>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: "12px",
          }}
        >
          <FontAwesomeIcon icon={["fas", "clock"]} />
          <FontAwesomeIcon icon={["fas", "money-bill-wave"]} />
          <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
          <FontAwesomeIcon icon={["fas", "mobile"]} />
          <FontAwesomeIcon icon={["fas", "laptop"]} />
        </div>
        <br></br>
        <br></br>

        <StarContainer>
          <FontAwesomeIcon icon={["fas", "star"]} />
          <FontAwesomeIcon icon={["fas", "star"]} />
          <FontAwesomeIcon icon={["fas", "star"]} />
          <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
          <FontAwesomeIcon icon={["far", "star"]} />
        </StarContainer>
        <br></br>
        <br></br>
        <h1>Inputs</h1>
        <br></br>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <BaseInput placeholder="Base Input Field" type="text"></BaseInput>
          <SearchInput
            placeholder="Search Input Field"
            type="text"
          ></SearchInput>
          <FilterListInput
            placeholder="Filter List Input Field"
            type="text"
          ></FilterListInput>
          <CommentInput
            placeholder="Comment Input Field"
            type="text"
          ></CommentInput>
          <InputTextArea
            placeholder="Your review helps others learn about great local businesses. &#10;
        Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
            type="text"
          ></InputTextArea>
        </div>
        <br></br>
        <br></br>
        <h1>Titles</h1>
        <br></br>
        <TitleContainer>
          <MainTitle>Main Title</MainTitle>
          <BigTitleHr></BigTitleHr>
        </TitleContainer>
        <br></br>
        <TitleContainer>
          <MainTitle>Main Title</MainTitle>
          <TitleHr></TitleHr>
        </TitleContainer>
        <br></br>
        <TitleContainer>
          <MainTitle>Main Title</MainTitle>
          <SmallTitleHr></SmallTitleHr>
        </TitleContainer>
        <br></br>
      </header>
    </div>
  );
}

export default Template;