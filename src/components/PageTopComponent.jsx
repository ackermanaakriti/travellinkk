import React from 'react'

const PageTopComponent = ({title,image,setTextA,setTextB}) => {
    return (
        <div className='relative'>
           <div className="w-full lg:px-globalPadding px-[11px] h-[25vh] lg:h-[45vh] flex flex-col justify-center items-center"
            style={{ 
              backgroundImage: `linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%) 20%), url(${
                image
              })`,
              backgroundRepeat: "no-repeat",
             
              width: "100%",            
              backgroundSize: "cover",     
              backgroundPosition:'center'        
            }}
            > 
            {
              setTextA && (
            <p className='text-white lg:text-[50px] sm:text-[38px] text-[36px] font-semibold font-inter flex'>{title}</p>
        )}                   

            </div>
            <div className='absolute bottom-3 left-0 lg:px-globalPadding px-[11px]'>
            {
              setTextB && (
                <p className='text-white text-[32px] font-semibold font-inter'>{title}</p>
              )
            }
            </div>
            
        </div>
    )
}

export default PageTopComponent
