import { actionTypes } from "../action/actiontype";

const checkoutData = {
  checkoutItems: [],
  itemSold: [],

  checkOutModalIsOpen: false,
  cartEmpty: true,
  orderPlaced: false,
  payButtonClicked: false,
};

const checkOutReducer = (state = checkoutData, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.TOGGLE_CHECKOUT_MODAL:
      return {
        ...state,
        checkOutModalIsOpen: true,
      };
    case actionTypes.TOGGLE_CHECKOUT_MODAL_CLOSE:
      return {
        ...state,
        checkOutModalIsOpen: false,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        checkoutItems: payload,
        cartEmpty: false,
      };
    case actionTypes.UPDATE_QUANTITY:
      const { productId, value } = payload;
      const index = state.checkoutItems.findIndex(
        (item) => item.productId === productId
      );
      const newArray = [...state.checkoutItems];
      newArray[index].itemQuantity = value;
      console.log(index);

      return { ...state, checkoutItems: newArray };
    case actionTypes.DELETE_AN_ITEM_FROM_CART:
      const filteredItems = state.checkoutItems.filter((it) => {
        return it.productId !== payload.deleteId;
      });

      return { ...state, checkoutItems: filteredItems };
    case actionTypes.PAY_BUTTON:
      return {
        ...state,
        payButtonClicked: true,
        cartEmpty: true,
        itemSold: payload,
      };
    case actionTypes.CLEAR_RECEIPT:
      return {
        ...state,
        payButtonClicked: false,
        checkoutItems: [],
      };

    default:
      return state;
  }
};
export default checkOutReducer;
