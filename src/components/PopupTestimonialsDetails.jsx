import React from 'react'
import "../styles/style.css";
import Button from './Button';

const PopupTestimonialsDetails = ({handleCross, descriptionB}) => {

    const {
        description,
        name,
        image,
        country,
        package_name
    } = descriptionB

    return (
        <div style={
                {
                    animation: "loginAnimation ease-out 0.5s"
                }
            }
            className='z-40 h-[70vh] w-[98vw] lg:w-fit lg:h-fit fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] overflow-y-auto bg-white 2xl:p-5 rounded-[25px] lg:rounded-[5px] shadow-xl'>
            <div className='flex flex-col xl:gap-[15px] p-3 xl:p-5'>
                <h2 className='font-medium font-inter text-[#2D3134] text-[21px]'>
                "{description?.length > 85 ? description.slice(0,85) : description}"</h2>
                <p className='font-inter font-normal text-[#2D3134]'>
                    {description}</p>

                <div className='flex flex-col gap-[5px] xl:gap-[24px] items-center'>
                    <div className='w-full flex flex-col lg:flex-row justify-between gap-[24px] bg-[#E1EFFF] p-5 rounded-[5px]'>

                        <div className='w-full flex gap-[24px]'>
                            <div className=''>
                                <img src={image}
                                    alt='Image'
                                    className='min-w-[58px] max-w-[58px] min-h-[58px] max-h-[58px] rounded-full object-cover'/>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <h2 className='text-[#2D3134] text-[21px] leading-[21px] font-medium font-inter'>
                                    {name}</h2>
                                <p className='text-[#2D3134] font-normal font-inter'>
                                    {country}</p>
                            </div>
                        </div>


                        <div className='w-full flex items-center lg:justify-end'>
                            <h2 className='text-[#2D3134] text-[19px] leading-[21px] font-medium font-inter'>
                                Trip: {package_name}</h2>
                        </div>
                    </div>


                    <div className='w-max flex justify-center'>
                        <div className="w-full hover:opacity-90">
                            <Button btnName="Done Reading" style="w-full rounded-[5px] bg-transparent border border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[16px] px-[32px] py-[11px]"
                                handleOnclick={
                                    () => handleCross()
                                }/>
                        </div>

                    </div>

                </div>

            </div>

        </div>


    )
}

export default PopupTestimonialsDetails
