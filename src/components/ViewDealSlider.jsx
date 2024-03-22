import React, {useRef} from 'react';
import "../styles/style.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ViewDealSlider = ({data}) => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight:true, 
    };

  return (
    <div className="relative">    

    <Slider {...settings}
        ref={sliderRef}
        className="w-full flex items-center">
        {
        data ?. map((item, index) => (
            <div key={index}>
              <img src={item?.image} alt='aboutUs Slider' className="w-full object-cover h-[35vh] lg:h-[55vh]"/>
            </div>
        ))
    } </Slider>


</div>
  )
}

export default ViewDealSlider