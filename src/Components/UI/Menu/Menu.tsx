import React, { useContext } from "react";

import { ThemeContext } from "../../../App";

import { MdDone } from "react-icons/md";
import Button from "../Button/Button";

import styles from "./menu.module.scss";
import SendReview from "../SendReview/SendReview";

const Menu = () => {
  const theme = useContext(ThemeContext)
  const { open, setOpen, clickClose, openPage } = theme;
  return (

        <div className={styles.menuMain}>
          <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.secondmain}>
              <h1 className={styles.tittleMain}>
                Комплексные услуги по
                {/* <br />{" "} */}
                <span className={styles.textColor}>
                  {" "}
                  организации питания в Волгограде
                </span>
              </h1>
              <p className={styles.contextMain}>
                Производство продукции общественного
                <br />
                питания под ключ, ее доставка и организация
              </p>
              <ul className={styles.lists}>
                <li>Комплексные обеды</li>
                <li>Свободный выбор блюд</li>
                <li>Меню с учетом калорийности</li>
              </ul>
              <Button
                openPage={openPage}
                text={"Оформить заявку"}
                icon={<MdDone />}
                buttonStyle={styles.buttonStyle}
              />
              <div>
                <SendReview open={open} clickClose={clickClose} />
              </div>
            </div>
            <div className={styles.menuImage}>
              <img className={styles.menu__img} src="/img/borsh.jpg"></img>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Menu;
