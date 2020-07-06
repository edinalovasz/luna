import {SET_ERROR} from "../actionTypes";
import Axios from "../../axios";
import {setLoggedInUser} from "./loginActions";



export const getLoggedInUserAction = () => async (dispatch) => {
    try {
        const response = await Axios.get(`me/`)
        dispatch(setLoggedInUser(response.data))
        localStorage.setItem("user", JSON.stringify(response.data));
        return response
    } catch (error) {
        console.log('error', error.response.data)
        return error
    }
}


export const updateUserAction = data => async (dispatch) => {
    try {
        const response = await Axios.patch(`me/`, data)
        console.log("in the patch:", response.data)
        dispatch(setLoggedInUser(response.data))
        return response
    } catch (error) {
        console.log('error', error.response.data)
        return error
    }
}



