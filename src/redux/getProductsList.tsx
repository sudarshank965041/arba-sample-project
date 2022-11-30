import { call, put, takeEvery } from "redux-saga/effects";
import getProducts from "../services/getProducts";
import messagePopup from "../services/message-popup";

// Action Type
export const actionType = {
  GET_PRODUCTS_START: "GET_PRODUCTS_START",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAILED: "GET_PRODUCTS_FAILED",
};

// Actions

export const getProductsListStart = (data: any) => ({
  type: actionType.GET_PRODUCTS_START,
  payload: data,
});

export const productsListSuccess = (data: any) => ({
  type: actionType.GET_PRODUCTS_SUCCESS,
  payload: data,
});

export const productsListFailed = (data: any) => ({
  type: actionType.GET_PRODUCTS_FAILED,
  payload: data,
});

// Reducer
const INIT_STATE = {
  loading: false,
  products: null,
  error: null,
};

export default function productsListReducer(
  state = INIT_STATE,
  action = { type: "", payload: {} }
) {
  switch (action.type) {
    case actionType.GET_PRODUCTS_START:
      return { ...state, loading: true };
    case actionType.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case actionType.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        products: null,
        error: action.payload,
      };
    default:
      return { ...state };
  }
}

// side effect

export function* getProductsListSaga(action: any): Generator {
  try {
    const response: any = yield call(getProducts);

    if (response && response.length) {
      const finalValue = action.payload.limit
        ? response.slice(0, action.payload.limit)
        : response;
      console.log("finalValue : ", finalValue);
      yield put(productsListSuccess(finalValue));
    } else {
      messagePopup("", "Products List failed", "error");
      yield put(productsListFailed("Products List failed"));
    }
  } catch (error) {
    messagePopup("", "Products List Failed", "error");
    yield put(productsListFailed("Products List Failed"));
  }
}

export function* watchaProductsListSaga() {
  yield takeEvery(actionType.GET_PRODUCTS_START, getProductsListSaga);
}
