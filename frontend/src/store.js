import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

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
import { withdrawFundCreateReducer,
         withdrawFundDeleteReducer,
          withdrawFundListReducer } from "./reducers/withdrawFundReducers";
import { sellPortfolioCreateReducer,
  sellPortfolioDeleteReducer,
  sellPortfolioDetailsReducer,
  sellPortfolioListByClientIdReducer,
  sellPortfolioListReducer, 
  sellPortfolioUpdateReducer} from "./reducers/sellPortfolioReducers";

const reducer = combineReducers({

  fundList: fundListReducer,
  fundDelete: fundDeleteReducer,
  fundCreate: fundCreateReducer,
  withdrawFundCreate: withdrawFundCreateReducer,
  withdrawFundDelete:withdrawFundDeleteReducer,
  withdrawFundList:withdrawFundListReducer,
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
  sellportfolioList: sellPortfolioListReducer,
  sellportfolioCreate:sellPortfolioCreateReducer,
  sellportfolioDelete:sellPortfolioDeleteReducer,
  sellportfolioDetails:sellPortfolioDetailsReducer,
  sellportfolioListByClientId:sellPortfolioListByClientIdReducer,
  sellportfolioUpdate:sellPortfolioUpdateReducer,
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
