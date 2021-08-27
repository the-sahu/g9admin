import axios from "axios";
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
  BUSINESS_UPDATE_REQUEST,
  BUSINESS_UPDATE_SUCCESS,
  BUSINESS_UPDATE_FAIL,
} from "../constants/businessConstants";
import { logout } from "./userActions";

const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
})


export const listBusinesses = () => async (dispatch) => {
  try {
    dispatch({ type: BUSINESS_LIST_REQUEST });

    const { data } = await axiosInstance.get(`/api/businesses`);

    // console.log(data);

    dispatch({
      type: BUSINESS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUSINESS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listBusinessDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BUSINESS_DETAILS_REQUEST });

    const { data } = await axiosInstance.get(`/api/businesses/${id}`);

    dispatch({
      type: BUSINESS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUSINESS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteBusiness = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUSINESS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axiosInstance.delete(`/api/businesses/${id}`, config);

    dispatch({
      type: BUSINESS_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: BUSINESS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createBusiness = (business) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUSINESS_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.post(`/api/businesses`, business, config);

    dispatch({
      type: BUSINESS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: BUSINESS_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateBusiness = (business) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUSINESS_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.put(
      `/api/businesses/${business._id}`,
      business,
      config
    );

    dispatch({
      type: BUSINESS_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: BUSINESS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: BUSINESS_UPDATE_FAIL,
      payload: message,
    });
  }
};
