import React from "react";
import "../styles/style.css";
import {
    Logo,
    americanExpress,
    discoverCard,
    footerBg,
    masterCard,
    nattaLogo,
    nepGov,
    ntbLogo,
    tripAdvisorImg,
    visaCard
} from "../assets";
import {PiMapPin} from 'react-icons/pi';
import {BsFacebook, BsSignpostFill, BsTelephone, BsWhatsapp} from 'react-icons/bs';
import {AiFillInstagram, AiOutlineMail} from 'react-icons/ai';
import {Link} from "react-router-dom";
import {useGlobalContext} from "../context/useGlobalContext";

const Footer = () => {
    const {siteInfo} = useGlobalContext();

    return (
        <> {/*....Footer Section...*/}
            <div className="w-full lg:px-globalPadding px-[11px] footer_img">
                <div className="w-full flex flex-col lg:flex-row justify-between gap-[32px] border-b pt-8 pb-5">
                    <div className="w-full flex flex-col gap-[17px]">
                        <div className="w-full flex gap-[21px]">
                            <div className="w-full">
                                <h2 className="text-[20px] leading-[24px] text-white font-semibold flex justify-center font-inter underline decoration-2 whitespace-nowrap">Quick Contact</h2>
                            </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-[21px]">
                            <div className="w-full rounded-[5px] flex items-center justify-center lg:justify-end">
                                <img src={siteInfo?.site_logo}
                                    alt="Logo"
                                    className="rounded-[5px] w-[181px] h-[99px] object-contain"/>
                            </div>
                            <div className="w-full flex flex-col gap-[17px]">
                                <div className="flex flex-col items-center lg:items-start gap-[11px]">
                                    <p className="leading-[20px] text-white font-medium font-inter flex gap-[8px] lg:px-0 lg:mx-0 justify-center lg:justify-start items-center lg:whitespace-nowrap">
                                        <span><PiMapPin/></span>
                                        <span>{
                                            siteInfo ?. contact_address
                                        }</span>
                                    </p>
                                    <p className="leading-[20px] text-white font-medium font-inter flex gap-[8px] lg:px-0 lg:mx-0 justify-center lg:justify-start items-center lg:whitespace-nowrap">
                                        <span><BsSignpostFill/></span>
                                        <span>G.P.O. Box {
                                            siteInfo ?. postal_code
                                        }</span>
                                    </p>
                                    <Link to={
                                                `tel:${
                                                  siteInfo ?. contact_landline
                                                }`
                                            }
                                            target="_blank" className="w-max">
                                    <p className="leading-[20px] text-white font-medium font-inter flex gap-[8px] lg:px-0 lg:mx-0 justify-center lg:justify-start items-center lg:whitespace-nowrap">
                                        <span><BsTelephone/></span>
                                            <span>{
                                                siteInfo ?. contact_landline
                                            }</span>
                                        </p>
                                    </Link>
                                    <Link to={`https://api.whatsapp.com/send?phone=${siteInfo ?. contact_mobile}`}
                                            target="_blank" className="w-max">
                                    <p className="leading-[20px] text-white font-medium font-inter flex gap-[8px] lg:px-0 lg:mx-0 justify-center lg:justify-start items-center lg:whitespace-nowrap">
                                        <span><BsWhatsapp/></span>
                                        <span>{
                                            siteInfo ?. contact_mobile
                                        }</span>
                                    </p>
                                    </Link>
                                    <Link to={
                                                `mailto:${
                                                  siteInfo ?. contact_email
                                                }`
                                            }
                                            target="_blank" className="w-max">
                                    <p className="leading-[20px] text-white font-medium font-inter flex gap-[8px] lg:px-0 lg:mx-0 justify-center lg:justify-start items-center lg:whitespace-nowrap">
                                        <span><AiOutlineMail/></span>
                                        <span>{
                                            siteInfo ?. contact_email
                                        }</span>
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="2xl:w-full flex flex-col gap-[17px] items-center">
                        <div>
                            <h2 className="text-[21px] leading-[24px] text-white font-semibold font-inter underline decoration-2 whitespace-nowrap">Quick Links</h2>
                        </div>
                        <div className="flex flex-col gap-[11px]">
                            <Link to={'/'} className="leading-[20px] text-white font-medium font-inter flex gap-[8px] justify-center">Home</Link>
                            <Link to={'/services'} className="leading-[20px] text-white font-medium font-inter flex gap-[8px] justify-center">Services</Link>
                            {/* <Link to={'/destination'} className="leading-[20px] text-white font-medium font-inter flex gap-[8px] justify-center">Destination</Link> */}
                            <Link to={'/contactus'} className="leading-[20px] text-white font-medium font-inter flex gap-[8px] justify-center">Contact Us</Link>
                            <Link to={'/testimonials'} className="leading-[20px] text-white font-medium font-inter flex gap-[8px] justify-center">Testimonials</Link>
                            <Link to={'/blogs'}
                                className="leading-[20px] text-white font-medium font-inter flex gap-[8px] justify-center">Blogs</Link>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-[17px] items-center">
                        <div>
                            <h2 className="text-[20px] leading-[24px] text-white font-semibold font-inter underline decoration-2 whitespace-nowrap">Reviewed By</h2>
                        </div>
                        <div className="flex flex-col gap-[11px]">
                           <Link to={siteInfo?.trip_advisor}>
                          <img src={tripAdvisorImg}
                                alt='tripAdvisorImg Image'
                                className='h-[68px] w-[125px] object-contain'/>
                                  </Link>
                            <h2 className="text-[20px] leading-[24px] text-white font-semibold font-inter underline decoration-2 text-center">Follow Us</h2>
                            <div className="flex gap-[18px] text-white text-center justify-center">
                                <Link to={siteInfo?.fb_url} target="_blank" className="text-[35px]"><BsFacebook/></Link>
                                <Link to={siteInfo?.instagram} target="_blank" className="text-[40px]"><AiFillInstagram/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between py-5 2xl:lg:px-16 gap-[8px] border-b">
                    <div>
                        <div className="w-full flex flex-col">
                            <div className="flex justify-center">
                                <h2 className="text-[20px] leading-[24px] text-white font-semibold font-inter">Affiliated with</h2>
                            </div>
                            <div className="flex gap-[18px] justify-center mt-2">
                                <img src={nepGov}
                                    alt='nepGov Image'
                                    className='h-[66px] w-[60px] object-contain'/>
                                <img src={nattaLogo}
                                    alt='nattaLogo Image'
                                    className='h-[66px] w-[60px] object-contain'/>
                                <img src={ntbLogo}
                                    alt='ntbLogo Image'
                                    className='h-[66px] w-[60px] object-contain'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col">
                            <div className="flex justify-center">
                                <h2 className="text-[20px] leading-[24px] text-white font-semibold font-inter">We Accept</h2>
                            </div>
                            <div className="w-full flex gap-[18px] justify-center mt-2">
                                <img src={visaCard}
                                    alt='visaCard Image'
                                    className='lg:h-[66px] h-auto lg:w-[77px] w-[55px] object-contain'/>
                                <img src={americanExpress}
                                    alt='americanExpress Image'
                                    className='lg:h-[66px] h-auto lg:w-[77px] w-[55px] object-contain'/>
                                <img src={masterCard}
                                    alt='masterCard Image'
                                    className='lg:h-[66px] lg:w-[77px] h-auto w-[55px] object-contain'/>
                                <img src={discoverCard}
                                    alt='discoverCard Image'
                                    className='lg:h-[66px] lg:w-[77px] h-auto w-[55px] object-contain'/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="py-5 flex justify-center">
                    <h2 className="text-white font-semibold font-inter text-center">
                        {
                        siteInfo ?. site_footer_copyright
                    }</h2>
                </div>
            </div>
        </>
    );
};

export default Footer;
