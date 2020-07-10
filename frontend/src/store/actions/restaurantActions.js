import Axios from "../../axios";
import {SET_RESTAURANT_OBJ, SET_RESTAURANT_REVIEWS, RESET_RESTAURANT} from "../actionTypes";
import {resetError, setError} from "./errorActions";

const setRestaurantReviews = (reviews) => {
    return {
        type: SET_RESTAURANT_REVIEWS,
        payload: reviews,
    };
};

const setRestaurantObj = (restaurant) => {
    return {
        type: SET_RESTAURANT_OBJ,
        payload: restaurant,
    };
};

export const resetRestaurantObj = () => {
    return {
        type: RESET_RESTAURANT,
    };
};


export const getRestaurantReviewsAction = restaurantID => async (dispatch) => {
    try {
        const response = await Axios.get(`reviews/restaurant/${restaurantID}/`);
        console.log("Restaurant Reviews", response.data)
        dispatch(setRestaurantReviews(response.data))
        return response
    } catch (error) {
        console.log(`error`, error.response)
        return error
    }
}

export const createRestaurantAction = data => async (dispatch) => {
    try {
        const response = await Axios.post(`restaurants/new/`, data);
        // TODO push user to feed page after creation of restaurant
        // TODO append created post to beginning of search reducer restaurants
        console.log("New restaurant", response.data)
        dispatch(resetError())
        return response
    } catch (error) {
        console.log(`error`, error.response)
        dispatch(setError(Object.keys(error.response.data)[0]))
        return error
    }
}

export const updateRestaurantAction = (restaurantID,data) => async (dispatch) => {
    // console.log([...data])
    try {
        const response = await Axios.patch(`restaurants/${restaurantID}/`, data);
        // console.log("Updated restaurant", response.data)
        dispatch(setRestaurantObj(response.data))
        dispatch(resetError())
        return response
    } catch (error) {
        // console.log(`error`, error.response)
        console.log(`error key`, Object.keys(error.response.data)[0])
        dispatch(setError(Object.keys(error.response.data)[0]))
        return error
    }
}

export const deleteRestaurantAction = (restaurantID) => async (dispatch) => {
    try {
        const response = await Axios.delete(`/api/restaurants/${restaurantID}/`);
        console.log("Updated restaurant", response.data)
        // TODO Push user to home page after restaurant deletion
        return response
    } catch (error) {
        console.log(`error`, error.response)
        return error
    }
}

export const getRestaurantByIDAction = restaurantID => async (dispatch) => {

    try {
        const response = await Axios.get(`/restaurants/${restaurantID}/`);
        console.log(`Restaurant ID ${restaurantID}`, response.data)
        dispatch(setRestaurantObj(response.data))
        return response
    } catch (error) {
        console.log(`error`, error.response)
        return error
    }
}