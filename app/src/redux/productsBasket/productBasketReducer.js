import actionTypes from "../actionTypes";

const initialState = {
  selectedProducts: [],
  selectedProductsAmount: {},
};

export const ProductBasketReducer = (state = initialState, action) => {
  const id = action?.payload?.id;

  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      if (state.selectedProductsAmount[id] >= 0)
        return {
          ...state,
          selectedProductsAmount: {
            ...state.selectedProductsAmount,
            [id]: state.selectedProductsAmount[id] + 1,
          },
        };
      else
        return {
          ...state,
          selectedProducts: [...state.selectedProducts, action.payload],
          selectedProductsAmount: { ...state.selectedProductsAmount, [id]: 1 },
        };

    case actionTypes.DECREASE_FROM_BASKET:
      if (state.selectedProductsAmount[id])
        return {
          ...state,
          selectedProductsAmount: {
            ...state.selectedProductsAmount,
            [id]: state.selectedProductsAmount[id] - 1,
          },
        };
      else return state;

    case actionTypes.REMOVE_FROM_BASKET:
      const newProductsAmount = { ...state.selectedProductsAmount };
      delete newProductsAmount[id];
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (item) => item.id !== id
        ),
        selectedProductsAmount: newProductsAmount,
      };

    default:
      return state;
  }
};

// ==========================================================================================
// if (state.selectedProductsAmount[index])
//   return {
//     ...state,
//     selectedProductsAmount: {...state.selectedProductsAmount, [index]: state.selectedProductsAmount[index]+1},
//     // selectedProductsAmount: state.selectedProductsAmount.map((value, idx) => idx === index ? value+1 : value),
//     // selectedProductsAmount: state.selectedProductsAmount[action.payload.index],
//     // selectedProducts: [...state.selectedProducts, action.payload],
//   };
// ==========================================================================================
