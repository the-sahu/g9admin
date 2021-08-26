import {
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
  PORTFOLIO_LIST_FAIL,
  PORTFOLIO_DETAILS_REQUEST,
  PORTFOLIO_DETAILS_SUCCESS,
  PORTFOLIO_DETAILS_FAIL,
  PORTFOLIO_DELETE_SUCCESS,
  PORTFOLIO_DELETE_REQUEST,
  PORTFOLIO_DELETE_FAIL,
  PORTFOLIO_CREATE_REQUEST,
  PORTFOLIO_CREATE_SUCCESS,
  PORTFOLIO_CREATE_FAIL,
  PORTFOLIO_CREATE_RESET,
  PORTFOLIO_UPDATE_REQUEST,
  PORTFOLIO_UPDATE_SUCCESS,
  PORTFOLIO_UPDATE_FAIL,
  PORTFOLIO_UPDATE_RESET,
  PORTFOLIO_LIST_BY_CLIENT_ID_FAIL,
  PORTFOLIO_LIST_BY_CLIENT_ID_REQUEST,
  PORTFOLIO_LIST_BY_CLIENT_ID_SUCCESS,
} from "../constants/portfolioConstants";

export const portfolioListReducer = (state = { portfolios: [] }, action) => {
  switch (action.type) {
    case PORTFOLIO_LIST_REQUEST:
      return { loading: true, portfolios: [] };
    case PORTFOLIO_LIST_SUCCESS:
      return {
        loading: false,
        portfolios: action.payload,
      };
    case PORTFOLIO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const portfolioListByClientIdReducer = (
  state = { clientPortfolios: [] },
  action
) => {
  switch (action.type) {
    case PORTFOLIO_LIST_BY_CLIENT_ID_REQUEST:
      return { loading: true, clientPortfolios: [] };
    case PORTFOLIO_LIST_BY_CLIENT_ID_SUCCESS:
      return {
        loading: false,
        clientPortfolios: action.payload,
      };
    case PORTFOLIO_LIST_BY_CLIENT_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const portfolioDetailsReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case PORTFOLIO_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PORTFOLIO_DETAILS_SUCCESS:
      return { loading: false, portfolio: action.payload };
    case PORTFOLIO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const portfolioDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PORTFOLIO_DELETE_REQUEST:
      return { loading: true };
    case PORTFOLIO_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PORTFOLIO_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const portfolioCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PORTFOLIO_CREATE_REQUEST:
      return { loading: true };
    case PORTFOLIO_CREATE_SUCCESS:
      return { loading: false, success: true, portfolio: action.payload };
    case PORTFOLIO_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PORTFOLIO_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const portfolioUpdateReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case PORTFOLIO_UPDATE_REQUEST:
      return { loading: true };
    case PORTFOLIO_UPDATE_SUCCESS:
      return { loading: false, success: true, portfolio: action.payload };
    case PORTFOLIO_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PORTFOLIO_UPDATE_RESET:
      return { portfolio: {} };
    default:
      return state;
  }
};
