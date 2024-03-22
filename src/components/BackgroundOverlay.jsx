import React from "react";

const BackgroundOverlay = () => {
  return (
    <div
      style={{
        zIndex: 98,
      }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-[65%]"
    ></div>
  );
};

export default BackgroundOverlay;
