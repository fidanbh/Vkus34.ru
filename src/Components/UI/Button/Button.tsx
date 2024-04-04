import React from "react";


const Button = ({ text,buttonStyle,icon,openPage }) => {
  return (
    <div>
      <button className={buttonStyle} onClick={openPage}>{text} {icon}</button>
    </div>
  );
};

export default Button;
