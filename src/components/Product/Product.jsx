import React from 'react';
import ProductList from './components/ProductList';
import ProductSlideBar from './components/ProductSlideBar';

function Product(props) {
  return (
    <section className="product">
      <div className="container">
        <h2 className="text-center">Danh sách sản phẩm</h2>
        <br />
        <div className="row">
          <ProductSlideBar />
          <ProductList />
        </div>
      </div>
    </section>
  );
}

export default Product;
