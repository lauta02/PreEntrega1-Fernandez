import React, { useState } from 'react';
import Navbar from './components/navbar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div>
      <Navbar />
      <ItemListContainer
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
