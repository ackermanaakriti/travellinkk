import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  BookForm,
  BookTab,
  CostDetails,
  CostInformation,
  Itineraries,
  Overview,
  PageTopComponent,
  RelatedPackageSlider,
  TripFactsCard,
  ViewDealSlider,
  Share,
  MetaDecorator,
  ImageView,
  BackgroundOverlay,
} from "../components";
import { useGlobalContext } from "../context/useGlobalContext";
import { FetchpackagesDetailsData } from "../utils/apiQueries";

const Details = () => {
  const [imageToDisplay, setImageToDisplay] = useState("");

  const { slug } = useParams();

  const [packageDetailsData, setPackageDetailsData] = useState([]);
  useEffect(() => {
    FetchpackagesDetailsData(slug)
      .then((res) => {
        setPackageDetailsData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [slug]);
  console.log(packageDetailsData)

  const mainData = packageDetailsData?.package;


  const { setOverlay } = useGlobalContext();
  const [searchParams] = useSearchParams();
  const [isTabOpen, setIsTabOpen] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isShareActive, setIsShareActive] = useState(false);

  const isBookActive = searchParams.get("book");
  useEffect(() => {
    if (isBookActive) {
      setIsTabOpen(false);
      setIsFormOpen(true);
    } else {
      setIsTabOpen(true);
      setIsFormOpen(false);
    }
  }, [searchParams, isBookActive, slug]);
  const { setNavActive } = useGlobalContext();
  // Setting the nav state
  useEffect(() => {
    setNavActive("");
  }, []);

  const [activeTabId, setActiveTabId] = useState(1);
  const tabs = [
    {
      name: "Trip Overview",
      id: 1,
    },
    {
      name: "Itineraries",
      id: 2,
    },
    {
      name: "Cost Details",
      id: 3,
    },
    {
      name: "Cost Information",
      id: 4,
    },
  ];
  const { siteInfo } = useGlobalContext();
  return (
    <div className="min-h-[80vh]">
      <MetaDecorator title={mainData?.name} />
      {mainData && (
        <div className="w-full bg-[#F5FCFF] relative">
          <div>
            <PageTopComponent
              title={mainData?.name}
              image={mainData?.main_image}
              setTextA={false}
              setTextB={true}
            />
          </div>
          <div className="w-full lg:px-globalPadding px-[11px] py-[3%]">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-[32px]">
              <div className="w-full flex-col lg:w-[65%]">
                <div className="w-full block lg:hidden">
                  <div className="bg-white rounded-[5px] p-5">
                    <TripFactsCard
                      data={mainData}
                      handleBtnClickA={() => {
                        setIsTabOpen(false);
                        setIsFormOpen(true);
                        setOverlay(true);
                      }}
                      handleShareClick={() => {
                        setOverlay(true);
                        setIsFormOpen(false);
                        setIsShareActive(true);
                      }}
                    />
                  </div>
                  <div className="pt-8">
                    <img
                      src={mainData?.map_image}
                      alt="map"
                      className="object-cover lg:block hidden"
                    />
                  </div>
                </div>

                <div>
                  <ViewDealSlider
                    data={packageDetailsData?.package_galleries}
                  />
                </div>

                {/*...Tab...*/}
                {isTabOpen && (
                  <div className="w-full my-[11%] lg:my-[7%]">
                    <BookTab
                      tabNames={tabs}
                      handleTabClick={(id) => setActiveTabId(id)}
                      activeTabId={activeTabId}
                    />{" "}
                    {activeTabId === 1 && (
                      <div>
                        <Overview data={mainData?.details} />
                      </div>
                    )}
                    {activeTabId === 2 && (
                      <div>
                        <Itineraries itinerary={mainData?.itinerary_data} />
                      </div>
                    )}
                    {activeTabId === 3 && (
                      <div>
                        <CostDetails
                          cost_note={mainData?.cost_note}
                          dynamicValues={mainData?.cost_detail}
                        />
                      </div>
                    )}
                    {activeTabId === 4 && (
                      <div>
                        <CostInformation costInfoData={mainData?.cost_info} />
                      </div>
                    )}{" "}
                  </div>
                )}
                <div className="my-[11%] lg:my-[7%] hidden lg:block">
                  {isFormOpen && (
                    <BookForm
                      id={mainData?.id}
                      handleBtnClickB={() => {
                        setIsTabOpen(true);
                        setIsFormOpen(false);
                      }}
                      backName={isBookActive ? "Go to details" : "Go back"}
                    />
                  )}{" "}
                </div>

                <div className="block lg:hidden z-40">
                  {isFormOpen && (
                    <BookForm
                      id={mainData?.id}
                      handleBtnClickB={() => {
                        setOverlay(false);
                        setIsTabOpen(true);
                        setIsFormOpen(false);
                      }}
                      backName={isBookActive ? "Go to details" : "Go back"}
                    />
                  )}{" "}
                </div>
              </div>
              <div className="w-full hidden lg:block lg:w-[35%] 2xl:w-[30%]">
                <div className="bg-white rounded-[5px] p-5">
                  <TripFactsCard
                    data={mainData}
                    handleBtnClickA={() => {
                      setIsTabOpen(false);
                      setIsFormOpen(true);
                    }}
                    handleShareClick={() => {
                      setIsShareActive(true);
                      setOverlay(true);
                    }}
                  />
                </div>

                <img
                  src={mainData?.map_image}
                  onClick={() => setImageToDisplay(mainData?.map_image)}
                  className="object-cover lg:block hidden cursor-pointer w-full"
                  alt="map"
                />

                {/*...Image Display mode...*/}
                {imageToDisplay && (
                  <div className="pt-8">
                    <ImageView
                      image={imageToDisplay}
                      handleCross={() => setImageToDisplay("")}
                    />

                    <BackgroundOverlay />
                  </div>
                )}
                {/* <div className='pt-8'>
                            <img src={mainData?.map_image}
                                alt='map'
                                className='object-cover lg:block hidden'/>
                        </div> */}
              </div>
            </div>
          </div>
          <div className="pb-[3%] w-full  px-[11px] overflow-x-hidden">
            {packageDetailsData?.relatedPackage?.length > 0 && (
              <h2 className="font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-center pb-[2%]">
               {siteInfo?.package_detail_title}
              </h2>
            )}
            <div>
            <RelatedPackageSlider
              relatedPackagesListData={packageDetailsData?.relatedPackage}
            /> </div>


           
          </div>
        </div>
      )}
      <div>
        {isShareActive && (
          <Share
            handleCross={() => {
              setIsShareActive(false);
              setOverlay(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Details;
