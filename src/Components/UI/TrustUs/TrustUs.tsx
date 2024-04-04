import React, { useState } from "react";
import {data} from './Trustdata'

import styles from "./trustUs.module.scss";
import { useScrollTrigger } from "@mui/material";

const TrustUs = () => {
  const [trust, setTrust] = useState(data);

  return (
    <section className={styles.trustUs}>
      <div className="container">
        <h1 className={styles.tittle}>
          За что нам доверяют{" "}
          <span className={styles.spanText}>долгие годы</span>
        </h1>

        <div className={styles.ourService}>
          {trust.map((data) => (
            <div className={styles.ourServiceParts} key={data.id}>
              <div className={styles.imagePart}>
                <img src={data.img} className={styles.imageStyle}></img>
              </div>
              <div className={styles.textPart}>
                <h4 className={styles.tittlePart}>{data.tittle}</h4>
                <p className={styles.textPart}>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustUs;
