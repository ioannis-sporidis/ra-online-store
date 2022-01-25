import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Products, SingleProduct, Cart, Checkout, Error, About, PrivateRoute } from './pages';
import { Navbar, Sidebar, Footer} from './components';

function App() {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='cart' element={<Cart />} />
      <Route path='products' element={<Products />} />
      <Route path='products/:id' element={<SingleProduct />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
