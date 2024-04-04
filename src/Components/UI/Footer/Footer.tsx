import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelopeOpenText } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

import styles from "./footer.module.scss";

const Footer = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+78442609060";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
 
  return (
    <section className={styles.footer}>
      <div className="container">
        <hr className={styles.footerHr} />
        <div className={styles.footerMenu}>
          <div className={styles.footerLogo}>
            <img src="/img/logo-vkus.png" className={styles.footerImage}></img>
          </div>
          <div className={styles.footerNavigation}>
            <p className={styles.footerTittle}>Навигация:</p>
            <div>
              <ul className={styles.footerNavigationList}>
                <Link to="/">
                  <li>Главная</li>
                </Link>
                <Link to="/aboutCompany">
                  <li>О компании</li>
                </Link>

                <Link to="/reviews">
                  <li>Отзывы</li>
                </Link>

                <Link to="/customers">
                  <li>Клиентам</li>
                </Link>

                <Link to="/contacts">
                  {" "}
                  <li>Контакты </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.footerService}>
            <p className={styles.footerTittle}>Услуги:</p>
            <div>
              <ul className={styles.services}>
                <Link to="/otkritiye-stolovoy">
                  <li>Открытие столовой </li>
                </Link>
                <Link to="/dostavka-pitaniya">
                  <li>Доставка питания</li>{" "}
                </Link>
                <Link to="/organizachiya-pitaniya-na-predpriyatiya">
                  <li>
                    Организация питания на <br /> предприятии{" "}
                  </li>
                </Link>{" "}
                <Link to="/organizachiya-pitaniya-na-sotrudnikov-rabotnikov">
                  {" "}
                  <li>
                    Организация питания на
                    <br /> работников, сотрудников, персонала
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.footerContact}>
            <p className={styles.footerTittle}>Контакты:</p>
            <div>
              <ul className={styles.servicesContact}>
                <li>
                  Звоните, Пн - Пт 9:00 - 17:00 <br />{" "}
                  <FaPhoneAlt className={styles.iconStyle} />{" "}
                  <span className={styles.mailLocationStyle}>
                    <a href="tel:+78442609060">+7 (8442) 60-90-60</a>
                  </span>{" "}
                  <FaWhatsappSquare
                    className={styles.iconStyle}
                    onClick={handleWhatsAppRedirect}
                  />
                </li>
                <li>
                  <FaEnvelopeOpenText className={styles.iconStyle} />{" "}
                  <span className={styles.mailLocationStyle}>
                    info@vkus34.ru
                  </span>
                </li>
                <li>
                  <FaMapLocationDot className={styles.iconStyle} />
                  <span className={styles.mailLocationStyle}>
                    Волгоград, Краснополянская , 78a
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className={styles.footerHr} />
        <div className={styles.politikaKonf}>Политика конфиденциальности</div>
      </div>
    </section>
  );
};

export default Footer;
