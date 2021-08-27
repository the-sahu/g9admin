import axios from "axios";
import { FUNDS_CREATE_FAIL, FUNDS_CREATE_REQUEST, FUNDS_CREATE_SUCCESS, FUNDS_DELETE_FAIL, FUNDS_DELETE_REQUEST, FUNDS_DELETE_SUCCESS, FUNDS_LIST_FAIL, FUNDS_LIST_REQUEST, FUNDS_LIST_SUCCESS } from "../constants/fundConstants";

import { logout } from "./userActions";

const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
})


export const listFund = () => async (dispatch) => {
  try {
    dispatch({ type: FUNDS_LIST_REQUEST });

    const { data } = await axiosInstance.get(`/api/funds`);
    // console.log(data);
    // return;

    dispatch({
      type: FUNDS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FUNDS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteFund = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FUNDS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axiosInstance.delete(`/api/funds/${id}`, config);

    dispatch({
      type: FUNDS_DELETE_SUCCESS,
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
      type: FUNDS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createFunds = (funds) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FUNDS_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.post(`/api/funds`, funds, config);

    dispatch({
      type: FUNDS_CREATE_SUCCESS,
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
      type: FUNDS_CREATE_FAIL,
      payload: message,
    });
  }
};
