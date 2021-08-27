import axios from "axios";
import { WITHDRAW_FUNDS_CREATE_FAIL, WITHDRAW_FUNDS_CREATE_REQUEST, WITHDRAW_FUNDS_CREATE_SUCCESS, WITHDRAW_FUNDS_DELETE_FAIL, WITHDRAW_FUNDS_DELETE_REQUEST, WITHDRAW_FUNDS_DELETE_SUCCESS, WITHDRAW_FUNDS_LIST_FAIL, WITHDRAW_FUNDS_LIST_REQUEST, WITHDRAW_FUNDS_LIST_SUCCESS } from "../constants/withdrawFundConstants";

import { logout } from "./userActions";

const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
})


export const withdrawList = () => async (dispatch) => {
  try {
    dispatch({ type: WITHDRAW_FUNDS_LIST_REQUEST });

    const { data } = await axiosInstance.get(`/api/withdraw`);
    // console.log(data);
    // return;

    dispatch({
      type: WITHDRAW_FUNDS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WITHDRAW_FUNDS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteWithdrawFund = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: WITHDRAW_FUNDS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axiosInstance.delete(`/api/withdraw/${id}`, config);

    dispatch({
      type: WITHDRAW_FUNDS_DELETE_SUCCESS,
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
      type: WITHDRAW_FUNDS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createWithdrawFunds = (funds) => async (dispatch, getState) => {
  try {
    dispatch({
      type: WITHDRAW_FUNDS_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.post(`/api/withdraw`, funds, config);

    dispatch({
      type: WITHDRAW_FUNDS_CREATE_SUCCESS,
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
      type: WITHDRAW_FUNDS_CREATE_FAIL,
      payload: message,
    });
  }
};
