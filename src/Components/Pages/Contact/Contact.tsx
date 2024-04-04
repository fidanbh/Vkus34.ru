import React from "react";

import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaRegClock,
  FaEnvelopeOpenText,
  FaPhoneAlt,
  FaWhatsappSquare,
} from "react-icons/fa";

import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <div>
          <h1 className={styles.contactTittle}>Контакты</h1>
        </div>
        <div className={styles.contactMenu}>
          <div className={styles.contactMenuFirst}>
            <h2 className={styles.contactMenuTittle}>Как с нами связаться:</h2>

            <div className={styles.contacts}>
              <div>
              <FaPhoneAlt className={styles.contactPhone} />{" "}
                <span className={styles.contactPhoneText}>
                  <a href='tel:+78442609060'>
                  +7 (844) 260-90-60
                  </a>
                </span>
                <span> <FaWhatsappSquare className={styles.contactWhatsapp} /></span>
              </div>
              {/* <div>
                <FaPhoneAlt className={styles.contactPhone} />{" "}
                <span className={styles.contactPhoneText}>
                  +7 (844) 260-90-60
                </span>
                <br />
              </div>
              <div className={styles.contactWhatsappPart}>
                <FaWhatsappSquare className={styles.contactWhatsapp} />
              </div> */}
            </div>
            <div className={styles.message}>
              <FaEnvelopeOpenText className={styles.contactMessage} />{" "}
              <span className={styles.contactMessageText}>info@vkus34.ru</span>
            </div>
          </div>
          <div className={styles.contactLocation}>
            <h2 className={styles.contactMenuTittle}>Как нас найти:</h2>
            <div>
              <FaMapLocationDot className={styles.location} />
              <span className={styles.locationText}>
                Волгоград, Краснополянская , 78a
              </span>
            </div>
            <div>
              <FaRegClock className={styles.location} />{" "}
              <span className={styles.locationText}>Пн - Пт 9:00 - 17:00</span>
            </div>
          </div>
          <div className={styles.line}>
            <img src="https://obshepit39.ru/wp-content/uploads/2023/04/arrow-1.svg"></img>
          </div>
        </div>
        <div className={styles.map}>
          <div className="width: 100%">
            <iframe
              width="98%"
              height="450"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4,%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%2078%D0%B0+(Vkus%2034)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
