import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootReducer";
const middleWare = [thunk];

const store = createStore(
  rootReducers,
  compose(applyMiddleware(...middleWare))
);
export default store;
