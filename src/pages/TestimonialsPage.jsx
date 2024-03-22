import React, { useEffect, useState } from "react";
import {
  FeedbackForm,
  MetaDecorator,
  PageTopComponent,
  PageTopTextComponent,
  TestimonialsSlider,
} from "../components";
import { useGlobalContext } from "../context/useGlobalContext";
import { FetchtestimonialsDetailData } from "../utils/apiQueries";

const TestimonialsPage = () => {
  const [timonialsDetailData, setTimonialsDetailData] = useState({});
  useEffect(() => {
    FetchtestimonialsDetailData()
      .then((res) => {
        setTimonialsDetailData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { setNavActive } = useGlobalContext();
  // Setting the nav state
  useEffect(() => {
    setNavActive("testimonials");
  }, []);

  const { siteInfo } = useGlobalContext();

  return (
    <>
      <MetaDecorator title="Testimonials" />

      <div className="w-full bg-[#F5FCFF]">
        <div>
          <PageTopComponent
            title={"Testimonials"}
            image={timonialsDetailData?.image}
            setTextA={true}
            setTextB={false}
          />
        </div>

        <div className="w-full lg:px-globalPadding px-[11px] lg:py-[2%] pt-[5%]">
          <div className="flex flex-col">
            <PageTopTextComponent
              title={timonialsDetailData?.title}
              discription={timonialsDetailData?.details}
            />
          </div>
        </div>
        <div className="pb-5 overflow-x-hidden">
          <TestimonialsSlider />
        </div>

        <div className="w-full lg:px-[15%] 2xl:px-[21%] px-[11px] py-[2%]">
          <h2 className="font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-center py-[4%]">
            {siteInfo?.drop_feedback}
          </h2>
          <FeedbackForm />
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
