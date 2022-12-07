import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
    posts: postReducer
});


//dummy reducers helps to change the whatever reducers need