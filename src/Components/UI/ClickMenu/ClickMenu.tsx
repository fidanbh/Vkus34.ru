import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./clickMenu.module.scss";
import MobileButton from "../MobileButton/MobileButton";
import MailButton from "../MailButton/MailButton";

const ClickMenu = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const toggleDiv2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };
  const openComponentInNewWindow = () => {
    window.open('/open-component', '_blank');
  };
  return (
    <section className={styles.clickMenu}>
      <div className="container">
        <div className={styles.mainStyle}>
          <h1 className={styles.tittle}>
            <span className={styles.textStyle}>В 1 клик</span> скачайте наше
            меню
          </h1>
        </div>
        <div className={styles.clickButtons}>
          <div className={styles.clickButtonsMenu}>
            <div className={styles.firstPart}>
              <span>Куда отправить:</span>
              <ul>
                <li onClick={toggleDiv1}>В Whatsapp</li>
                <li onClick={toggleDiv2}>На почту</li>
              </ul>
            </div>
            <div className={styles.firstPart}>
              {showDiv1 && <MobileButton className={styles.btnInput}/>}
              {showDiv2 && <MailButton />}
            </div>
          </div>
          <div className={styles.btn_cont}>
            <button className={styles.button}>
              Получить меню прямо сейчас
            </button>
          </div>
          <div className={styles.textConf}>
            <span>
              Отправляя форму, вы даете согласие на обработку своих{" "}
              <Link to="/privacy-policy">персональных данных.</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClickMenu;
