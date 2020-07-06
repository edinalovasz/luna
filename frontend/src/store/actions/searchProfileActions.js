import Axios from "../../axios";
import {GET_ALL_USERS} from "../actionTypes";


export const getProfiles = (profiles) => {
    return {
        type: GET_ALL_USERS,
        payload: profiles,
    };
};

export const getProfilesAction = () => async (dispatch) => {
    try {
        const response = await Axios.get('users/list/');
        console.log("profiles list", response.data);
        dispatch(getProfiles(response.data))
        return response
    } catch (error) {
        console.log('error', error)
    }

}

