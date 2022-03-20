import { actionTypes } from "../action/actiontype";

const initialStateData = {
  isLoading: false,
  data: [],
  error: null,
  isError: false,
};

const productDetailReducer = (state = initialStateData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_DATA_SUCCESS:
      return { ...state, data: [...payload], isLoading: false };
    case actionTypes.GET_DATA_ERROR:
      return {
        ...state,
        error: payload,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default productDetailReducer;
