import actionTypes from "../actionTypes";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_START:
      return { ...state, loading: true };

    case actionTypes.GET_CATEGORIES_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case actionTypes.GET_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
