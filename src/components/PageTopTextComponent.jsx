import React from 'react'

const  PageTopTextComponent = ({title,discription,formatDate}) => {
  return (
    <div className='flex justify-between flex-col  md:px-[18px]'>
     
                        <div className='flex justify-between items-center'>
    <h2 className='font-semibold font-inter text-[30px] text-[#0E9EDA] sm:leading-[40px] md:leading-[55px] lg:text-[55px] md:text-[40px] sm:text-[35px] text-start' >{title}
      <p className='font-inter text-[16px]  pl-[30px] font-medium pt-3 float-right text-[#0E9EDA]'>{formatDate} </p> </h2>
      </div>
  
    <p className='font-inter md:pt-[25px] sm:pt-[18px]  text-[#5B5F62] text-justify leading-[25px] text-[17px] font-[500]' dangerouslySetInnerHTML={{ __html: discription }}/> 
   
      
</div>
  )
}

export default PageTopTextComponent