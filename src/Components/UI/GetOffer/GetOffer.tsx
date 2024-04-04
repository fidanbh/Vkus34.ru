import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import emailjs from "@emailjs/browser";

import styles from "./getOffer.module.scss";
import Button from "../Button/Button";

const GetOffer = () => {
  const [textAinput, setTextAInput] = useState("");
  console.log(textAinput);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i62lb2e", "template_e8pi0ul", form.current, {
        publicKey: "rbOVGfrlrxQafpaEP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className={styles.getOffer}>
      <div className="container">
        <div>
          <div className={styles.tittle}>
            <h1 className={styles.tittleText}>
              Получите{" "}
              <span className={styles.styleText}>коммерческое предложение</span>
            </h1>
          </div>
          <div className={styles.styleTextSecond}>
            <span>
              Мы с вами свяжемся, уточним детали и вышлем коммерческое
              предложение для Вас.
            </span>
          </div>
        </div>
        <div className={styles.formStyle}>
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <span className={styles.offerMessage}>
              Заполните и отправьте форму
            </span>
            <br />
            <label>
              <span className={styles.offerAbouCompany}>
                Опишите вкратце о вашей организации и вашем запросе:
              </span>
              <br />
              <textarea
                className={styles.offerTextarea}
                // value={textAinput}
                // onChange={(e) => setTextAInput(e.target.value)}
                name="message"
              ></textarea>
            </label>
            <br />
            <label>
              <span className={styles.offerAbouCompany}>Ваше имя:</span>
              <br />
              <input
                className={styles.offerInput}
                type="text"
                name="user_name"
              ></input>
            </label>
            <br />
            <label>
              <span className={styles.offerAbouCompany}>Ваша почта:</span>
              <br />
              <input
                className={styles.offerInput}
                type="email"
                name="from_name"
              ></input>
            </label>
            <br />
            <label>
              <span className={styles.offerAbouCompany}>Ваш телефон:</span>
              <br />
              <input
                className={styles.offerInput}
                type="tel"
                placeholder={"+7 (___) ___ - __ - __"}
                data-inputmask-mask={"+7 (___) ___ - __ - __"}
                maxLength={12}
                name="user_phone"
              ></input>
            </label>
            <br />
            <Button
              openPage={""}
              text={"Отправить запрос"}
              icon={""}
              buttonStyle={styles.buttonStyle}
            />
            <span className={styles.textConf}>
              Отправляя форму, вы даете согласие на обработку своих{" "}
              <Link to="/newPage">персональных данных.</Link>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetOffer;
