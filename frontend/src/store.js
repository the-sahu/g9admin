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
import { fundCreateReducer, fundDeleteReducer, fundListReducer } from "./reducers/fundReducers";
import {
  portfolioListReducer,
  portfolioDetailsReducer,
  portfolioDeleteReducer,
  portfolioCreateReducer,
  portfolioUpdateReducer,
  portfolioListByClientIdReducer,
} from "./reducers/portfolioReducers";

const reducer = combineReducers({
  businessList: businessListReducer,
  businessDetails: businessDetailsReducer,
  businessDelete: businessDeleteReducer,
  businessCreate: businessCreateReducer,
  businessUpdate: businessUpdateReducer,
  fundList: fundListReducer,
  fundDelete: fundDeleteReducer,
  fundCreate: fundCreateReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  portfolioList: portfolioListReducer,
  portfolioListByClientId: portfolioListByClientIdReducer,
  portfolioDetails: portfolioDetailsReducer,
  portfolioDelete: portfolioDeleteReducer,
  portfolioCreate: portfolioCreateReducer,
  portfolioUpdate: portfolioUpdateReducer,
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
