import axios from "axios";
import {
  TEAM_LIST_REQUEST,
  TEAM_LIST_SUCCESS,
  TEAM_LIST_FAIL,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_DETAILS_FAIL,
  TEAM_DELETE_SUCCESS,
  TEAM_DELETE_REQUEST,
  TEAM_DELETE_FAIL,
  TEAM_CREATE_REQUEST,
  TEAM_CREATE_SUCCESS,
  TEAM_CREATE_FAIL,
  TEAM_UPDATE_REQUEST,
  TEAM_UPDATE_SUCCESS,
  TEAM_UPDATE_FAIL,
  TEAM_UPDATE_RESET,
} from "../constants/teamConstants";
import { logout } from "./userActions";

export const listTeam = () => async (dispatch) => {
  try {
    dispatch({ type: TEAM_LIST_REQUEST });

    const { data } = await axios.get(`/api/team`);
    // console.log(data);
    // return;

    dispatch({
      type: TEAM_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEAM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTeamDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/team/${id}`);

    dispatch({
      type: TEAM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEAM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteTeam = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/team/${id}`, config);

    dispatch({
      type: TEAM_DELETE_SUCCESS,
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
      type: TEAM_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createTeam = (team) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/team`, team, config);

    dispatch({
      type: TEAM_CREATE_SUCCESS,
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
      type: TEAM_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateTeam = (team) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_UPDATE_REQUEST,
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

    const { data } = await axios.put(`/api/team/${team._id}`, team, config);

    dispatch({
      type: TEAM_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: TEAM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: TEAM_UPDATE_FAIL,
      payload: message,
    });
  }
};
