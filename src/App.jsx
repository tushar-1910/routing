import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/products';
import ProductDetails from "./components/productDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/products' element={ <Products /> }></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
