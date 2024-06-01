import React from 'react';
import PropTypes from 'prop-types';

ProductSlideBar.propTypes = {};

function ProductSlideBar(props) {
  return (
    <div className="col-2 slidebar">
      <div className="slidebar-box">
        <div className="slidebar-filter">
          <h4>Filter product</h4>
          <form>
            <div>
              <input type="radio" name="ft" id="male" />
              <label htmlFor="male">Đồng hồ nam</label>
            </div>

            <div>
              <input type="radio" name="ft" id="female" />
              <label htmlFor="female">Đồng hồ nữ</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductSlideBar;
