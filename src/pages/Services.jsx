import React, {useEffect, useState} from 'react'
import {MetaDecorator, PageTopComponent, PageTopTextComponent, ServicesCard} from '../components';
import {testimonialsBannerImg} from '../assets';
import {useGlobalContext} from '../context/useGlobalContext';
import {FetchServicesTopData, FetchservicesData} from '../utils/apiQueries';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
        FetchservicesData().then(res => {
            setServicesData(res.data.data);
        }).catch((err) => console.log(err));
    }, [])

    const [servicesTopData, setServicesTopData] = useState([]);
    useEffect(() => {
        FetchServicesTopData().then(res => {
            setServicesTopData(res.data.data);
        }).catch((err) => console.log(err));
    }, [])

    const {setNavActive} = useGlobalContext();
    // Setting the nav state
    useEffect(() => {
        setNavActive('services');
    }, [])

    return (
        <>
            <MetaDecorator title="Services"/>

            <div className="w-full bg-[#F5FCFF]">
                <div>
                    <PageTopComponent title={"Services"}
                        image={servicesTopData ?.image}
                        setTextA={true}
                        setTextB={false}/>
                </div>

                <div className='w-full lg:px-globalPadding px-[11px] lg:py-[2%] pt-[5%]'>
                    <div>
                        <PageTopTextComponent title={
                                servicesTopData ?. title
                            }
                            discription={
                                servicesTopData ?. details
                            }/>
                    </div>

                    <div className='py-[4%] flex flex-col gap-[32px]'>
                        {
                        servicesData ?. map((item, index) => (
                            <ServicesCard data={item}
                                key={index}
                                isEven={
                                    index % 2 == 0 ? true : false
                                }
                                link={
                                    `/service/services-information/${
                                        item ?. slug
                                    }`
                                }
                                showbtn={true}
                                wordLimit={120}
                                />

                        ))
                    } </div>
                </div>

            </div>
        </>

    )
}

export default Services
