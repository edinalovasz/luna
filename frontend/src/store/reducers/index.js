import {combineReducers} from "redux";
import { authReducer } from "./authReducer";
import { searchReducer } from "./searchReducer";
import { errorReducer } from "./errorReducer";
import { restaurantReducer } from "./restaurantReducer";
import { userProfileReducer } from "./userProfileReducer";

export const rootReducer = combineReducers({
    authReducer,
    errorReducer,
    searchReducer,
    restaurantReducer,
    userProfileReducer,
});
