import React from "react";

const Navigation = (props) => {
  return (
    <div>
      {" "}
      <Wrapper>
        <Header>
          <NavSectionLeft onClick={() => history.push("/feed")}>
            <MotionLogo src={motionLogo} />
            <MotionTitle>Motion</MotionTitle>
          </NavSectionLeft>
          <NavSectionMiddle>
            <Link to="/feed">
              <PostWrapper>
                <Icon src={postLogo} />
                <TabTitles>Posts</TabTitles>
              </PostWrapper>
            </Link>
            <Link to="/users">
              <FriendsWrapper>
                <Icon src={friendsIconGrey} />
                <TabTitles>Find Friends</TabTitles>
              </FriendsWrapper>
            </Link>
          </NavSectionMiddle>
          <NavSectionRight>
            <IconContainer
              onClick={() => setShowNotificationMenu(!showNotificationMenu)}
            >
              <Icon src={bell} />
              <NotificationCounter />
            </IconContainer>
            {showNotificationMenu && <NotificationMenu />}
            <Link to="/userProfile" replace>
              <UserIcon src={avatar} />
            </Link>
            <IconContainer onClick={() => setShowProfileMenu(!showProfileMenu)}>
              <Icon src={menu} />
            </IconContainer>
            {showProfileMenu && (
              <ProfileMenuModal redirectHandler={redirectHandler} />
            )}
          </NavSectionRight>
        </Header>
        {children}
      </Wrapper>
    </div>
  );
};

export default Navigation;
