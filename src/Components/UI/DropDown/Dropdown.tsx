import React, { useState, FC } from "react";
import menu from "../../../assets/menu.svg";
import styles from "./Dropdown.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import krest from '../../../assets/krest.svg';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isService, setIsService] = useState(false)

  const toggleService = () => {
    setIsService(!isService);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleMenu} className={styles.menu__btn}>
        <img className={styles.menu__icon} src={menu} alt="menu icon" />
      </button>
      {isOpen && <div className={styles.dropdown__background} onClick={toggleMenu}></div>}
      <ul className={`${styles.dropdown__menu} ${isOpen ? styles.active : ""}`}>

      <li className={styles.close__btn} onClick={toggleMenu}>
          <div className={styles.krest_div}>
            <img className={styles.krest} src={krest}/>
          </div>
        </li>

        <li className={styles.topNav__logo_li}>
          <div className={styles.topNav_logo}>
            <img src="/img/logo-vkus.png" className={styles.logoImage}></img>
          </div>
        </li>

        <Link to="/">
          <li>Главная</li>
        </Link>

        <Link to="/service">
          <li onClick={toggleService}>
            Услуги
            <BiChevronDown />
            <div>
              {/* <div className={styles.uslugiStil}>
               */}
              <div className={isService ? '' : styles.blogPagesLi}>
                <ul className={styles.uslugiStilUl}>
                  <li>
                    <Link to="/otkritiye-stolovoy">Открытие столовой</Link>
                  </li>
                  <li>
                    <Link to="/dostavka-pitaniya">Доставка питания</Link>
                  </li>
                  <li>
                    <Link to="/organizachiya-pitaniya-na-predpriyatiya">
                      Организация питания на предприятии
                    </Link>
                  </li>
                  <li>
                    <Link to="/organizachiya-pitaniya-na-sotrudnikov-rabotnikov">
                      Организация питания на работников, сотрудников, персонала
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
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

        <li className={styles.adressListLi}>
          <div className={styles.adressList}>
            <div className={styles.adressPart1}>
              <FaLocationDot className={styles.location} />
            </div>{" "}
            <div className={styles.adressPart2}>
              Волгоград, Краснополянская , 78a
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
