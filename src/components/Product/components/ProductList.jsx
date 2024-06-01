import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import productApi from '../../../apis/productApi';
import ProductItem from './ProductItem';
import ProductPagination from './ProductPagination';

ProductList.propTypes = {};

function ProductList(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await productApi.getAll();
      const productData = await response.data;

      setProductList(productData);
    })();
  }, []);

  return (
    <div className="col-10 list">
      <div className="container-fluid">
        <div className="row">
          {productList.map((item) => (
            <ProductItem
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating.rate}
              count={item.rating.count}
            />
          ))}
          <ProductPagination />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
