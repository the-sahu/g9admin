import {
  BUSINESS_LIST_REQUEST,
  BUSINESS_LIST_SUCCESS,
  BUSINESS_LIST_FAIL,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_SUCCESS,
  BUSINESS_DETAILS_FAIL,
  BUSINESS_DELETE_SUCCESS,
  BUSINESS_DELETE_REQUEST,
  BUSINESS_DELETE_FAIL,
  BUSINESS_CREATE_REQUEST,
  BUSINESS_CREATE_SUCCESS,
  BUSINESS_CREATE_FAIL,
  BUSINESS_CREATE_RESET,
  BUSINESS_UPDATE_REQUEST,
  BUSINESS_UPDATE_SUCCESS,
  BUSINESS_UPDATE_FAIL,
  BUSINESS_UPDATE_RESET,
} from "../constants/businessConstants";

export const businessListReducer = (state = { businesses: [] }, action) => {
  switch (action.type) {
    case BUSINESS_LIST_REQUEST:
      return { loading: true, businesses: [] };
    case BUSINESS_LIST_SUCCESS:
      return {
        loading: false,
        businesses: action.payload,
      };
    case BUSINESS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const businessDetailsReducer = (state = { business: {} }, action) => {
  switch (action.type) {
    case BUSINESS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case BUSINESS_DETAILS_SUCCESS:
      return { loading: false, business: action.payload };
    case BUSINESS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const businessDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BUSINESS_DELETE_REQUEST:
      return { loading: true };
    case BUSINESS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BUSINESS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const businessCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BUSINESS_CREATE_REQUEST:
      return { loading: true };
    case BUSINESS_CREATE_SUCCESS:
      return { loading: false, success: true, business: action.payload };
    case BUSINESS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case BUSINESS_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const businessUpdateReducer = (state = { business: {} }, action) => {
  switch (action.type) {
    case BUSINESS_UPDATE_REQUEST:
      return { loading: true };
    case BUSINESS_UPDATE_SUCCESS:
      return { loading: false, success: true, business: action.payload };
    case BUSINESS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case BUSINESS_UPDATE_RESET:
      return { business: {} };
    default:
      return state;
  }
};
