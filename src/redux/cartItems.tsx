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

export const checkoutSuccess = (data: any) => ({
  type: actionType.CHECKOUT_SUCCESS,
  payload: data,
});

// Reducer
const INIT_STATE = {
  carts: {},
  totalItems: 0,
};

export default function modifyCartListReducer(
  state = INIT_STATE,
  action = { type: "", payload: {} }
) {
  const payload: any = action.payload;  
  const carts: any = state.carts;
  switch (action.type) {
    case actionType.CHECKOUT_SUCCESS:
      return { ...state };
    case actionType.ADD_TO_CART:
      return {
        ...state,
        carts: {...carts, [payload.productId]: (carts[payload.productId] || 0) + 1 },
      };
    case actionType.REMOVE_FROM_CART:
      const qty = (carts[payload.productId] || 0) - 1;
      const copy = { ...carts };
      if (qty > 0) {
        copy[payload.productId] = qty;
      } else {
        delete copy[payload.productId];
      }
      return { ...state, carts: copy };
    default:
      return state;
  }
}
