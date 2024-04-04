import React from "react";

import { FaPhoneAlt, FaEnvelopeOpenText } from "react-icons/fa";

import styles from "./reviews.module.scss";

const Reviews = () => {
  return (
    <section className={styles.reviewsStyle}>
      <div className="container">
        <div className={styles.reviewsTittle}>
          <h1>Отзывы</h1>
        </div>
        <div className={styles.reviewsMenu}>
          <span className={styles.reviewsText}>
            Вы можете оставить свой отзыв:
          </span>

          <p className={styles.mailColor}>
            {" "}
            <FaEnvelopeOpenText className={styles.iconStyle} />{" "}
            <span className={styles.mailLocationStyle}>info@vkus34.ru</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
