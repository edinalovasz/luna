

import Axios from "../../axios";

import {
    ADD_REVIEW_TO_LIST,
    CHANGE_SEARCH_TAB_INDEX,
    GET_MY_COMMENTED_REVIEWS,
    GET_MY_LIKED_REVIEWS,
    LIKE_REVIEW, REMOVE_REVIEW_IN_LIST,
    UPDATE_REVIEW_IN_LIST
} from "../actionTypes";

export const changeSearchTab = (index) => {
    return {
        type: CHANGE_SEARCH_TAB_INDEX,
        payload: index,
    };
};

export const getReviews = (array, typeProperty) => {
    return {
        type: typeProperty,
        payload: array,
    };
};

export const getLikedCommentedReviewsAction = typeProperty => async (dispatch) => {

    let path;
    if (typeProperty === GET_MY_LIKED_REVIEWS) {
        path = 'reviews/likes/'
    } else if (typeProperty === GET_MY_COMMENTED_REVIEWS) {
        path = 'reviews/comments/'
    }

    try {
        const response = await Axios.get(path);
        console.log("response ", response.data);
        dispatch(getReviews(response.data, typeProperty));
    } catch (error) {
        console.log(`${typeProperty} error`, error);
    }
}

export const addReviewToList = (review) => {
    return {
        type: ADD_REVIEW_TO_LIST,
        payload: review,
    };
}

export const createReviewAction = (restaurantID, data) => async (dispatch) => {
    try {
        const response = await Axios.post(`reviews/new/${restaurantID}/`, data);
        console.log("response", response.data)
        // dispatch(addReviewToList(response.data))
        return response
    } catch (error) {
        console.log(`error`, error.response)
        return error
    }
}

export const updateReviewInList = (review) => {
    return {
        type: UPDATE_REVIEW_IN_LIST,
        payload: review,
    };
}

export const updateReviewAction = (data, reviewID) => async (dispatch) => {
    console.log("Edit Data:  ", {...data});
    try {
        const response = await Axios.patch(`reviews/${reviewID}/`, data);
        console.log("In the update review, response data", response.data)
        // dispatch(updateReviewInList(response.data))
        return response
    } catch (error) {
        console.log(`error:`, error)
        return error
    }
}

export const removeReviewFromList = (postId) => {
    return {
        type: REMOVE_REVIEW_IN_LIST,
        payload: postId,
    };
}

export const deleteReviewAction = reviewID => async (dispatch) => {

    try {
        const response = await Axios.delete(`reviews/${reviewID}/`);
        console.log("response", response)
        // dispatch(removeReviewFromList(reviewID))
        return response
    } catch (error) {
        console.error('catch in deletePostAction:', error)
        return error
    }
}


export const likeReview = (reviewID, updatedReview, reviewType) => {
    return {
        type: reviewType,
        payload: {reviewID, updatedReview, reviewType}
    }
};

export const likeReviewAction = (reviewID, reviewType) => async (dispatch, getState) => {
    try {
        const response = await Axios.post(`reviews/${reviewID}/`)
        console.log("payload data", response.data)
        // dispatch(likeReview(reviewID, response.data, reviewType))
    } catch (error) {
        console.error('catch in likePostAction:', error.data)
    }
}

export const getReviewCommentsAction = reviewID => async (dispatch) => {
    try {
        const response = await Axios.get(`review/comment/${reviewID}/`);
        return response
    } catch (error) {
        console.log(`error`, error);
        return error
    }
}


