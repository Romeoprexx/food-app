import { combineReducers } from "redux";
import checkOutReducer from "./checkOutReducer";
import productDetailReducer from "./productDetailReducer";

const rootReducer = combineReducers({
  checkOut: checkOutReducer,
  product: productDetailReducer,
});

export default rootReducer;
