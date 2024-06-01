import React from 'react';
import './topheader.scss';

function TopHeader(props) {
  return (
    <section className="topheader">
      <div className="container">
        <div className="row">
          <div className="col-6 email">
            <span className="email__text">danh13320031@gmail.com</span>
          </div>

          <div className="col-6 icon">
            <div className="icon__box float-end">
              <a target="blank" href="https://www.facebook.com/danh.bui.10420321">
                <i className="icon__item bi bi-facebook" />
              </a>
              <a target="blank" href="https://www.instagram.com/buiphapdanh/">
                <i className="icon__item bi bi-instagram" />
              </a>
              <a target="blank" href="https://github.com/Danh13320031">
                <i className="icon__item bi bi-github" />
              </a>
              <a target="blank" href="https://www.pinterest.com/danh13320031/">
                <i className="icon__item bi bi-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
