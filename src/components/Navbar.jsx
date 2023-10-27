import { useState } from 'react';
import '../Navbar.css'; 


export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = product => {
    const updatedProducts = allProducts.filter(item => item.id !== product.id);

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
      <h1 className="store-title">Autos Platinum</h1>

      <div className='cart-container'>
        <div className='cart-icon' onClick={() => setActive(!active)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='#FF5733'
            className='icon-cart'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 7l5 5 5-5' />
            <line x1='9' y1='14' x2='15' y2='14' />
          </svg>
          <div className='cart-count'>
            <span id='product-count'>{countProducts}</span>
          </div>
        </div>

        <div className={`cart-content ${active ? 'open-cart' : ''}`}>
          {allProducts.length ? (
            <>
              <div className='cart-products'>
                {allProducts.map(product => (
                  <div className='cart-product' key={product.id}>
                    <div className='product-info'>
                      <p className='product-name'>{product.nameProduct}</p>
                      <span className='product-price'>$ {product.price}</span>
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
                <span className='total-price'>$ {total}</span>
              </div>
              <button className='clear-cart-button' onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className='cart-empty'>Tu carrito esta vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};