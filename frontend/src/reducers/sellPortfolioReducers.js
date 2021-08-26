import { SELL_PORTFOLIO_CREATE_FAIL,
   SELL_PORTFOLIO_CREATE_REQUEST, 
   SELL_PORTFOLIO_CREATE_RESET, 
   SELL_PORTFOLIO_CREATE_SUCCESS,
    SELL_PORTFOLIO_DELETE_FAIL, 
    SELL_PORTFOLIO_DELETE_REQUEST, 
    SELL_PORTFOLIO_DELETE_SUCCESS, 
    SELL_PORTFOLIO_DETAILS_FAIL, 
    SELL_PORTFOLIO_DETAILS_REQUEST, 
    SELL_PORTFOLIO_DETAILS_SUCCESS, 
    SELL_PORTFOLIO_LIST_BY_CLIENT_ID_FAIL, 
    SELL_PORTFOLIO_LIST_BY_CLIENT_ID_REQUEST, 
    SELL_PORTFOLIO_LIST_BY_CLIENT_ID_SUCCESS, 
    SELL_PORTFOLIO_LIST_FAIL, 
    SELL_PORTFOLIO_LIST_REQUEST, 
    SELL_PORTFOLIO_LIST_SUCCESS, 
    SELL_PORTFOLIO_UPDATE_REQUEST, 
    SELL_PORTFOLIO_UPDATE_RESET,
     SELL_PORTFOLIO_UPDATE_FAIL, 
     SELL_PORTFOLIO_UPDATE_SUCCESS } from "../constants/sellPortfolioConstants";


export const sellPortfolioListReducer = (state = { sellportfolios: [] }, action) => {
  switch (action.type) {
    case SELL_PORTFOLIO_LIST_REQUEST:
      return { loading: true, sellportfolios: [] };
    case SELL_PORTFOLIO_LIST_SUCCESS:
      return {
        loading: false,
        sellportfolios: action.payload,
      };
    case SELL_PORTFOLIO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sellPortfolioListByClientIdReducer = (
  state = { clientSellPortfolios: [] },
  action
) => {
  switch (action.type) {
    case SELL_PORTFOLIO_LIST_BY_CLIENT_ID_REQUEST:
      return { loading: true, clientSellPortfolios: [] };
    case SELL_PORTFOLIO_LIST_BY_CLIENT_ID_SUCCESS:
      return {
        loading: false,
        clientSellPortfolios: action.payload,
      };
    case SELL_PORTFOLIO_LIST_BY_CLIENT_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sellPortfolioDetailsReducer = (state = { sellportfolio: {} }, action) => {
  switch (action.type) {
    case SELL_PORTFOLIO_DETAILS_REQUEST:
      return { ...state, loading: true };
    case SELL_PORTFOLIO_DETAILS_SUCCESS:
      return { loading: false, sellportfolio: action.payload };
    case SELL_PORTFOLIO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sellPortfolioDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SELL_PORTFOLIO_DELETE_REQUEST:
      return { loading: true };
    case SELL_PORTFOLIO_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SELL_PORTFOLIO_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sellPortfolioCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SELL_PORTFOLIO_CREATE_REQUEST:
      return { loading: true };
    case SELL_PORTFOLIO_CREATE_SUCCESS:
      return { loading: false, success: true, sellportfolio: action.payload };
    case SELL_PORTFOLIO_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case SELL_PORTFOLIO_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const sellPortfolioUpdateReducer = (state = { sellportfolio: {} }, action) => {
  switch (action.type) {
    case SELL_PORTFOLIO_UPDATE_REQUEST:
      return { loading: true };
    case SELL_PORTFOLIO_UPDATE_SUCCESS:
      return { loading: false, success: true, sellportfolio: action.payload };
    case SELL_PORTFOLIO_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SELL_PORTFOLIO_UPDATE_RESET:
      return { sellportfolio: {} };
    default:
      return state;
  }
};
