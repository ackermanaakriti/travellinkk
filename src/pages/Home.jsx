import React, {useEffect} from 'react';
import "../styles/style.css";
import {
    AboutSection,
    AboutUsSection,
    HeroSection,
    MajorTouristAttractions,
    MetaDecorator,
    PopularTrips,
    Testimonials
} from '../components';
import { useGlobalContext } from '../context/useGlobalContext';

const Home = ({data}) => {
    const {setNavActive} = useGlobalContext();

    // Setting the nav state
    useEffect(() => {
        setNavActive('home');
    }, [])
    return (
        <>
          <MetaDecorator title="Home" />
            <div className="w-full bg-[#F5FCFF]">
                <HeroSection/>
                <AboutSection/>
                <PopularTrips data={data}/>
                <AboutUsSection/>
                <MajorTouristAttractions data={data}/>
                <Testimonials data={data}/>
            </div>
        </>
    );
};

export default Home;
