import React from 'react';
import './footer.scss';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-2 brand">
            <a href className="brand__link">
              <img src alt="" className="brand__logo" />
            </a>
            <p className="brand__desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, consequatur assumenda
            </p>
          </div>

          {/* Address */}
          <div className="col-4 address">
            <h5 className="address__city">
              <i className="address__icon bi bi-geo-alt-fill" />
              Hà Nội City
            </h5>
            <ul className="address__list">
              <li className="address__item">
                Số 28, Ngõ 67, Đường Lạc Long Quân, Phường Nghĩa Đô, Quận Cầu Giấy.
              </li>
              <li className="address__item">
                Số 10, Ngách 45/12, Đường Trần Duy Hưng, Phường Trung Hòa, Quận Cầu Giấy.
              </li>
              <li className="address__item">
                Số 15, Ngõ 82, Đường Dịch Vọng, Phường Dịch Vọng, Quận Cầu Giấy.
              </li>
            </ul>
            <h5 className="address__city">
              <i className="address__icon bi bi-geo-alt-fill" />
              Hồ Chí Minh City
            </h5>
            <ul className="address__list">
              <li className="address__item">
                Số 123/45, Đường Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1.
              </li>
              <li className="address__item">
                Số 678, Đường Lê Văn Lương, Phường Tân Hưng, Quận 7.
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-3 support">
            <h5 className="support__hotline">
              <i className="support__icon bi bi-telephone-outbound-fill" />
              Hotline
            </h5>
            <ul className="support__list">
              <li className="support__item">Buy: 0124 545 678</li>
              <li className="support__item">Guarantee: 0124 545 678</li>
            </ul>
          </div>

          {/* Sponsor */}
          <div className="col-3 sponsor"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
