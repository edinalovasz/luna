import {USER_LOGIN, USER_LOGOUT} from "../Actiontypes";

const initialState = {
    token: null,
    authenticated: false,
};

export const authReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case USER_LOGIN: {
            return {...newState, token: action.token, authenticated: true};
        }
        case USER_LOGOUT: {
            localStorage.clear()
            return {...initialState};
        }
        default:
            return state;
    }
};
