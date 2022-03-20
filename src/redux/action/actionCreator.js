import axios from "axios";
import { actionTypes } from "./actiontype";

const getDataStart = () => ({
  type: actionTypes.GET_DATA_START,
});

const getAllProductSuccess = (data) => ({
  type: actionTypes.GET_DATA_SUCCESS,
  payload: data,
});

const getAllProductError = (error) => ({
  type: actionTypes.GET_DATA_ERROR,
  payload: error,
});

export const openCheckOutModal = () => ({
  type: actionTypes.TOGGLE_CHECKOUT_MODAL,
});
export const closeCheckOutModal = () => ({
  type: actionTypes.TOGGLE_CHECKOUT_MODAL_CLOSE,
});

export const getProduct = async (dispatch) => {
  try {
    dispatch(getDataStart());
    const res = await axios.get(
      "https://ig-food-menus.herokuapp.com/our-foods"
    );

    dispatch(getAllProductSuccess(res?.data));
  } catch (err) {
    dispatch(getAllProductError(err.response));
  }
};
