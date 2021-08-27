import axios from "axios";
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
  PORTFOLIO_UPDATE_REQUEST,
  PORTFOLIO_UPDATE_SUCCESS,
  PORTFOLIO_UPDATE_FAIL,
  PORTFOLIO_LIST_BY_CLIENT_ID_FAIL,
  PORTFOLIO_LIST_BY_CLIENT_ID_REQUEST,
  PORTFOLIO_LIST_BY_CLIENT_ID_SUCCESS,
} from "../constants/portfolioConstants";
import { logout } from "./userActions";

const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
})


export const listPortfolios = () => async (dispatch) => {
  try {
    dispatch({ type: PORTFOLIO_LIST_REQUEST });

    const { data } = await axiosInstance.get(`/api/portfolio`);

    // console.log(data);

    dispatch({
      type: PORTFOLIO_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listPortfolioByClientId = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PORTFOLIO_LIST_BY_CLIENT_ID_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.get(`/api/portfolio/${id}/client`, config);
    console.log(data);

    dispatch({
      type: PORTFOLIO_LIST_BY_CLIENT_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_LIST_BY_CLIENT_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPortfolioDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PORTFOLIO_DETAILS_REQUEST });

    const { data } = await axiosInstance.get(`/api/portfolio/${id}`);

    dispatch({
      type: PORTFOLIO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePortfolio = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PORTFOLIO_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axiosInstance.delete(`/api/portfolio/${id}`, config);

    dispatch({
      type: PORTFOLIO_DELETE_SUCCESS,
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
      type: PORTFOLIO_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createPortfolio = (portfolio) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PORTFOLIO_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.post(`/api/portfolio`, portfolio, config);

    dispatch({
      type: PORTFOLIO_CREATE_SUCCESS,
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
      type: PORTFOLIO_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updatePortfolio = (portfolio) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PORTFOLIO_UPDATE_REQUEST,
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
      `/api/portfolio/${portfolio._id}`,
      portfolio,
      config
    );

    dispatch({
      type: PORTFOLIO_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: PORTFOLIO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PORTFOLIO_UPDATE_FAIL,
      payload: message,
    });
  }
};
