import actionTypes from "../actionTypes";

const initialState = {
  selectedProducts: [],
  selectedProductsAmount: {}
};

export const ProductBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      const {data, index} = action.payload;
      if (state.selectedProductsAmount[index])
        return {
          ...state,
          selectedProductsAmount: {...state.selectedProductsAmount, [index]: state.selectedProductsAmount[index]+1},
        };
      else
        return {
          ...state,
          selectedProducts: [...state.selectedProducts, data],
          selectedProductsAmount: {...state.selectedProductsAmount, [index]: 1}
        }

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
