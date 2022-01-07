import axios from "axios";
import { BASE_API } from "../../baseUrl";
import actionTypes from "../actionTypes";

const getCategory = (name) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_CATEGORY_START });
      const response = await axios.get(`${BASE_API}/products/category/${name}`);
      dispatch({ type: actionTypes.GET_CATEGORY_SUCCESS, payload: response.data });
    } catch (e) {
      console.log(e);
      dispatch({ type: actionTypes.GET_CATEGORY_FAILURE, payload: e });
    }
  };
};

export default { getCategory };
