import {combineReducers} from "redux";
import { authReducer } from "./authReducer";
import { searchProfileReducer } from "./searchProfileReducer";
import { errorReducer } from "./errorReducer";

export const rootReducer = combineReducers({
    authReducer,
    errorReducer,
    searchProfileReducer,
});
