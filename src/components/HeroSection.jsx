import React, { useEffect, useRef, useState } from "react";
import "../styles/style.css";
import "../styles/responsive.css";
import { FetchheroData } from "../utils/apiQueries";

const HeroSection = () => {
const [heroData, setHeroData] = useState()
  useEffect(() => {
    FetchheroData().then(res => {
     setHeroData(res.data.data);
   }).catch((err) => console.log(err)); 
}, [])

  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (heroData?.length > 0) {
        if (activeIndex >= heroData.length - 1) {
          if (sliderRef.current) {
            sliderRef.current.innerHTML = "";
          }

          // Creating Image tag and appending to slider div
          const newImgElement = document.createElement("img");
          newImgElement.src = heroData[0].image;
          newImgElement.alt = "";
          newImgElement.classList.add("sliderImage");

          sliderRef.current.appendChild(newImgElement);

          const divElement = document.createElement("div");
          divElement.classList.add("titleContainer");

          // Creating paragraph tag and appending to slider div
          const newPElement = document.createElement("p");
          newPElement.innerHTML = heroData[0].title;
          newPElement.classList.add("sliderTitle");
          divElement.appendChild(newPElement);

          // Create the icon
        //   const newIcon = document.createElement("span");
        //   newIcon.innerHTML = "&#x2192;";
        //   newIcon.classList.add("sliderIcon");
        //   divElement.appendChild(newIcon);

          divElement.addEventListener("click", () => {
            if(heroData[0].url !== null){
              window.location.href = heroData[0].url;
            }
          });
          sliderRef.current.appendChild(divElement);
          // Creating slider overlay
          const newDivElement = document.createElement("div");
          newDivElement.classList.add("sliderOverlay");
          sliderRef.current.appendChild(newDivElement);
          setActiveIndex(1);
          return;
        } else {
          
          if (sliderRef.current) {
            sliderRef.current.innerHTML = "";
          }

          // Creating Image tag and appending to slider div
          const newImgElement = document.createElement("img");
          newImgElement.src = heroData[activeIndex + 1].image;
          newImgElement.alt = "";
          newImgElement.classList.add("sliderImage");

          sliderRef.current.appendChild(newImgElement);

          const divElement = document.createElement("div");
          divElement.classList.add("titleContainer");

          // Creating paragraph tag and appending to slider div
          const newPElement = document.createElement("p");
          newPElement.innerHTML = heroData[activeIndex + 1].title;
          newPElement.classList.add("sliderTitle");
          divElement.appendChild(newPElement);

          // Create the icon
        //   const newIcon = document.createElement("span");
        //   newIcon.innerHTML = "&#x2192;";
        //   newIcon.classList.add("sliderIcon");
        //   divElement.appendChild(newIcon);

          
        // Add click event listener to the container
        divElement.addEventListener("click", () => {
          if(heroData[activeIndex + 1].url !== null){
            window.location.href = heroData[activeIndex + 1].url;
          }
        });

          sliderRef.current.appendChild(divElement);
          // Creating slider overlay
          const newDivElement = document.createElement("div");
          newDivElement.classList.add("sliderOverlay");
          sliderRef.current.appendChild(newDivElement);

          setActiveIndex((prev) => prev + 1);
        }
      }
    }, 6000);

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, [heroData, activeIndex]);


  return (
    <div className="relative w-full bg-black h-[35vh] lg:h-[70vh] flex justify-center items-center overflow-hidden">
      {heroData?.length > 0 ? (
         <div
         ref={sliderRef}
         className="relative w-full h-[35vh] lg:h-[70vh] overflow-hidden"
       >
         {/* Display the active slide */}
         <img
           src={heroData[activeIndex].image}
           alt="Hero Image"
           className="sliderImage"
         />
         <div className="titleContainer">
           <p className="w-max sliderTitle cursor-pointer">{heroData[activeIndex].title}</p>
           {/* <span className="sliderIcon">&#x2192;</span> */}
         </div>
         <div className="sliderOverlay"></div>
       </div>
      ) : (
        <div className="relative w-[98%] md:w-[90%] md:h-[70vh] overflow-hidden">         
          <div className="sliderOverlay"></div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;