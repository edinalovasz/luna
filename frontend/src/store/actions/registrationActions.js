import {resetError, setError} from "./errorActions";
import Axios from "../../axios";


export const sendCode = data => async (dispatch) => {
    try {
        console.log("data obj", data)
        const response = await Axios.post('registration/', data);
        // TODO use an axios await on COMPONENT to check whether the code sent was successful
        dispatch(resetError())
        console.log("success!", response.data)
        return response
    } catch (error) {
        console.log("error message", error.response)
        // dispatch(setError(error.response.data))
        return error
    }
}

export const validate = data => async (dispatch) => {
    try {
        const response = await Axios.post('auth/registration/validation/', data);
        // TODO clear registration data in COMPONENT when successfull
        // TODO push to sign in page on COMPONENT with axios await
        return response
    } catch (error) {
        return error.response
    }
}