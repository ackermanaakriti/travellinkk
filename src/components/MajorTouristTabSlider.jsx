import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import MajorTouristCard from "./MajorTouristCard";
import {
  FetchDataAttraction,
  FetchNavCountryData,
  FetchNavListDatas,
} from "../utils/apiQueries";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const MajorTouristTabSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [activeTab, setActiveTab] = useState();
  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [allData, setAllData] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current) => setCurrentSlide(current),
  };

  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      // console.log(sliderRef.current);
      sliderRef.current.slickNext();
    }
  };
  // Update the total number of slides whenever the slider content changes
  const handleSliderUpdate = () => {
    if (sliderRef.current) {
      setTotalSlides(sliderRef.current.props.children.length);
    }
  };

  // console.log(countryData)

  const [displayingPackageData, setDisplayingPackageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await FetchDataAttraction();
        const data = res?.data?.data;
        const uniqueCountries = Array.from(new Set(data.map((item) => item?.country)));
        setCountryData(uniqueCountries);
        setAllData(data);
        if (uniqueCountries.length > 0) {
          setActiveTab(uniqueCountries[0]); 
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  console.log(displayingPackageData)
  const filteredData = useMemo(() => {
    return allData.filter((item) => item.country === activeTab);
  }, [allData, activeTab]);

  useEffect(() => {
    setDisplayingPackageData(filteredData);
  }, [filteredData]);

  const handleTabclick = async (country) => {
    setActiveTab(country);
  };
  // const handleTabclick = async (id) => {
  //   setActiveTab(id);
  //   setLoading(true);
  //   const data = await FetchNavCountryData(id).then(
  //     (res) => res.data?.data?.information
  //   );
  //   if (id && data?.length > 0) {
  //     if (data?.length > 0) {
  //       setDisplayingPackageData(data);
  //       console.log(data)
  //     }
  //   } else {
  //     setDisplayingPackageData(data);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (countryData?.length > 0) {
  //     setActiveTab(countryData[0]?.id);
  //     const fetchDefaultData = async () => {
  //       const data = await FetchNavCountryData(countryData[0]?.id).then(
  //         (res) => res.data?.data?.information
  //       );

  //       if (data?.length > 0) {
  //         if (data?.length > 0) {
  //           setDisplayingPackageData(data);
  //         }
  //       } else {
  //         setDisplayingPackageData(data);
  //         setLoading(false);
  //       }
  //     };
  //     fetchDefaultData();
  //   }
  // }, [countryData]);
  // useEffect(() => {
  // FetchNavListDatas()
  //   .then((res) => {
  //     setCountryData(res.data.data);
  //   })
  //   .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="relative overflow-x-hidden min-h-[28vh]">
      <div className="flex flex-col lg:flex-row gap-[11px] justify-between items-center mt-5">
        <div className="w-full flex lg:gap-[24px] gap-[15px] items-center justify-start overflow-scroll md:overflow-hidden font-normal text-center font-inter">
          {countryData.map(
            (country, index) => (
              <div key={index}>
                <p
                  className={`border ${
                    activeTab === country
                      ? "border-[#3D3D3D] bg-[#2D3134] text-white "
                      : ""
                  } border-[#3D3D3D] rounded-full lg:px-[20px] px-[11px] py-[5px] cursor-pointer whitespace-nowrap`}
                  onClick={() => {
                    handleTabclick(country);
                  }}
                >
                  {country}
                </p>
              </div>
            )
          )}
          {/* {countryData?.map((item, index) => (
            <div key={index}>
              <p
                className={`border ${
                  activeTab === item?.id
                    ? "border-[#3D3D3D] bg-[#2D3134] text-white "
                    : ""
                } border-[#3D3D3D] rounded-full lg:px-[20px] px-[11px] py-[5px] cursor-pointer whitespace-nowrap`}
                onClick={() => {
                  handleTabclick(item?.id);
                }}
              >
                {item?.name} 
              </p>
            </div>
          ))} */}
        </div>

        <div className="flex gap-[24px]">
          <button
            className={`rounded-full w-[39px] h-[39px] flex items-center justify-center ${
              currentSlide === 0
                ? "bg-transparent text-black border border-black"
                : "bg-[#2D3134] text-white border border-[#2D3134]"
            }`}
            onClick={goToPreviousSlide}
          >
            <BiChevronLeft className="text-[24px]" />
          </button>
          <button
            className={`text-white rounded-full w-[39px] h-[39px] flex items-center justify-center ${
              currentSlide === totalSlides - 1
                ? "bg-transparent text-black border border-black"
                : "bg-[#2D3134] text-white border border-[#2D3134]"
            }`}
            onClick={goToNextSlide}
          >
            <BiChevronRight className="text-[24px]" />
          </button>
        </div>
      </div>

      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef.current = slider;
          handleSliderUpdate();
        }}
        className="flex items-center"
      >
        {displayingPackageData?.length > 0 ? (
          displayingPackageData.map((item, index) => (
            <Link
              to={`/country/attraction/${item?.slug}`}
              className="px-[11px]"
              key={index}
            >
              <MajorTouristCard data={item} wordLimit={5} />
            </Link>
          ))
        ) : (
          <div className="">
            <p className="font-inter font-semibold text-[24px] text-center p-[56px]">
              No Data Found
            </p>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default MajorTouristTabSlider;