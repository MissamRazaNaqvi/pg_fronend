import React from "react";

const CustomSpinner = ({ color = "#CE3E72", size = 20 }) => {
  const sizeClass = `after:h-[${size}] after:w-[${size}]`;

  return (
    <svg
      className={`animate-spin after:h-[22px]  after:w-[22px] ${sizeClass}`}
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
    >
      <path
        d="M8,8.5A3.5,3.5,0,1,1,4.5,5,3.5,3.5,0,0,1,8,8.5ZM4.5,14A3.5,3.5,0,1,0,8,17.5,3.5,3.5,0,0,0,4.5,14Zm16-2A3.5,3.5,0,1,0,17,8.5,3.5,3.5,0,0,0,20.5,12Zm0,2A3.5,3.5,0,1,0,24,17.5,3.5,3.5,0,0,0,20.5,14Zm-8,4A3.5,3.5,0,1,0,16,21.5,3.5,3.5,0,0,0,12.5,18Zm0-18A3.5,3.5,0,1,0,16,3.5,3.5,3.5,0,0,0,12.5,0Z"
        fill={color}
      />
    </svg>
  );
};

export default CustomSpinner;
