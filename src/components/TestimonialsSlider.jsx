import React, {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {TestimonialsCard, PopupTestimonialsDetails} from '../components';
import { useGlobalContext } from '../context/useGlobalContext';
import { FetchtestimonialsData } from '../utils/apiQueries';

const TestimonialsSlider = () => {
    const { setOverlay } = useGlobalContext();

    const [timonialsData, setTimonialsData] = useState([]);
    useEffect(() => {
        FetchtestimonialsData().then(res => {
            setTimonialsData(res.data.data);
        }).catch((err) => console.log(err));
    }, [])

    const sliderRef = useRef(null);
    const [isShowDetails, setIsShowDetails] = useState(false);
    const [comment, setComment] = useState({
        description: '',
        name: '',
        image: '',
        country: '',
        package_name: ''
    });

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        centerMode: true,
        centerPadding: 27,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            }, {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <>
            <div className="relative">

                <Slider {...settings}
                    ref={sliderRef}
                    className="flex items-center">
                    {
                    timonialsData ?. map((item, index) => (
                        <div className='px-[24px]'
                            key={index}>
                            <TestimonialsCard data={item}
                                handleBtnClick={
                                    (description, name, image, country, package_name) => {
                                        setIsShowDetails(true)
                                        setOverlay(true)
                                        setComment({
                                            description,
                                            name,
                                            image,
                                            country,
                                            package_name
                                        })
                                    }
                                }/>
                        </div>
                    ))
                } </Slider>
                <div className='z-40'> {
                    isShowDetails && <PopupTestimonialsDetails descriptionB={comment}
                        handleCross={
                            () => {
                                setOverlay(false)
                                setIsShowDetails(false)}
                        }/>
                }
                    </div>

            </div>
        </>

    )
}

export default TestimonialsSlider
