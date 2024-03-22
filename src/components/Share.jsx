import React from 'react'
import { handleShareClick } from '../utils/handleShare'
import {RxCross2} from 'react-icons/rx'
import { facebookIcon, gmailIcon, instagramIcon, linkedinIcon, skypeIcon, tiktokIcon, twitterIcon, viberIcon, whatsappIcon } from '../assets'
const Share = ({handleCross}) => {
  return (
    <div
    style={
      {
          animation: "loginAnimation ease-out 0.5s"
      }
  }
        className='fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] overflow-y-auto bg-white z-40 w-[98vw] h-fit lg:w-fit p-8 rounded-[25px]'
    >
        <div className='relative h-full w-full'>
          <div className='flex flex-col gap-[32px]'>
            <div className='flex justify-between gap-[32px]'>
            <p onClick={()=> handleShareClick("facebook")} className='cursor-pointer'><img src={facebookIcon} alt='facebook' className='w-[40px] h-[40px]'/></p>
            <p onClick={()=> handleShareClick("twitter")} className='cursor-pointer'><img src={twitterIcon} alt='twitter' className='w-[40px] h-[40px]'/></p>
            <p onClick={()=> handleShareClick("whatsapp")} className='cursor-pointer'><img src={whatsappIcon} alt='whatsapp' className='w-[40px] h-[40px]'/></p>
            </div>
            <div className='flex justify-between gap-[32px]'>
            <p onClick={()=> handleShareClick("instagram")} className='cursor-pointer'><img src={instagramIcon} alt='instagram' className='w-[40px] h-[40px]'/></p>
            <p onClick={()=> handleShareClick("viber")} className='cursor-pointer'><img src={viberIcon} alt='viber' className='w-[40px] h-[40px]'/></p>
            <p onClick={()=> handleShareClick("skype")} className='cursor-pointer'><img src={skypeIcon} alt='skype' className='w-[40px] h-[40px]'/></p>
            </div>
            <div className='flex justify-between gap-[32px]'>
            <p onClick={()=> handleShareClick("linkedin")} className='cursor-pointer'><img src={linkedinIcon} alt='linkedin' className='w-[40px] h-[40px]'/></p>
            <p onClick={()=> handleShareClick("tiktok")} className='cursor-pointer'><img src={tiktokIcon} alt='tiktok' className='w-[40px] h-[40px]'/></p>
            <p onClick={()=> handleShareClick("gmail")} className='cursor-pointer'><img src={gmailIcon} alt='tiktok' className='w-[40px] h-[40px]'/></p>
            </div>
          </div>
        
        </div>
          <div onClick={handleCross} className='absolute right-3 top-3 text-[21px] cursor-pointer'>
            <RxCross2 />
          </div>
    </div>
  )
}

export default Share