import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ProductsCategories from './components/ProductsCategories';
// import Categories from './components/storefront/Categories';
// import Products from './components/storefront/Products';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartShop from './components/storefront/CartShop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<ProductsCategories />}></Route>
          <Route exact path='/cart' element={<CartShop />}></Route>
        </Routes>

      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
