import { all } from "redux-saga/effects";
import { watchaProductsListSaga } from "./getProductsList";
export default function* rootSaga() {
  yield all([watchaProductsListSaga()]);
}
