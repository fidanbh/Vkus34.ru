import React, { useState } from "react";

import styles from "./imageProduction.module.scss";

const ImageOfProduction = () => {
  const datas = [
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
    "/img/eatpakr.jpg",
  ];
  const [photoProduction, setPhotoProduction] = useState(datas);
  return (
    <div className={styles.ImageStyle}>

      <div className="container">
        <div className={styles.wrapper}>

      
          <div className={styles.ImageProd}>
          {photoProduction.map((data) => (
            <img src={data} className={styles.Images}></img>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOfProduction;
