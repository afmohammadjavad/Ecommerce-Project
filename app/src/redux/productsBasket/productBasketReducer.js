import actionTypes from "../actionTypes";

const initialState = {
  selectedProducts: [],
};

export const ProductBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };

    case actionTypes.REMOVE_FROM_BASKET:
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
