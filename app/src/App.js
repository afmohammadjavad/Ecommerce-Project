import { Route, Routes } from "react-router-dom";
import "./App.css";
import './Main.scss'
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductsList/ProductList";
import { ProjectName } from './baseUrl.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path={`/${ProjectName}`} element={<ProductList />} />
          <Route path={`/${ProjectName}/cart`} element={<Cart />} />
          <Route path={`/${ProjectName}/dashboard`} element={<Dashboard />} />
          <Route path={`/${ProjectName}/category/:categoryName`} element={<Category />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
