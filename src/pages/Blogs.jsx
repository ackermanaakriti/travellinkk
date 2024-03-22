import React, { useEffect, useState } from 'react'
import { MetaDecorator, PageTopComponent, PageTopTextComponent, ServicesCard } from '../components'
import { blogsBannerImg } from '../assets'
import { servicesCardData } from '../data/servicesCardData';
import { useGlobalContext } from '../context/useGlobalContext';
import { FetchblogsData, FetchblogsTopData } from '../utils/apiQueries';

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([]);
    useEffect(() => {
        FetchblogsData().then(res => {
            setBlogsData(res.data.data);
        }).catch((err) => console.log(err));
    }, [])

    const [blogsTopData, setBlogsTopData] = useState([]);
    useEffect(() => {
        FetchblogsTopData().then(res => {
            setBlogsTopData(res.data.data);
        }).catch((err) => console.log(err));
    }, [])

    const {setNavActive} = useGlobalContext();
    // Setting the nav state
    useEffect(() => {
        setNavActive('');
    }, [])
    
  return (
    <>
    <MetaDecorator title="Blogs" />

    <div className="w-full bg-[#F5FCFF]">
            <div>
                <PageTopComponent title={"Blogs"}
                    image={blogsTopData?.image}
                    setTextA={true}
                    setTextB={false}
                    />
            </div>

            <div className='w-full lg:px-globalPadding px-[11px] lg:py-[2%] pt-[5%]'>
                <div>
                    <PageTopTextComponent title={blogsTopData?.title} discription={blogsTopData?.details}/>
                </div>

                <div className='py-[4%] flex flex-col gap-[32px]'>
                 
                    {
                    blogsData.map((item, index) => (
                        <ServicesCard data={item}
                            key={index}
                            isEven={
                                index % 2 == 0 ? true : false
                            }
                            link={`/blog/${item?.slug}`}
                            showbtn={true}
                            wordLimit={50}
                            />
                    ))
                } </div>
            </div>

        </div>
    </>
    
  )
}

export default Blogs