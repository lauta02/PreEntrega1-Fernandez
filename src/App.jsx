import React, { useState } from 'react';
import Navbar from './components/navbar/NavBar'; 
import { CartWidget } from './components/cartwidget/CartWidget';
import { ProductList } from './components/itemlistcontainer/ItemListContainer'; 
import './App.css';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div>
      <Navbar />
      <CartWidget
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setTotal={setTotal}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setTotal={setTotal}
      />
    </div>
  );
}

export default App;