import Axios from "../../axios";


export const createCommentAction = (reviewID, data) => async (dispatch) => {
    try {
        const response = await Axios.post(`review/comment/new/${reviewID}/`, data);
        console.log("comment data:", response.data)
        return response
    } catch (error) {
        console.log(`error`, error);
        return error
    }
}

export const deleteCommentAction = commentID => async (dispatch) => {
    try {
        const response = await Axios.delete(`review/comment/${commentID}/`);
        console.log("comment has been deleted! ", response)
        return response
    } catch (error) {
        console.log(`error`, error);
        return error
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

