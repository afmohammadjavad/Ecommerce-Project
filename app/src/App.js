import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductsList/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main" style={{paddingTop: 100}}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path={`category/:categoryName`} element={<Category />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
