import Slider from 'react-slick';
import SlideItem from './SlideItem';
import './slide.scss';
import { useEffect } from 'react';

function Slide() {
  useEffect(() => {}, []);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slide">
      <div className="container">
        <div className="row">
          <div className="col-8 carousel">
            <Slider className="slide" {...settings}>
              <SlideItem
                image="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1170x300/https://cdn.tgdd.vn/2024/04/banner/AWSE-2400-600-1920x480.png"
                error="watch"
              />
              <SlideItem
                image="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1170x300/https://cdn.tgdd.vn/2024/04/banner/AW-S9-2400-600-1920x480-1.png"
                error=""
              />
              <SlideItem
                image="https://cdn.tgdd.vn/2024/03/banner/Smartwatch-Befit-1200-300-1200x300.png"
                error="watch"
              />
              <SlideItem
                image="https://cdn.tgdd.vn/2024/03/banner/SW-Xiaomi-1200-300-1200x300-5.png"
                error="watch"
              />
            </Slider>
          </div>

          <div className="col-4 image"></div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
