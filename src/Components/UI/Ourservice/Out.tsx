import React, { useState } from "react";

const ToggleDivs = () => {
  const [div1Active, setDiv1Active] = useState(false);
  const [div2Active, setDiv2Active] = useState(false);

  const handleDiv1Click = () => {
    setDiv1Active(true);
    setDiv2Active(false);
  };

  const handleDiv2Click = () => {
    setDiv1Active(false);
    setDiv2Active(true);
  };

  return (
    <div>
      

      <div className={`div1 ${div1Active ? "active" : ""}`}>
        <h2 onClick={handleDiv1Click} style={{ borderBottom: div1Active ? "2px solid green" : "none" }}>Title for Div 1</h2>
      </div>

      <div className={`div2 ${div2Active ? "active" : ""}`}>
        <h2 style={{ borderBottom: div2Active ? "2px solid green" : "none" }} onClick={handleDiv2Click}>
          Title for Div 2
        </h2>
      </div>

      <style>
        {`
          .div1 {
            color: yellow;
            padding: 20px;
          }

          .div2 {
            color: yellow;
            padding: 20px;
          }

          .active {
            opacity: 0.5;
          }
        `}
      </style>
    </div>
  );
};

export default ToggleDivs;
