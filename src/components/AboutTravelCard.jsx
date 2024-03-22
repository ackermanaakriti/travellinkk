import React from 'react'

const AboutTravelCard = ({data}) => {
    const {image, name, content} = data;

    return (
                    <div className='flex flex-col gap-[8px] bg-white p-5 justify-center items-center shadow-lg'>
                        <img src={image}
                            alt='travel image'
                            className='w-[50px] h-[50px]'/>
                        <h2 className='text-[#2D3134] font-semibold font-inter whitespace-nowrap'>
                            {name}</h2>
                        <p className='text-center text-[#5B5F62] font-inter'>
                            {content}</p>
                    </div>
    )
}

export default AboutTravelCard
