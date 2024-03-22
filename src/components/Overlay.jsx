import React from "react";
import { useGlobalContext } from "../context/useGlobalContext";

const Overlay = () => {
  const { overlay } = useGlobalContext();

  return (
    <>
      {overlay && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-[75%] z-30"></div>
      )}
    </>
  );
};

export default Overlay;
