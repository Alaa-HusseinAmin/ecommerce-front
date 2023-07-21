import React from 'react';
import Slider from "react-slick";
import s1 from "../../images/s1.png";
import s2 from "../../images/s2.png";
import s3 from "../../images/s3.png";
import s4 from "../../images/s4.jpg";
import s5 from "../../images/s5.png";
import s6 from "../../images/s6.png";
import s7 from "../../images/s7.png";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (<>
  <div className='my-3'>
      <Slider {...settings}>
    <img src={s1} alt=''/>
    <img src={s2} alt=''/>
    <img src={s3} alt=''/>
    <img src={s4} alt=''/>
    <img src={s5} alt=''/>
    <img src={s6} alt=''/>
    <img src={s7} alt=''/>
  </Slider>
    </div>
  </>
  )
}
