import Axios from "../../axios";
import {
    SET_USER_PROFILE_COMMENTS,
    SET_USER_PROFILE_RESTAURANTS,
    SET_USER_PROFILE_REVIEWS, SET_USER_PROFILE_USER
} from "../actionTypes";

const setProfileRestaurants = (restaurants) => {
    return {
        type: SET_USER_PROFILE_RESTAURANTS,
        payload: restaurants,
    };
};

const setProfileReviews = (reviews) => {
    return {
        type: SET_USER_PROFILE_REVIEWS,
        payload: reviews,
    };
};

const setProfileComments = (comments) => {
    return {
        type: SET_USER_PROFILE_COMMENTS,
        payload: comments,
    };
};

export const getReviewsByUserIDAction = (userID) => async (dispatch, getState) => {

    try {
        const response = await Axios.get(`reviews/user/${userID}/`)
        console.log("Reviews of specific User", response.data)
        dispatch(setProfileReviews(response.data))
        return response
    } catch (error) {
        console.error('Reviews of specific User Error', error.data)
        return error
    }
}

export const getRestaurantsByUserIDAction = (userID) => async (dispatch, getState) => {

    try {
        const response = await Axios.get(`restaurants/user/${userID}/`)
        console.log("Restaurants of specific User", response.data)
        dispatch(setProfileRestaurants(response.data))
        return response
    } catch (error) {
        console.error('Restaurants of specific User Error', error)
        return error
    }
}

export const getCommentsByUserIDAction = (userID) => async (dispatch, getState) => {

    try {
        const response = await Axios.get(`review/comment/${userID}/`)
        console.log("Comments of specific User", response.data)
        dispatch(setProfileComments(response.data))
        return response
    } catch (error) {
        console.error('Comments of specific User Error', error)
        return error
    }
}

const setUserProfileObj = (profile) => {
    return {
        type: SET_USER_PROFILE_USER,
        payload: profile
    }
}


export const getUserByIDAction = (userID) => async (dispatch) => {
    try {
        const response = await Axios.get(`users/${userID}/`)
        console.log("Specific User", response.data)
        dispatch(setUserProfileObj(response.data))
        return response
    } catch (error) {
        console.log('Comments of specific User Error', error)
        return error
    }
}
