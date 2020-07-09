import {
    ADD_REVIEW_TO_LIST, LIKE_RESTAURANT_PROFILE_REVIEW, RESET_RESTAURANT, REMOVE_REVIEW_IN_LIST,
    SET_RESTAURANT_OBJ, SET_RESTAURANT_REVIEWS, UPDATE_REVIEW_IN_LIST

} from "../actionTypes";


const initialState = {
    restaurantObj: null,
    restaurantReviews: null,

};

export const restaurantReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case SET_RESTAURANT_OBJ: {

            return {...newState, restaurantObj: action.payload};
        }
        case SET_RESTAURANT_REVIEWS: {
            return {...newState, restaurantReviews: action.payload};
        }
        case RESET_RESTAURANT: {
            return initialState;
        }
        case ADD_REVIEW_TO_LIST: {
            if (!newState.restaurantReviews) {
                return {...newState, restaurantReviews: [action.payload]};
            }
            return {...newState, restaurantReviews: [action.payload, ...newState.restaurantReviews]};
        }
        case UPDATE_REVIEW_IN_LIST: {
            let index = newState.restaurantReviews.findIndex(review => review.id === action.payload.id)
            newState.restaurantReviews[index] = action.payload
            return {...newState, restaurantReviews: newState.restaurantReviews};
        }
        case REMOVE_REVIEW_IN_LIST: {
            const newRestaurantReviews = newState.restaurantReviews.filter(
                review => review.id !== action.payload
            );
            return {...newState, restaurantReviews: newRestaurantReviews};
        }
        default:
            return state;
    }
};
