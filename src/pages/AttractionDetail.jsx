import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Button,
  MajorTouristCard,
  MetaDecorator,
  PackagesCard,
  PageTopComponent,
  PageTopTextComponent,
} from "../components";
import { useGlobalContext } from "../context/useGlobalContext";
import {
  FetchNavCultureInfoData,
  FetchNavCountryData,
  FetchDataAttraction,
} from "../utils/apiQueries";

const AttractionDetail = () => {
  const { slug } = useParams();
  const [array, setArray] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [individualAttraction, setIndividualAttraction] = useState(null);
  const [relatedData, setRelatedData] = useState([]);

  const { setNavActive } = useGlobalContext();

  useEffect(() => {
    setNavActive("destination");
  }, [setNavActive]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await FetchDataAttraction();
        const data = res?.data?.data;
        setIndividualAttraction(data.find((item) => item.slug === slug));
        setRelatedData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    if (individualAttraction) {
      const filteredData = relatedData.filter(
        (item) =>
          item.country === individualAttraction.country &&
          item.slug !== individualAttraction.slug
      );
      setArray(filteredData.slice(0, 6));
      setShowBtn(filteredData.length > 6);
    }
  }, [individualAttraction, relatedData]);

  const addMore = () => {
    const currentLength = array.length;
    const nextItems = relatedData.slice(currentLength, currentLength + 3);

    if (nextItems.length > 0) {
      setArray((prev) => [...prev, ...nextItems]);
    }

    if (currentLength + nextItems.length >= relatedData.length) {
      setShowBtn(false);
    }
  };

  return (
    <div className="w-full bg-[#F5FCFF]">
      <>
        <MetaDecorator title={`country detail`} />
        <div>
          <PageTopComponent
            title={
              individualAttraction?.banner_title || individualAttraction?.country
            }
            image={individualAttraction?.image}
            setTextA={true}
            setTextB={false}
          />
        </div>
        <div className="w-full lg:px-globalPadding px-[11px] lg:py-[2%] pt-[5%]">
          <div className="pt-3">
            <PageTopTextComponent
              title={individualAttraction?.title}
              discription={individualAttraction?.description}
            />
          </div>
          {array.length > 0 && (
            <div className="py-[3%]">
              <h2 className="font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-center pb-[2%]">
                Other Popular Attraction
              </h2>
              <div className="flex flex-row flex-wrap md:-mx-7 mx-0  mt-3 gap-y-7 justify-center ">
                {array.map((item, index) => (
                  <div className="w-1/3 px-7" key={index}>
                    <Link
                      to={`/country/attraction/${item.slug}`}
                      className="px-[11px]"
                    >
                      <MajorTouristCard data={item} wordLimit={5} />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="hover:opacity-90 mt-[4%] flex justify-center">
                {showBtn && (
                  <Button
                    handleOnclick={addMore}
                    btnName="View More Trips"
                    style="bg-transparent border-b-2 border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[16px] "
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default AttractionDetail;
