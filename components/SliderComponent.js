// components/SliderComponent.js
import React from 'react';
import Slider from 'react-slick';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div>
          <img src="/photo1.png" alt="Slide 1" />
        </div>
        <div>
          <img src="/photo2.png" alt="Slide 2" />
        </div>
        <div>
          <img src="/photo3.png" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
