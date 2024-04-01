import React, { useState, createContext } from "react";

export const GlobalContext = createContext({
  overlay: false,
  setOverlay: () => {},
  siteInfo: {},
  setSiteInfo: () => {},
  navActive: {},
  setNavActive: () => {},
  searchQuary:"",
  setSearchQuary:() => {},
});

export const GlobalContextProvider = (props) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [siteInfo, setSiteInfo] = useState();
  const [navActive, setNavActive] = useState();
  const [searchQuary, setSearchQuary] = useState('');
 

  return (
    <GlobalContext.Provider
      value={{
        overlay: isOverlayActive,
        setOverlay: setIsOverlayActive,
        siteInfo: siteInfo,
        setSiteInfo: setSiteInfo,
        navActive: navActive,
        setNavActive: setNavActive,
        searchQuary:searchQuary,
        setSearchQuary:setSearchQuary,

      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};