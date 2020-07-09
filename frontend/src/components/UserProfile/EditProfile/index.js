import React, {useState} from "react";
import styled from "styled-components";
import {Title} from "../../../style/GlobalTitles";
import {rem} from "polished";
import {BaseInput, InputTextArea} from "../../../style/GlobalInputs";
import {BigButton} from "../../../style/GlobalButtons";
import {updateUserAction} from "../../../store/actions/userActions";
import {useHistory} from "react-router";
import {setUserProfileObj} from "../../../store/actions/userProfileActions";

const ProfileDetailTitle = styled(Title)`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #979797;
  margin-bottom: ${rem("11px")};
  margin-top: ${rem("24px")};
`;

const AvatarLabel = styled.label`
  margin: 10px 10px;
  padding: 15px 20px;
  border-radius: 30px;
  border: solid 1px #00000041;
  background-color: transparent;
  cursor: pointer;
  :hover {
    background-color: #9f9f9f;
  }
`
const AvatarInput = styled.input`
  display: none;
`

const ProfileCreateInput = styled(BaseInput)`
  background: #ffffff;
  box-sizing: border-box;
  width: ${rem("370px")};
`;

const ProfileCreateInputWide = styled(BaseInput)`
  background: #ffffff;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: ${rem("11px")};
`;

const ProfileCreateInputBig = styled(InputTextArea)`
  margin: ${rem("11px")} 0 ${rem("30px")} 0;
  background: #ffffff;
  box-sizing: border-box;
  width: 100%;
  resize: vertical;
`;

const SaveDeleteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  a {
    color: red;
    cursor: pointer;
  }
`;

const ProfileRightBottomWrapper = styled.form`
  width: 100%;
  border: 1px solid #ebebeb;
  background: #ffffff;
  margin-top: 1px;
  /* margin-right: 12px; */
  padding: 24px 16px 0px 16px;
  h1 {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #303030;
    margin-bottom: 12px;
  }
`;
const ProfileBtn = styled(BigButton)`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const EditProfile = (props) => {
    const {push} = useHistory();
    const {
        handleClick,
        dispatch,
        userObj: {
            id,
            first_name,
            last_name,
            banner,
            avatar,
            username,
            location,
            about_me,
            phone_number,
            things_user_loves

        }
    } = props

    const [userInfo, setUserInfo] = useState({
        first_name: `${first_name}`,
        last_name: `${last_name}`,
        username: `${username}`,
        location: `${location}`,
        about_me: `${about_me}`,
        phone_number: `${phone_number}`,
        things_user_loves: `${things_user_loves}`,
        avatar: null,
        avatarUrl: ``,
        banner: null,
        bannerUrl: ``
    });
    console.log("user info", userInfo)
    const onChangeHandler = (event, property) => {
        const value = event.currentTarget.value;
        setUserInfo({...userInfo, [property]: value});
    };
    const handleSubmit = async e => {
        e.preventDefault();
        handleClick(e)
        const form = new FormData()
        form.append('first_name', userInfo.first_name)
        form.append('last_name', userInfo.last_name)
        form.append('username', userInfo.username)
        form.append('location', userInfo.location)
        form.append('about_me', userInfo.about_me)
        form.append('phone_number', userInfo.phone_number)
        if (userInfo.things_user_loves.length) {
            userInfo.things_user_loves.split(",").forEach((el, ind) => {
                form.append(`things_user_loves`, el)
            })
        }
        if (userInfo.avatar) {
            form.append('avatar', userInfo.avatar)
        }
        if (userInfo.banner) {
            form.append('banner', userInfo.banner)
        }
        const response = await dispatch(updateUserAction(form));
        if (response.status === 200) {
            dispatch(setUserProfileObj(response.data))
            push(`/profile`)
        }

    };

    const avatarSelectHandler = e => {
        if (e.target.files[0]) {
            setUserInfo({...userInfo, avatarUrl: URL.createObjectURL(e.target.files[0]), avatar: e.target.files[0]})
        }
    }
    const bannerSelectHandler = e => {
        if (e.target.files[0]) {
            setUserInfo({...userInfo, bannerUrl: URL.createObjectURL(e.target.files[0]), banner: e.target.files[0]})
        }
    }

    return (
        <ProfileRightBottomWrapper>
            <h1>Edit user profile</h1>
            <div>
                <ProfileDetailTitle>Username </ProfileDetailTitle>
                <ProfileCreateInput onChange={(e) => onChangeHandler(e, "username")}
                                    placeholder="Enter username"
                                    defaultValue={username}
                                    type="text"
                                    required/>
            </div>
            <div>
                <ProfileDetailTitle>First Name </ProfileDetailTitle>
                <ProfileCreateInput onChange={(e) => onChangeHandler(e, "first_name")}
                                    placeholder="Enter first name"
                                    defaultValue={first_name}
                                    type="text"
                                    required/>
            </div>
            <div>
                <ProfileDetailTitle>Last Name </ProfileDetailTitle>
                <ProfileCreateInput onChange={(e) => onChangeHandler(e, "last_name")}
                                    placeholder="Enter last name"
                                    defaultValue={last_name}
                                    type="text"
                                    required/>
            </div>
            <div>
                <ProfileDetailTitle>Location </ProfileDetailTitle>
                <ProfileCreateInput onChange={(e) => onChangeHandler(e, "location")}
                                    placeholder="Enter location"
                                    defaultValue={location}
                                    type="text"
                                    required/>
            </div>
            <div>
                <ProfileDetailTitle>Phone </ProfileDetailTitle>
                <ProfileCreateInput onChange={(e) => onChangeHandler(e, "phone_number")}
                                    placeholder="Enter your phone number"
                                    defaultValue={phone_number}
                                    required
                                    type={"tel"}/>
            </div>
            <div>
                <ProfileDetailTitle>Things I love </ProfileDetailTitle>
                <ProfileCreateInputWide onChange={(e) => onChangeHandler(e, "things_user_loves")}
                                        placeholder="Add things you love separated by comas..."
                                        defaultValue={things_user_loves}
                                        type="text"/>
            </div>
            <div>
                <ProfileDetailTitle>About Me</ProfileDetailTitle>
                <ProfileCreateInputBig onChange={(e) => onChangeHandler(e, "about_me")}
                                       placeholder="About you"
                                       defaultValue={about_me}
                                       rows={10}/>
            </div>
            <ButtonsDiv>
                <AvatarLabel htmlFor="avatar">{userInfo.avatar ? "Uploaded" : "Upload Avatar"}</AvatarLabel>
                <AvatarInput id="avatar" accept={"image/*"} onChange={avatarSelectHandler} type="file"/>
                <AvatarLabel htmlFor="banner">{userInfo.banner ? "Uploaded" : "Upload Banner"}</AvatarLabel>
                <AvatarInput id="banner" accept={"image/*"} onChange={bannerSelectHandler} type="file"/>
            </ButtonsDiv>
            <SaveDeleteWrapper>
                <ProfileBtn id={"reviews"} onClick={handleSubmit}>Save</ProfileBtn>
                <a>Delete Account</a>
            </SaveDeleteWrapper>
        </ProfileRightBottomWrapper>
    )
}

export default EditProfile