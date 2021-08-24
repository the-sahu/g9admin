import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  businessListReducer,
  businessDetailsReducer,
  businessDeleteReducer,
  businessCreateReducer,
  businessUpdateReducer,
} from "./reducers/businessReducers";
import {
  teamListReducer,
  teamDetailsReducer,
  teamDeleteReducer,
  teamCreateReducer,
  teamUpdateReducer,
} from "./reducers/teamReducers";

import {
  articleListReducer,
  articleDetailsReducer,
  articleDeleteReducer,
  articleCreateReducer,
  articleUpdateReducer,
} from "./reducers/articleReducers";
import {
  testimonialListReducer,
  testimonialDetailsReducer,
  testimonialDeleteReducer,
  testimonialCreateReducer,
  testimonialUpdateReducer,
} from "./reducers/testimonialReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  businessList: businessListReducer,
  businessDetails: businessDetailsReducer,
  businessDelete: businessDeleteReducer,
  businessCreate: businessCreateReducer,
  businessUpdate: businessUpdateReducer,
  teamList: teamListReducer,
  teamDetails: teamDetailsReducer,
  teamDelete: teamDeleteReducer,
  teamCreate: teamCreateReducer,
  teamUpdate: teamUpdateReducer,
  articleList: articleListReducer,
  articleDetails: articleDetailsReducer,
  articleDelete: articleDeleteReducer,
  articleCreate: articleCreateReducer,
  articleUpdate: articleUpdateReducer,
  testimonialList: testimonialListReducer,
  testimonialDetails: testimonialDetailsReducer,
  testimonialDelete: testimonialDeleteReducer,
  testimonialCreate: testimonialCreateReducer,
  testimonialUpdate: testimonialUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
