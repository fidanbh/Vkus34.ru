import React, { useState, useEffect } from "react";
import { partOfCompanyData } from "./PartsOfCompanyData";

import styles from "./partsOfCompany.module.scss";

const PartsOfCompany = () => {
  const [data, setData] = useState(partOfCompanyData);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const savedCount = localStorage.getItem('counter');
  //   if (savedCount) {
  //     setCount(parseInt(savedCount, 10));
  //   }
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount((prevCount) => {
  //       const newCount = prevCount + 1;
  //       localStorage.setItem('counter', newCount);
  //     });
  //   }, 1000); 
  // }, []);

  return (
    <section className={styles.partsOfCompanyStyle}>
        <div className="container">

          <div className={styles.parts}>
            {data.map((data) => (
              <div key={data.id} className={styles.partsBox}>
                <div className={styles.partsBoxSecond}>
                  <div>
                    <span className={styles.numberStyle}>{data.number}</span>
                    <img src={data.img} className={styles.partsImage}></img>
                  </div>

                  <div className={styles.secondDiv}>
                    {" "}
                    <h2 className={styles.secondTittle}>
                      {data.tittleFirst}
                      <span> {data.tittleSecond}</span>
                    </h2>
                    <p className={styles.secondText}>{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* <div>
      <h1>Count: {counter}</h1>
      </div> */}
    </section>
  );
};

export default PartsOfCompany;
