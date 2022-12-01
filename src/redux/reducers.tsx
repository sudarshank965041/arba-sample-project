import { combineReducers } from "redux";
import modifyCartListReducer from "./cartItems";
import productsListReducer from "./getProductsList";

export default combineReducers({
  products: productsListReducer,
  cartItems: modifyCartListReducer
});
