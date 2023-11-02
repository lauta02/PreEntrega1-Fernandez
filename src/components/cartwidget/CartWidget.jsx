import React, { useState } from 'react';
import './CartWidget.css';

export const CartWidget = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const updatedProducts = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(updatedProducts);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header>
      <h1></h1>
      <div className='container-icon'>
        <div
          className={`container-cart-icon ${active ? 'open-cart' : ''}`}
          onClick={() => setActive(!active)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='#000'
            className='icon-cart'
          >
            <circle cx='9' cy='21' r='1'></circle>
            <circle cx='20' cy='21' r='1'></circle>
            <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
          </svg>
          <div className='count-products'>
            <span id='contador-productos'>{countProducts}</span>
          </div>
        </div>
        <div className={`container-cart-products ${active ? 'open-cart' : ''}`}>
          {allProducts.length ? (
            <>
              <div className='row-product'>
                {allProducts.map((product) => (
                  <div className='cart-product' key={product.id}>
                    <div className='info-cart-product'>
                      <span className='cantidad-producto-carrito'>
                        {product.quantity}
                      </span>
                      <p className='titulo-producto-carrito'>
                        {product.nameProduct}
                      </p>
                      <span className='precio-producto-carrito'>
                        ${product.price}
                      </span>
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='#FF5733'
                      className='icon-close'
                      onClick={() => onDeleteProduct(product)}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </div>
                ))}
              </div>
              <div className='cart-total'>
                <h3>Total:</h3>
                <span className='total-pagar'>${total}</span>
              </div>
              <button className='btn-clear-all' onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className='cart-empty'>El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};