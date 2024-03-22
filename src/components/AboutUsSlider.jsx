import React, {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FetchAboutGalleryDatas } from '../utils/apiQueries';

const AboutUsSlider = () => {
  const [aboutGalleryData, setAboutGalleryData] = useState([]);
  useEffect(() => {
    FetchAboutGalleryDatas().then(res => {
      setAboutGalleryData(res.data.data);
      }).catch((err) => console.log(err));
  }, [])

    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight:true, 
        centerMode:true,
        centerPadding:'151px',  
        speed: 7000,
        ease: 'ease',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode:true,
              centerPadding:'151px',
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode:true,          
              centerPadding:'151px',
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode:false,
            },
          },
        ],
      
      };
    

  return (
    <div className="relative overflow-x-hidden">    

            <Slider {...settings}
                ref={sliderRef}
                className="w-full flex items-center">
                {
                aboutGalleryData ?. map((item, index) => (
                    <div key={index}>
                      <img src={item?.images} alt='aboutUs Slider' className="w-full object-cover h-[25vh]"/>
                    </div>
                ))
            } </Slider>


        </div>
  )
}

export default AboutUsSlider