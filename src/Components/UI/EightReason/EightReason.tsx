import React, { useState, useContext } from "react";
import { MdDone } from "react-icons/md";

import { ThemeContext } from "../../../App";

import { eightData } from "./EightData";

import styles from "./eightReason.module.scss";
import Button from "../Button/Button";

const EightReason = () => {
  const [datas, setDatas] = useState(eightData);
  const theme = useContext(ThemeContext);
  const { open, setOpen, clickClose, openPage } = theme;
  return (
    <section className={styles.eightReason}>
      <div className="container wrapper">
        <h1 className={styles.eightTittle}>
          <span className={styles.styleText}>Восемь причин</span> выбрать наши
          услуги
        </h1>
        <p>Договор с нашей компанией «Вкус Кейтеринг» — это:</p>
        <div className={styles.eightMenu}>
          <div className={styles.eightGrid}>
            {datas.map((data) => (
              <div className={styles.eightParts}>
                <div className={styles.numberStyle}>{data.number}</div>
                <div className={styles.textStyle}>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.commonMessage}>
            <p>
              <span>
                {" "}
                Все это возможно для мероприятий самого разного формата.
              </span>{" "}
              Нужно только с самого начала сообщить менеджерам необходимую
              информацию — в каком формате проводится праздник, сколько
              приглашено гостей и т.д.
            </p>
          </div>
          <div>
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

export default EightReason;
