import React from 'react';
import PropTypes from 'prop-types';
import '../product.scss';

ProductItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,
  count: PropTypes.number,
};

ProductItem.defaultProps = {
  image: 'Image Error',
  title: 'Title Error',
  price: 0,
  rate: 0,
  count: 0,
};

function ProductItem(props) {
  const { image, title, price, rate, count } = props;

  return (
    <div className="col-3">
      <div className="carditem">
        <div className="carditem-bg">
          <div className="carditem-image">
            <img src={image} alt={title} width={'100%'} />
          </div>
          <h5 className="carditem-title" title={title}>
            {title.length > 24 ? ''.concat(title.substring(0, 24), '...') : title}
          </h5>
          <div className="carditem-prices">
            <div className="carditem-price">{price}$</div>
            <div className="carditem-rate">
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <div className="carditem-details">
            <span>
              <i>{count > 0 ? `(Còn: ${count})` : '(Hết hàng)'}</i>
            </span>
            <button className="carditem-detail">Chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
