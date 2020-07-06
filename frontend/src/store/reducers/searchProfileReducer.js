import {GET_ALL_USERS} from "../actionTypes";

const initialState = {
    allUsersList: null,
};

export const searchProfileReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case GET_ALL_USERS: {
            return {...newState, allUsersList: action.payload};
        }
        default:
            return state;
    }
};
