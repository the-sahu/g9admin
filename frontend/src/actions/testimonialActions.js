import axios from "axios";
import {
  TESTIMONIAL_LIST_REQUEST,
  TESTIMONIAL_LIST_SUCCESS,
  TESTIMONIAL_LIST_FAIL,
  TESTIMONIAL_DETAIL_REQUEST,
  TESTIMONIAL_DETAIL_SUCCESS,
  TESTIMONIAL_DETAIL_FAIL,
  TESTIMONIAL_DELETE_SUCCESS,
  TESTIMONIAL_DELETE_REQUEST,
  TESTIMONIAL_DELETE_FAIL,
  TESTIMONIAL_CREATE_REQUEST,
  TESTIMONIAL_CREATE_SUCCESS,
  TESTIMONIAL_CREATE_FAIL,
  TESTIMONIAL_UPDATE_REQUEST,
  TESTIMONIAL_UPDATE_SUCCESS,
  TESTIMONIAL_UPDATE_FAIL,
} from "../constants/testimonialConstants";
import { logout } from "./userActions";

const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
})


export const listTestimonials = () => async (dispatch) => {
  try {
    dispatch({ type: TESTIMONIAL_LIST_REQUEST });

    const { data } = await axiosInstance.get(`/api/testimonials`);

    // console.log(data);

    dispatch({
      type: TESTIMONIAL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTestimonialDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TESTIMONIAL_DETAIL_REQUEST });

    const { data } = await axiosInstance.get(`/api/testimonials/${id}`);

    dispatch({
      type: TESTIMONIAL_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteTestimonial = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TESTIMONIAL_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axiosInstance.delete(`/api/testimonials/${id}`, config);

    dispatch({
      type: TESTIMONIAL_DELETE_SUCCESS,
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
      type: TESTIMONIAL_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createTestimonial =
  (testimonial) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TESTIMONIAL_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axiosInstance.post(
        `/api/testimonials`,
        testimonial,
        config
      );

      dispatch({
        type: TESTIMONIAL_CREATE_SUCCESS,
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
        type: TESTIMONIAL_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateTestimonial =
  (testimonial) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TESTIMONIAL_UPDATE_REQUEST,
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
        `/api/testimonials/${testimonial._id}`,
        testimonial,
        config
      );

      dispatch({
        type: TESTIMONIAL_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: TESTIMONIAL_DETAIL_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: TESTIMONIAL_UPDATE_FAIL,
        payload: message,
      });
    }
  };
