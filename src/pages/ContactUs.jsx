import React, {useEffect, useState} from 'react'
import {ContactUsForm, MetaDecorator, PageTopComponent} from '../components'
import {contactBanner} from '../assets'
import {PiMapPin} from 'react-icons/pi'
import {BsSignpostFill, BsTelephone, BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {TbWorldWww} from 'react-icons/tb'
import {useGlobalContext} from '../context/useGlobalContext'
import { Link } from 'react-router-dom'
import { FetchBranchLocationData } from '../utils/apiQueries'

const ContactUs = () => {
    const {siteInfo} = useGlobalContext();
    const [branchLocationData, setBranchLocationData] = useState([]);
    useEffect(() => {
        FetchBranchLocationData().then(res => {
            setBranchLocationData(res.data.data);
        }).catch((err) => console.log(err));
    }, [])

    const {setNavActive} = useGlobalContext();
    // Setting the nav state
    useEffect(() => {
        setNavActive('contact-us');
    }, [])

    return (
        <>
            <MetaDecorator title="Contact Us"/>

            <div className="w-full bg-[#F5FCFF]">
                <div>
                    <PageTopComponent title={"Contact Us"}
                        image={contactBanner}
                        setTextA={true}
                        setTextB={false}/>
                </div>

                <div className='w-full lg:px-globalPadding px-[11px] pt-[4%] pb-[2%]'>
                    <div className='flex flex-col lg:flex-row justify-between gap-[32px] lg:gap-[111px] 2xl:gap-[21%]'>
                        <div className='flex flex-col gap-[15px]'>
                            <div>
                                <h2 className="text-blue font-bold font-montserrat text-center lg:text-start text-[32px] leading-[32px] whitespace-nowrap">Travel Link Services</h2>
                                <p className="font-medium font-inter text-[#2D3134] text-center lg:text-start text-[16px] whitespace-nowrap pt-1">Professional Tour Operator and Travel Agent</p>
                            </div>

                            <div className="w-full flex flex-col gap-[17px]">
                                <div className="flex flex-col gap-[11px] lg:pl-0 pl-8">
                                    <p className="leading-[20px] font-medium font-inter flex gap-[15px] justify-start items-center whitespace-nowrap">
                                        <span><PiMapPin/></span>
                                        <span>{
                                            siteInfo ?. contact_address
                                        }</span>
                                    </p>
                                    <p className="leading-[20px] font-medium font-inter flex gap-[15px] justify-start items-center whitespace-nowrap">
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
                                    <p className="leading-[20px] font-medium font-inter flex gap-[15px] justify-start items-center whitespace-nowrap">
                                        <span><BsTelephone/></span>
                                        <span>{
                                            siteInfo ?. contact_landline
                                        }</span>
                                    </p>
                                    </Link>
                                    <Link to={`https://api.whatsapp.com/send?phone=${siteInfo ?. contact_mobile}`}
                                            target="_blank" className="w-max">
                                    <p className="leading-[20px] font-medium font-inter flex gap-[15px] justify-start items-center whitespace-nowrap">
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
                                    <p className="leading-[20px] font-medium font-inter flex gap-[15px] justify-start items-center whitespace-nowrap">
                                        <span><AiOutlineMail/></span>
                                        <span className='text-[#0E9EDA]'>
                                            {
                                            siteInfo ?. contact_email
                                        }</span>
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <ContactUsForm/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[27px] lg:px-[6%] items-center justify-center pt-[4%]'>
                        <h2 className='font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-center'>{branchLocationData?.how_find_us}</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.089727929562!2d85.30774358888013!3d27.71174496860166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fdc76658b9%3A0x6c9793caa23b502b!2sChhetrapati%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1691301573091!5m2!1sen!2snp" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                    <div className='flex flex-col gap-[27px] pt-[4%]'>
                        <h2 className='font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-center'>{branchLocationData?.contact_reference}</h2>
                        <div className='w-full grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-[21px]'>
                            {
                            branchLocationData?.branch_locations?.map((item, index) => (
                                <div className="w-full flex flex-col gap-[17px] bg-white p-8"
                                    key={index}>
                                    <div className="flex flex-col gap-[11px]">
                                        <h2 className='font-semibold font-inter text-[23px] border-b border-[#2D3134] text-[#2D3134] leading-[32px] text-start mb-3'>
                                            {
                                            item ?. title
                                        }</h2>
                                        {
                                        item ?. contact_person && (
                                            <p className="leading-[20px] font-medium font-inter flex gap-[15px] justify-start items-center">
                                                <span><CgProfile/></span>
                                                <span>{
                                                    item ?. contact_person
                                                }</span>
                                            </p>
                                        )
                                    }
                                        {
                                        item ?. location && (
                                            <p className="leading-[20px] font-medium font-inter flex gap-[15px] justify-start items-center">
                                                <span><PiMapPin/></span>
                                                <span>{
                                                    item ?. location
                                                }</span>
                                            </p>
                                        )
                                    }
                                        {
                                        item ?. phone && (
                                            <Link to={
                                                `tel:${
                                                    item ?. phone
                                                }`
                                            }
                                            target="_blank" className="w-max"> <p className="leading-[20px] font-medium font-inter flex gap-[15px] justify-start items-center">
                                                <span><BsTelephone/></span>
                                                <span>{
                                                    item ?. phone
                                                }</span>
                                            </p>
                                            </Link>
                                        )
                                    }
                                        {
                                        item ?. email && (
                                            <Link to={
                                                `mailto:${
                                                    item ?. email
                                                }`
                                            }
                                            target="_blank" className="w-max">
                                            <p className="leading-[20px] font-medium font-inter flex gap-[15px] justify-start items-center">
                                                <span><AiOutlineMail/></span>
                                                <span className='text-[#0E9EDA]'>
                                                    {
                                                    item ?. email
                                                }</span>
                                            </p>
                                            </Link>
                                        )
                                    }
                                        {
                                        item ?. website && (
                                            <Link to={`http://${item ?. website }`}
                                        
                                            target="_blank" className="w-max">
                                                 <p className="leading-[20px] font-medium font-inter flex gap-[15px] justify-start items-center whitespace-nowrap">
                                                <span><TbWorldWww/></span>
                                                <span className='text-[#0E9EDA]'>
                                                    {
                                                    item ?. website
                                                }</span>
                                            </p>
                                            </Link>
                                        )
                                    } </div>
                                </div>

                            ))
                        } </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactUs
