import React from 'react';

function Product(props) {
  return (
    <section className="product">
      <div className="container">
        <h2 className="text-center">Danh sách sản phẩm</h2>
        <br />
        <div className="row">
          <div className="col-2 slidebar bg-warning">
            <div className="slidebar__box">
              <div className="slidebar__filter">
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
          <div className="col-10 list">
            <div className="container-fluid">
              <div className="row">
                <div className="col-3">
                  <div className="carditem"></div>
                </div>
                {/* End Col */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
