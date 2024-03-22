import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

const Button = ({ btnName, type, link,handleOnclick,style }) => {
  return (
    <div      
    onClick={()=>handleOnclick()}
    className={`text-center ${style ? style : ''} `}
    >
      {link ? (
        <Link to={link}>
          <button
            type={type}
            className="text-center whitespace-nowrap"
          >
            {btnName}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          className="text-center whitespace-nowrap"
        >
          {btnName}
        </button>
      )}
    </div>
  );
};

export default Button;
