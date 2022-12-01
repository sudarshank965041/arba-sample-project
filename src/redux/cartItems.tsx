// Action Type
export const actionType = {
  CHECKOUT_SUCCESS: "CHECKOUT_SUCCESS",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

// Actions

export const addToCartStart = (data: any) => ({
  type: actionType.ADD_TO_CART,
  payload: data,
});

export const removeFormCartStart = (data: any) => ({
  type: actionType.REMOVE_FROM_CART,
  payload: data,
});

export const checkoutSuccess = () => ({
  type: actionType.CHECKOUT_SUCCESS,
});

const localSavedCartItems: any = localStorage.getItem("carts")
  ? localStorage.getItem("carts")
  : "";

// Reducer
const INIT_STATE = {
  carts: localSavedCartItems ? JSON.parse(localSavedCartItems) : {},
};

export default function modifyCartListReducer(
  state = INIT_STATE,
  action = { type: "", payload: {} }
) {
  const payload: any = action.payload;
  const carts: any = state.carts;
  switch (action.type) {
    case actionType.CHECKOUT_SUCCESS:
      return { ...state, carts: {} };
    case actionType.ADD_TO_CART:
      const newCartData = {
        ...carts,
        [payload.productId]: (carts[payload.productId] || 0) + 1,
      };
      localStorage.setItem("carts", JSON.stringify(newCartData));
      return {
        ...state,
        carts: newCartData,
      };
    case actionType.REMOVE_FROM_CART:
      const qty = (carts[payload.productId] || 0) - 1;
      const copy = { ...carts };
      if (qty > 0) {
        copy[payload.productId] = qty;
      } else {
        delete copy[payload.productId];
      }
      const newData = { ...state, carts: copy };
      localStorage.setItem("carts", JSON.stringify(newData));
      return newData;
    default:
      return state;
  }
}
