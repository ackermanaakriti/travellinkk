import React, {useEffect, useState} from 'react'
import {SearchInput} from '../components';
import {Link} from 'react-router-dom';
import NavBarList from './NavBarList';
import { useGlobalContext } from '../context/useGlobalContext';

const FloatingNav = () => {
    const {siteInfo} = useGlobalContext();

    const [offset, setOffset] = useState();

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.scrollY)
        }
        window.addEventListener('scroll', onScroll, {passive: true})
    }, [])


    return (
        <div 
            className={
                `z-30 ${
                    offset > 100 ? "fixed top-0 w-full bg-white flex" : "hidden"
                }`
        }>
            <div className="w-full hidden lg:block shadow-md flex gap-[30px] justify-between px-[20px] 2xl:px-globalPadding py-[10px]">

                <div className="w-full flex justify-between gap-[21px] flex items-center">
                    <div>
                        <Link to="/">
                            <img src={siteInfo?.site_logo}
                                className="lg:w-fit object-contain"
                                alt="logo"
                                style={
                                    {
                                        width: '78px',
                                        height: '40px'
                                    }
                                }/>
                        </Link>
                    </div>

                    <div>
                        <NavBarList/>
                    </div>
                    <div>
                        <SearchInput closeNavbar={()=> ''}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloatingNav
