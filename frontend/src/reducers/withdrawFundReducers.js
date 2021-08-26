import { WITHDRAW_FUNDS_CREATE_FAIL, WITHDRAW_FUNDS_CREATE_REQUEST, WITHDRAW_FUNDS_CREATE_RESET, WITHDRAW_FUNDS_CREATE_SUCCESS, WITHDRAW_FUNDS_DELETE_FAIL, WITHDRAW_FUNDS_DELETE_REQUEST, WITHDRAW_FUNDS_DELETE_SUCCESS, WITHDRAW_FUNDS_LIST_FAIL, WITHDRAW_FUNDS_LIST_REQUEST, WITHDRAW_FUNDS_LIST_SUCCESS } from "../constants/withdrawFundConstants";

export const withdrawFundListReducer = (state = { funds: [] }, action) => {
  switch (action.type) {
    case WITHDRAW_FUNDS_LIST_REQUEST:
      return { loading: true, funds: [] };
    case WITHDRAW_FUNDS_LIST_SUCCESS:
      return {
        loading: false,
        funds: action.payload,
      };
    case WITHDRAW_FUNDS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const withdrawFundDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case WITHDRAW_FUNDS_DELETE_REQUEST:
      return { loading: true };
    case WITHDRAW_FUNDS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case WITHDRAW_FUNDS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const withdrawFundCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case WITHDRAW_FUNDS_CREATE_REQUEST:
      return { loading: true };
    case WITHDRAW_FUNDS_CREATE_SUCCESS:
      return { loading: false, success: true, funds: action.payload };
    case WITHDRAW_FUNDS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case WITHDRAW_FUNDS_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

