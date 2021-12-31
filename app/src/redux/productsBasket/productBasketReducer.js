import actionTypes from "../actionTypes";

const initialState = {
  selectedProducts: [],
  selectedProductsAmount: {},
};

export const ProductBasketReducer = (state = initialState, action) => {
  // const { id:idx } = action.payload;

  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
    // let { id } = action.payload;

      if (state.selectedProductsAmount[action.payload.id])
        return {
          ...state,
          selectedProductsAmount: {
            ...state.selectedProductsAmount,
            [action.payload.id]: state.selectedProductsAmount[action.payload.id] + 1,
          },
        };
      else
        return {
          ...state,
          selectedProducts: [...state.selectedProducts, action.payload],
          selectedProductsAmount: { ...state.selectedProductsAmount, [action.payload.id]: 1 },
        };

    case actionTypes.REMOVE_FROM_BASKET:
      const newProductsAmount = {...state.selectedProductsAmount };
      delete newProductsAmount[action.payload.id];
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (item) => item.id !== action.payload.id
        ),
        selectedProductsAmount: newProductsAmount
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
