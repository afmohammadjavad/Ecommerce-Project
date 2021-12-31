import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import ProductList from './components/ProductsList/ProductList';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
       <Route path="/" element={<ProductList />} />
       <Route path="cart" element={<Cart />} />
     </Routes>
    </div>
  );
}

export default App;
