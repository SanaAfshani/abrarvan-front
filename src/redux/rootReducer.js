import { combineReducers } from "redux";
import articleReducer from "./article/reducer";

const rootReducer = combineReducers({
  articleReducer,
});

export default rootReducer;
