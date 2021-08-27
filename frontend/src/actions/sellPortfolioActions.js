import axios from "axios";
import { SELL_PORTFOLIO_CREATE_FAIL, SELL_PORTFOLIO_CREATE_REQUEST, SELL_PORTFOLIO_CREATE_SUCCESS, SELL_PORTFOLIO_DELETE_FAIL, SELL_PORTFOLIO_DELETE_REQUEST, SELL_PORTFOLIO_DELETE_SUCCESS, SELL_PORTFOLIO_DETAILS_FAIL, SELL_PORTFOLIO_DETAILS_REQUEST, SELL_PORTFOLIO_DETAILS_SUCCESS, SELL_PORTFOLIO_LIST_BY_CLIENT_ID_FAIL, SELL_PORTFOLIO_LIST_BY_CLIENT_ID_REQUEST, SELL_PORTFOLIO_LIST_BY_CLIENT_ID_SUCCESS, SELL_PORTFOLIO_LIST_FAIL, SELL_PORTFOLIO_LIST_REQUEST, SELL_PORTFOLIO_LIST_SUCCESS, SELL_PORTFOLIO_UPDATE_REQUEST, SELL_PORTFOLIO_UPDATE_SUCCESS, SELL_PORTFOLIO_UPDATE_FAIL } from "../constants/sellPortfolioConstants";

import { logout } from "./userActions";

const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
})


export const listSellPortfolios = () => async (dispatch) => {
  try {
    dispatch({ type: SELL_PORTFOLIO_LIST_REQUEST });

    const { data } = await axiosInstance.get(`/api/sellportfolio`);

    // console.log(data);

    dispatch({
      type: SELL_PORTFOLIO_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SELL_PORTFOLIO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listSellPortfolioByClientId = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SELL_PORTFOLIO_LIST_BY_CLIENT_ID_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.get(`/api/sellportfolio/${id}/client`, config);
    console.log(data);

    dispatch({
      type: SELL_PORTFOLIO_LIST_BY_CLIENT_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SELL_PORTFOLIO_LIST_BY_CLIENT_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSellPortfolioDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SELL_PORTFOLIO_DETAILS_REQUEST });

    const { data } = await axiosInstance.get(`/api/sellportfolio/${id}`);

    dispatch({
      type: SELL_PORTFOLIO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SELL_PORTFOLIO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteSellPortfolio = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SELL_PORTFOLIO_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axiosInstance.delete(`/api/sellportfolio/${id}`, config);

    dispatch({
      type: SELL_PORTFOLIO_DELETE_SUCCESS,
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
      type: SELL_PORTFOLIO_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createSellPortfolio = (sellportfolio) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SELL_PORTFOLIO_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.post(`/api/sellportfolio`, sellportfolio, config);

    dispatch({
      type: SELL_PORTFOLIO_CREATE_SUCCESS,
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
      type: SELL_PORTFOLIO_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateSellPortfolio = (sellportfolio) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SELL_PORTFOLIO_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-Trigger": "CORS",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.put(
      `/api/sellportfolio/${sellportfolio._id}`,
      sellportfolio,
      config
    );

    dispatch({
      type: SELL_PORTFOLIO_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: SELL_PORTFOLIO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: SELL_PORTFOLIO_UPDATE_FAIL,
      payload: message,
    });
  }
};
