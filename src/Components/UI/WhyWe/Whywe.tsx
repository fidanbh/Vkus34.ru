import React, { useState,useContext } from "react";
import { MdDone } from "react-icons/md";

import { ThemeContext } from "../../../App";

import styles from "./whywe.module.scss";
import Button from "../Button/Button";

const Whywe = () => {
  const data = [
    "Каждый день мы улучшаем стандарты услуг питания;",
    "Совершенствуем процесс доставки свежих продуктов и скорость их приготовления;",
    "Обеспечиваем ежедневный внутренний контроль качества услуг;",
    "Оптимизируем Ваши затраты без потери качества питания.",
  ];
  const [datas, setDatas] = useState(data);

  const theme = useContext(ThemeContext)
  const { open, setOpen, clickClose, openPage } = theme;

  return (
    <section className={styles.whyWe + '' + 'container' + '' + styles.whyWe}>
      <div className="container">

        <div className={styles.mainPart}>
          {/* <img src="https://i.hizliresim.com/50tqt0c.jpeg" className={styles.image}></img> */}
          <h1 className={styles.tittle}>
            <span className={styles.spanText}>Нас выбрали </span>
            десятки коммерческих и государственных организаций
          </h1>
          <div className={styles.box}>
            <div>
              <ul className={styles.whyWeList}>
                {datas.map((data) => (
                  <li className={styles.list}>
                    <span className={styles.listDotFirst}>
                      <MdDone className={styles.listDone} />
                    </span>
                    <span className={styles.listDotSecond}>{data}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.buttonPart}>
              <div className={styles.verticalLine}></div>
              <div className={styles.buttonText}>
                <i>Убедитесь в этом сами, став нашим Партнёром!</i>
              </div>
            </div>
            <Button
              openPage={openPage}
              text={"Оформить заявку"}
              icon={<MdDone />}
              buttonStyle={styles.buttonStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whywe;
