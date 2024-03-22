import React, { useEffect, useState } from "react";
import {
  Button,
  MetaDecorator,
  PackagesCard,
  PageTopComponent,
  PageTopTextComponent,
} from "../components";
import { useGlobalContext } from "../context/useGlobalContext";
import { FetchDestinationDatas } from "../utils/apiQueries";
import { useParams } from "react-router-dom";

const Destination = () => {
  const { slug } = useParams();

  const [destinationData, setDestinationData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    FetchDestinationDatas(slug)
      .then((res) => {
        setLoading(false);
        setDestinationData(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [slug]);

  const packagesDetails = destinationData?.package;
  const packagesRelated = destinationData?.relatedPackage;

  const [array, setArray] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

  const { setNavActive } = useGlobalContext();
  // Setting the nav state
  useEffect(() => {
    setNavActive("destination");
  }, []);

  useEffect(() => {
    setArray(packagesRelated?.slice(0, 6));
    if (packagesRelated?.length > 6) {
      setShowBtn(true);
    }
  }, [packagesRelated]);

  const addMore = () => {
    const currentLength = array?.length;
    const nextItems = packagesRelated.slice(currentLength, currentLength + 3);

    if (nextItems?.length > 0) {
      setArray((prev) => [...prev, ...nextItems]);
    }

    if (currentLength + nextItems?.length >= packagesRelated?.length) {
      setShowBtn(false);
    }
  };
  const { siteInfo } = useGlobalContext();
  return (
    <div className="w-full min-h-[80vh] bg-[#F5FCFF]">
      <MetaDecorator title="Service" />{" "}
      {!packagesDetails && !loading ? (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <p className="font-inter font-bold py-8 text-[32px]">
            No Data Found !!!
          </p>
        </div>
      ) : (
        <>
          <div>
            <PageTopComponent
              title={packagesDetails?.name}
              image={packagesDetails?.main_image}
              setTextA={true}
              setTextB={false}
            />
          </div>

          <div className="w-full lg:px-globalPadding px-[11px] lg:py-[2%] pt-[5%]">
            <div className="pt-8">
              <PageTopTextComponent
                title={packagesDetails?.name}
                discription={packagesDetails?.details}
              />
            </div>

            {/* <div className='py-[4%] flex flex-col gap-[32px]'>
                {
                servicesCardData.slice(0,3).map((item, index) => (
                    <ServicesCard data={item}
                        key={index}
                        isEven={
                            index % 2 == 0 ? true : false
                        }
                        link={`/service/${item?.slug}`}
                        showbtn={false}
                        />

                ))
            } </div> */}

            <div className="py-[3%]">
              {array?.length > 0 && (
                <h2 className="font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-center pb-[2%]">
                  {siteInfo?.category_destination}
                </h2>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[51px] mt-3">
                {array?.map((item, index) => (
                  <PackagesCard
                    key={index}
                    data={item}
                    Package={item?.name}
                    link={`/details/${item?.slug}`}
                  />
                ))}{" "}
              </div>
              <div className="hover:opacity-90 mt-[4%] flex justify-center">
                {showBtn && (
                  <Button
                    handleOnclick={() => {
                      addMore();
                    }}
                    btnName="View More Packages"
                    style="bg-transparent border-b-2 border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[16px] "
                  />
                )}{" "}
              </div>
            </div>
          </div>
        </>
      )}{" "}
    </div>
  );
};

export default Destination;
