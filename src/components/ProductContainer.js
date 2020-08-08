import React from 'react';
import './styles/ProductContainer.css';

const ProductContainer = ({ children }) => (
  <section className='product-container'>
      {children}
  </section>
);

export default ProductContainer;
