import React, {useEffect, useState} from 'react'
import {Button, MetaDecorator, PackagesCard} from '../components'
import { useGlobalContext } from '../context/useGlobalContext'
import { FetchpackagesData } from '../utils/apiQueries'

const AllPackages = () => {
    const [packagesCardListData, setPackagesCardListData] = useState([]);
    useEffect(() => {
        FetchpackagesData().then(res => {
        setPackagesCardListData(res.data.data);
     }).catch((err) => console.log(err)); 
  }, [])
  
  const [array, setArray] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

    const {setNavActive} = useGlobalContext();
    // Setting the nav state
    useEffect(() => {
        setNavActive('');
    }, [])

    useEffect(() => {
        setArray(packagesCardListData?.package?.slice(0, 6))
        if(packagesCardListData?.package?.length > 6){
            setShowBtn(true)
        }
    }, [packagesCardListData])

    const addMore = () => {
        const currentLength = array?.length;
        const nextItems = packagesCardListData?.package?.slice(currentLength, currentLength + 3);
        
        if (nextItems.length > 0) {
          setArray((prev) => [...prev, ...nextItems]);
        }
      
        if (currentLength + nextItems?.length >= packagesCardListData?.package?.length) {
          setShowBtn(false);
        }
      };

    //   const addMore = () => {
    //     const length = array?.length;
    //     const totalDataLength = packagesCardListData?.length;
    //     if (totalDataLength > length) {
    //         if(packagesCardListData[length + 1] &&  packagesCardListData[length + 2] && packagesCardListData[length + 3])
    //         setArray((prev) => [
    //             ...prev,
    //             packagesCardListData[length + 1],
    //             packagesCardListData[length + 2],
    //             packagesCardListData[length + 3],
    //         ])}if(packagesCardListData[length + 1] &&  packagesCardListData[length + 2] && !packagesCardListData[length + 3]){
    //             setArray((prev) => [
    //                 ...prev,
    //                 packagesCardListData[length + 1],
    //                 packagesCardListData[length + 2],
    //             ])
    //         }if(packagesCardListData[length + 1] &&  !packagesCardListData[length + 2] && !packagesCardListData[length + 3]){
    //             setArray((prev) => [
    //                 ...prev,
    //                 packagesCardListData[length + 1],
    //                 packagesCardListData[length],
    //             ])
    //             setShowBtn(false);
    //         }
       
    // }
  console.log()
    return (
        <>
            <MetaDecorator title="Packages"/>

            <div className='w-full min-h-[80vh] lg:px-globalPadding px-[11px] my-[2%]'>
                <div className="flex flex-row flex-wrap md:-mx-7 mx-0  mt-3 gap-y-8 justify-center ">
                    {
                    array ?. map((item, index) => (
                        <PackagesCard key={index}
                            data={item} Package={item?.packageCategory?.name}
                            link={
                                `/details/${
                                    item ?. slug
                                }`
                            }/>
                    ))
                } </div>
                <div className="hover:opacity-90 my-[3%] flex justify-center">
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
        </>

    )
}

export default AllPackages
