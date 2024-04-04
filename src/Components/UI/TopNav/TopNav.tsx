import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../App";
import Button from "../Button/Button";
// import DropdownMenu from "../DropDown/Dropdown";

import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

import styles from "./topNav.module.scss";

import menu from "../../../assets/menu.svg";

const TopNav = () => {
  const [isBlog, setIsBlog] = useState(false);
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+78442609060";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // window.location.href = whatsappUrl;
    window.open(whatsappUrl, "_blank");
  };
  const theme = useContext(ThemeContext)
  const { open, setOpen, clickClose, openPage } = theme;
  return (
    // Нужно соблюдать семантику и использовать тег footer в футере, а не section
    <header className={styles.topNavStyle}>
      {/*  обернул контент в div container для выравнивания(margin: o auto; выравнивает по середине блок)*/}
      <div className={styles.container}>
        <div className={styles.topNav}>
          <div className={styles.topNavDiv}>
            <div>
              <ul className={styles.topNav_list}>
                <li className={styles.topNav__logo_li}>
                  <div className={styles.topNav_logo}>
                    {/* <img src="https://i.hizliresim.com/1ebhqso.png"></img>{" "} */}
                    <Link to="/">
                      <img
                        src="/img/logo-vkus.png"
                        className={styles.logoImage}
                      ></img>
                    </Link>
                  </div>
                </li>
                <li className={styles.adressListLi}>
                  <div className={styles.adressList}>
                    <div>
                      <FaLocationDot className={styles.location} />
                    </div>{" "}
                    <div className={styles.adressPart2}>
                      Волгоград, Краснополянская , 78a
                    </div>
                  </div>
                </li>
                <li className={styles.whatsappStyleLi}>
                  <div className={styles.whatsappStyle}>
                    Задайте вопрос онлайн:
                    <FaWhatsappSquare
                      className={styles.whatsappImage}
                      onClick={handleWhatsAppRedirect}
                    />
                  </div>
                </li>

                <li className={styles.whatsAppMobile}></li>

                <li className={styles.contactStyleLi}>
                  {/*  Тут разделил Звоните пн вт и номер телефона по разным блокам для выравнивания и большей
                        настраиваемости*/}
                  <div className={styles.contactStyle}>
                    <GoDotFill className={styles.dotsStyle} /> Звоните, Пн - Пт
                    9:00 - 17:00
                    <br />
                  </div>

                  {/*  Добавил div класс чтобы настроить стили*/}
                  <div className={styles.contactNumber}>
                    <FaPhoneAlt className={styles.phoneStyle} />{" "}
                    <span className={styles.phoneStyleText}>
                      +7 (8442) 60-90-60
                    </span>
                  </div>
                </li>
                <li className={styles.buttonCall}>
                  <div>
                    <button onClick={openPage}>
                      <FaPhoneAlt /> Перезвоните мне{" "}
                    </button>
                  </div>
                </li>
                <li className={styles.menu__container}>
                  <div className={styles.whatsAppMobileCont}>
                    <FaWhatsappSquare className={styles.whatsAppImage} />
                  </div>
                  <DropdownMenu />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className="container">
        <div className={styles.Navbarlists}>
          <div>
            <ul className={styles.listOfNav}>
              <Link to="/">
                <li>Главная</li>
              </Link>{" "}
              <Link to=''>
                <li
                  onMouseEnter={() => setIsBlog(true)}
                  onMouseLeave={() => setIsBlog(false)}
                  className={styles.uslugiPointer}
                >
                  Услуги
                  <BiChevronDown />
                  <div className={isBlog ? "" : "blogPagesLi"}>
                    <div className={styles.uslugiStil}>
                      <ul className={styles.uslugiStilUl}>
                        <li>
                          <Link to="/otkritiye-stolovoy">
                            Открытие столовой
                          </Link>
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
                            Организация питания на работников, сотрудников,
                            персонала
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
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
import "./topnav.css";
import DropdownMenu from "../DropDown/Dropdown";
import { WhatsApp } from "@mui/icons-material";

export default TopNav;
