import { combineReducers } from "redux";
import productsListReducer from "./getProductsList";

export default combineReducers({
  products: productsListReducer,
});
