import { combineReducers } from "redux";
import postsReducer from "./posts/postsReducer.js";

const rootReducer =  combineReducers({
    Posts:postsReducer
}

)

export default rootReducer