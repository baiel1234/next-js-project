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
          <img src="https://salymbekov.com/wp-content/uploads/2023/02/bc0b2014-1920x1008.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://salymbekov.com/wp-content/uploads/2023/02/bc0b2640-1920x1008.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://salymbekov.com/wp-content/uploads/2023/02/bc0b3447.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
