import React from 'react';
import ProductList from './components/product-list';
import AddProduct from './components/add-product';

function App() {
  return (
    <div className="container">
      <ProductList />
      <AddProduct />
    </div>
  );
}

export default App;
