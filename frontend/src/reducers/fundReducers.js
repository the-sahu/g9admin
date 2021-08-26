import { FUNDS_CREATE_FAIL, FUNDS_CREATE_REQUEST, FUNDS_CREATE_RESET, FUNDS_CREATE_SUCCESS, FUNDS_DELETE_FAIL, FUNDS_DELETE_REQUEST, FUNDS_DELETE_SUCCESS, FUNDS_LIST_FAIL, FUNDS_LIST_REQUEST, FUNDS_LIST_SUCCESS } from "../constants/fundConstants";

export const fundListReducer = (state = { funds: [] }, action) => {
  switch (action.type) {
    case FUNDS_LIST_REQUEST:
      return { loading: true, funds: [] };
    case FUNDS_LIST_SUCCESS:
      return {
        loading: false,
        funds: action.payload,
      };
    case FUNDS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fundDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case FUNDS_DELETE_REQUEST:
      return { loading: true };
    case FUNDS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case FUNDS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fundCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case FUNDS_CREATE_REQUEST:
      return { loading: true };
    case FUNDS_CREATE_SUCCESS:
      return { loading: false, success: true, funds: action.payload };
    case FUNDS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case FUNDS_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

