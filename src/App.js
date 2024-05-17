import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./globals/NavBar";
import Footer from "./globals/Footer";
import {
  AboutUs,
  AllPackages,
  Blogs,
  ContactUs,
  Home,
  IndividualBlog,
  IndividualServices,
  OurTeam,
  Services,
  TestimonialsPage,
  Details,
  NoDataFound,
  SearchPage,
  Destination,
  IndividualCulture,
  IndividualDestination,
  DestinationDetail,
  CultureDetail,
  AttractionDetail,
} from "./pages";
import FloatingNav from "./globals/FloatingNav";
import { FetchAllTitleDatas, FetchSiteInfoDatas } from "./utils/apiQueries";
import { MetaDecorator, Overlay } from "./components";
import { useGlobalContext } from "./context/useGlobalContext";

{/* Scroll Top with link or Url */}
function WindowScrollTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  const { setSiteInfo } = useGlobalContext();
  useEffect(() => {
       FetchSiteInfoDatas().then(res => {
        setSiteInfo(res.data.data);
      }).catch((err) => console.log(err)); 
  }, [])

  const [titleData, setTitleData] = useState({});
  useEffect(() => {
      FetchAllTitleDatas().then(res => {
          setTitleData(res.data.data);
      }).catch((err) => console.log(err));
  }, [])

  return (
    <div className="App">
      <>    
      <MetaDecorator title="TravelLink" />      
       <WindowScrollTop />
       <Overlay />
       <FloatingNav />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home data={titleData}/>} /> 
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/destination/:slug" element={<Destination />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/service/services-information/:slug" element={<IndividualServices />} />
          <Route path="/country/:id" element={<IndividualDestination />} />
          <Route path="/country/information/:slug" element={<DestinationDetail />} />
          <Route path="/country/attraction/:slug" element={<AttractionDetail />} />
          <Route path="/location/:slug" element={<IndividualCulture />} />
          <Route path="/location/information/:slug" element={<CultureDetail />} />
          <Route path="/blogs" element={<Blogs />} />        
          <Route path="/blog/:slug" element={<IndividualBlog />} />
          <Route path="/details/:slug" element={<Details />} />
          <Route path="/all-packages" element={<AllPackages />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NoDataFound />} />

        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
