import React, { useState } from "react";

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

import styles from "./imageKitchen.module.scss";

const ImageOfKitchen = () => {
  const data = [
    "/img/kuxnya1.jpg",
    "/img/kuxnya5.jpg",
    "/img/kuxnya3.jpg",
    "/img/kuxnya1.jpg",
    "/img/kuxnya5.jpg",
    "/img/kuxnya3.jpg",
    "/img/kuxnya1.jpg",
    "/img/kuxnya5.jpg",
    "/img/kuxnya3.jpg",
    "/img/kuxnya1.jpg",
  ];
  const [photoData, setPhotoData] = useState(data);
  return (
    <section className={styles.imageKitchen}>
      <div className="container">
        
        <div className={styles.wrapper}> 

          <div className={styles.ImageStyle}>
          
            {photoData.map((data) => (
              <img src={data} className={styles.Images}></img>
            ))}
          </div>
        </div>
        </div>

    </section>
  //   <div className={styles.ImageStyle}>

  //   <div className="container">
  //     <div className={styles.wrapper}>

    
  //       <div className={styles.ImageProd}>
  //       {photoProduction.map((data) => (
  //         <img src={data} className={styles.Images}></img>
  //       ))}
  //       </div>
  //     </div>
  //   </div>
  // </div>
  );
};

export default ImageOfKitchen;
