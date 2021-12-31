import { combineReducers } from "redux";
import { ProductsReducer } from "./products/productsReducer";
import { ProductBasketReducer } from "./productsBasket/productBasketReducer";

export default combineReducers({
  products: ProductsReducer,
  ProductBasket: ProductBasketReducer,
});
