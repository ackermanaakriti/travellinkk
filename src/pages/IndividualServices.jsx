import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {
    Button,
    MetaDecorator,
    PackagesCard,
    PageTopComponent,
    PageTopTextComponent
} from '../components';
import {useGlobalContext} from '../context/useGlobalContext';
import {FetchindividualServicesData} from '../utils/apiQueries';

const IndividualServices = () => {
    const {slug} = useParams();
    const [array, setArray] = useState([])
    const [showBtn, setShowBtn] = useState(false)
    // const [data, setData] = useState()

    const [individualServicesData, setIndividualServicesData] = useState([]);
    useEffect(() => {
        FetchindividualServicesData(slug).then(res => {
            setIndividualServicesData(res.data.data);
           
        }).catch((err) => console.log(err));
    }, [slug])
    console.log(individualServicesData)
    const serviceData = individualServicesData ?. service;
    const relatedServiceData = individualServicesData ?. relatedPackage;
    // useEffect(() => {
    //     const info = servicesCardData.filter(item => item ?. slug === slug);
    //     setData(info[0])
    // }, [])

    const {setNavActive} = useGlobalContext();
    // Setting the nav state
    useEffect(() => {
        setNavActive('services');
    }, [])

    useEffect(() => {
        setArray(relatedServiceData ?. slice(0, 6))
        if (relatedServiceData ?. length > 6) {
            setShowBtn(true)
        }
    }, [relatedServiceData])

    const addMore = () => {
        const currentLength = array ?. length;
        const nextItems = relatedServiceData.slice(currentLength, currentLength + 3);

        if (nextItems ?. length > 0) {
            setArray((prev) => [
                ...prev,
                ... nextItems
            ]);
        }

        if (currentLength + nextItems ?. length >= relatedServiceData ?. length) {
            setShowBtn(false);
        }
    };
    return (
        <div className="w-full bg-[#F5FCFF]">
            {/* {
            data && ( */}
            <>
                <MetaDecorator title="Service"/>

                <div>
                    <PageTopComponent title={
                            serviceData ?. title
                        }
                        image={
                            serviceData ?. image
                        }
                        setTextA={true}
                        setTextB={false}/>
                </div>
                <div className='w-full lg:px-globalPadding px-[11px] lg:py-[2%] pt-[5%]'>
                    <div className='pt-8'>
                        <PageTopTextComponent title={
                                serviceData ?. excerpt
                            }
                            discription={
                                serviceData ?. details
                            }/>
                    </div>
                    <div className='py-[3%]'>
                        {
                        array ?. length > 0 && <h2 className='font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-center pb-[2%]'>Some Trekking Trips</h2>
                    }
                         <div className="flex flex-row flex-wrap md:-mx-7 mx-0  mt-3 gap-y-8 justify-center ">
                {array?.map((item, index) => (
                  <>
                  <PackagesCard
                    key={index}
                    data={item}
                    Package={item?.packageCategory.name}
                    link={`/details/${item?.slug}`}
                  />
                 
                
                  </>
                ))}{" "}
              </div>
                        <div className="hover:opacity-90 mt-[4%] flex justify-center">
                            {
                            showBtn && (
                                <Button handleOnclick={
                                        () => {
                                            addMore();
                                        }
                                    }
                                    btnName="View More Trips"
                                    style="bg-transparent border-b-2 border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[16px] "/>
                            )
                        } </div>
                    </div>

                </div>

            </>

            {/* )
        }  */} </div>

    )
}

export default IndividualServices
