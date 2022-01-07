import { combineReducers } from "redux";
import { ProductsReducer } from "./products/productsReducer";
import { ProductBasketReducer } from "./productsBasket/productBasketReducer";
import {CategoriesReducer} from './categories/categoriesReducer'
import { CategoryReducer } from "./category/categoryReducer";

export default combineReducers({
  products: ProductsReducer,
  ProductBasket: ProductBasketReducer,
  categories: CategoriesReducer,
  category: CategoryReducer,
});
