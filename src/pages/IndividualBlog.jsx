import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {MetaDecorator, PageTopComponent, PageTopTextComponent} from '../components';
import {useGlobalContext} from '../context/useGlobalContext';
import {FetchindividualblogData} from '../utils/apiQueries';


const IndividualBlog = () => {
    const {slug} = useParams();

    const [individualBlogData, setIndividualBlogData] = useState([]);
    useEffect(() => {
        FetchindividualblogData(slug).then(res => {
            setIndividualBlogData(res.data.data.blog);
        }).catch((err) => console.log(err));
    }, [slug])

    console.log(individualBlogData)

    const {setNavActive} = useGlobalContext();
    // Setting the nav state
    useEffect(() => {
        setNavActive('');
    }, [])

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day}th ${month}, ${year}`;
    }

    const formattedDate = formatDate(individualBlogData ?. updated_at);

    return (
        <>
            <MetaDecorator title="Blog"/>

            <div className="w-full bg-[#F5FCFF]">

                <>
                    <div>
                        <PageTopComponent title={
                                individualBlogData ?. title
                            }
                            image={
                                individualBlogData ?. image
                            }
                            setTextA={true}
                            setTextB={false}/>
                    </div>
                    <div className='w-full lg:px-globalPadding px-[11px] lg:py-[2%] pt-[5%] flex justify-between  flex-col lg:flex-row'>

                        <div>
                            <PageTopTextComponent formatDate={formattedDate} title={
                                    individualBlogData ?. title
                                }
                                discription={
                                    individualBlogData ?. details
                                }/>
                        </div>
                      
                        {/* <div className='flex flex-col items-center justify-center'>
                            <img src={individualBlogData?.image}
                                alt='team Image'
                                className='py-8 object-contain w-full h-[55vh]'/>
                        </div>
                        <div className='lg:px-[17%] px-[2%]'>
                            <div className='pb-8'>
                                <PageTopTextComponent title={individualBlogData?.excerpt} discription={individualBlogData?.details}/>
                            </div>
                           
                        </div> */} </div>

                </>
            </div>
        </>

    )
}

export default IndividualBlog
