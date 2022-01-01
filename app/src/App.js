import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
