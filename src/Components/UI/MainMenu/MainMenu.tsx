import React from "react";
import Menu from "../Menu/Menu";
import Slide from "../Slide/Slide";
import ClickMenu from "../ClickMenu/ClickMenu";
import PartsOfCompany from "../PartsOfCompany/PartsOfCompany";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import Whywe from "../WhyWe/Whywe";
import TrustUs from "../TrustUs/TrustUs";
import Ourservice from "../Ourservice/Ourservice";
import WorkWithUs from "../WorkWithUs/WorkWithUs";
import WhatWeService from "../WhatWeService/WhatWeService";
import EightReason from "../EightReason/EightReason";
import GetOffer from "../GetOffer/GetOffer";



const MainMenu = () => {
  return (
    <>
      {" "}
      <Menu />
      <Slide />
      <ClickMenu />
      <PartsOfCompany />
      <CompanyInfo />
      <Whywe />
      <TrustUs />
      <Ourservice />
      <WorkWithUs />
      <WhatWeService />
      <EightReason />
      <GetOffer />
      
    </>
  );
};

export default MainMenu;
