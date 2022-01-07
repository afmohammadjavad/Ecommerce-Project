import axios from "axios";
import { BASE_API } from "../../baseUrl";
import actionTypes from "../actionTypes";

const getCategories = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_CATEGORIES_START });
      const response = await axios.get(`${BASE_API}/products/categories`);
      dispatch({ type: actionTypes.GET_CATEGORIES_SUCCESS, payload: response.data });
    } catch (e) {
      console.log(e);
      dispatch({ type: actionTypes.GET_CATEGORIES_FAILURE, payload: e });
    }
  };
};

export default { getCategories };
