import React, { useEffect, useState } from "react";
import {
  Button,
  MetaDecorator,
  PackagesCard,
  PageTopComponent,
  PageTopTextComponent,
  ServicesCard,
} from "../components";
import { useGlobalContext } from "../context/useGlobalContext";
import { FetchCountryData, FetchNavCountryData } from "../utils/apiQueries";
import { useParams } from "react-router-dom";

const IndividualDestination = () => {
  const { id, slug } = useParams();

  const [navCountryData, setNavCountryData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchNavCountryData(id)
      .then((res) => {
        setLoading(false);
        setNavCountryData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const CountryDataA = navCountryData?.packages;
console.log(navCountryData)
  const CountryDataB = navCountryData?.information;

  // const [destinationData, setDestinationData] = useState([]);

  // useEffect(() => {
  //   FetchCountryData(slug)
  //     .then((res) => {
  //       setLoading(false);
  //       setDestinationData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // }, [slug]);

  const [array, setArray] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

  const { setNavActive } = useGlobalContext();
  // Setting the nav state
  useEffect(() => {
    setNavActive("destination");
  }, []);

  useEffect(() => {
    setArray(CountryDataA?.slice(0, 6));
    if (CountryDataA?.length > 6) {
      setShowBtn(true);
    }
  }, [CountryDataA]);

  const addMore = () => {
    const currentLength = array?.length;
    const nextItems = CountryDataA.slice(currentLength, currentLength + 3);

    if (nextItems?.length > 0) {
      setArray((prev) => [...prev, ...nextItems]);
    }

    if (currentLength + nextItems?.length >= CountryDataA?.length) {
      setShowBtn(false);
    }
  };
  const { siteInfo } = useGlobalContext();
  return (
    <div className="w-full min-h-[80vh] bg-[#F5FCFF]">
      <MetaDecorator title={`country`} />
      {(!CountryDataA || !navCountryData) && !loading ? (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <p className="font-inter font-bold py-8 text-[32px]">
            No Data Found !!!
          </p>
        </div>
      ) : (
        <>
          <div>
            <PageTopComponent
              title={navCountryData?.name}
              image={navCountryData?.flag}
              setTextA={true}
              setTextB={false}
            />
          </div>

          <div className="w-full lg:px-globalPadding px-[11px] lg:py-[2%] pt-[5%]">
            <div className="pt-3">
              <PageTopTextComponent
                title={navCountryData?.title}
                discription={navCountryData?.description}
              />
            </div>

            <div className="py-[4%] flex flex-col gap-[32px]">
              {CountryDataB?.map((item, index) => (
                <ServicesCard
                  data={item}
                  key={index}
                  isEven={index % 2 == 0 ? true : false}
                  link={`/country/information/${item?.slug}`}
                  showbtn={true}
                  wordLimit={120}
                />
              ))}
            </div>

            <div className="py-[3%]">
              {array?.length > 0 && (
                <h2 className="font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-center pb-[2%]">
                  {siteInfo?.category_destination}
                </h2>
              )}
              <div className="flex flex-row flex-wrap md:-mx-7 mx-0  mt-3 gap-y-7 justify-center ">
                {array?.map((item, index) => (
                  <>
                  <PackagesCard
                    key={index}
                    data={item}
                    Package={item?.packageCategory?.name}
                    link={`/details/${item?.slug}`}
                  />
                 
                
                  </>
                ))}{" "}
              </div>
              <div className="hover:opacity-90 mt-[4%] flex justify-center">
                {showBtn && (
                  <Button
                    handleOnclick={() => {
                      addMore();
                    }}
                    btnName="View More Trips"
                    style="bg-transparent border-b-2 border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[16px] "
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IndividualDestination;
