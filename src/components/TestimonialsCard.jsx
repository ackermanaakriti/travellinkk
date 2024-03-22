import React from "react";
import "../styles/style.css";
import Button from "./Button";

const TestimonialsCard = ({ data, handleBtnClick }) => {
  const { image, name, description, country, package_name } = data;

  return (
    <div>
      <div className="w-full mt-8">
        <div className="shadow-md my-3 rounded-[24px] h-[270px]">
          <div
            className="bg-white p-8 rounded-[24px] shadow-xl h-[270px]"
            style={{ boxShadow: "24px 0px 0px -5px #1C659A" }}
          >
            <div className="flex flex-col justify-between gap-[8px] h-full">
                <div className="flex flex-col grow">
                <h2 className="font-medium font-inter text-[#2D3134] text-[21px]">
                "
                {description?.length > 40
                  ? description.slice(0, 40)
                  : description}
                "
              </h2>
              <p className="font-inter font-normal text-[#2D3134]">
                {description?.length > 40
                  ? description.slice(0, 40) + "..."
                  : description}
              </p>
                </div>            

              <div className="hover:opacity-90 flex justify-end">
                <Button
                  btnName="Read More"
                  handleOnclick={() =>
                    handleBtnClick(
                      description,
                      name,
                      image,
                      country,
                      package_name
                    )
                  }
                  style="bg-transparent border-b-2 border-[#1C659A] font-semibold text-[#1C659A] font-inter p-0"
                />
              </div>
              <div className="flex gap-[24px] items-center">
                <div>
                  <img
                    src={image}
                    alt="Image"
                    className="min-w-[58px] max-w-[58px] min-h-[58px] max-h-[58px] rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h2 className="text-[#2D3134] text-[21px] leading-[21px] font-medium font-inter">
                    {name}
                  </h2>
                  <p className="text-[#2D3134] font-normal font-inter">
                    {country}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
