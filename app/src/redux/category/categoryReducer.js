import actionTypes from "../actionTypes";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_START:
      return { ...state, loading: true };

    case actionTypes.GET_CATEGORY_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case actionTypes.GET_CATEGORY_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
