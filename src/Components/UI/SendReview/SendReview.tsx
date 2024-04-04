import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  AiOutlineArrowLeft,
  AiFillStar,
  AiFillCloseCircle,
} from "react-icons/ai";

import { MdClose } from "react-icons/md";
import InputMask from "react-input-mask";

interface IModalPage {
  open?: boolean;
  clickClose?: () => void;
}

import styles from "./sendReview.module.scss";
const SendReview: React.FC<IModalPage> = ({ open, clickClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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
    <>
      {!!open && (
        <div className={styles.modal}>
          <div className={styles.modalSecond}>
            <div className={styles.closeBtn}>
              <MdClose className={styles.modal_close} onClick={clickClose} />
            </div>
            <div>
              <div>
                <h2 className={styles.tittleText}>Отправьте заявку</h2>
              </div>
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <label htmlFor="text">Ваше имя:</label>
                  <br />
                  <InputMask
                    // mask="Как к вам обращаться?"
                    // placeholder="Как к вам обращаться?"
                    // id="text"
                    // name="text"
                    // type="text"
                    // value={handleSubmit(event)}
                    // className={styles.inputStyle}
                    // mask="a******************"
                    mask=""
                    placeholder="Как к вам обращаться?"
                    id="name"
                    name="user_name"
                    type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    className={styles.inputStyle}
                  />
                  <br />
                  <label htmlFor="phone">Ваш телефон:</label>
                  <br />
                  <InputMask
                    // mask="+7 (999) 999-99-99"
                    // placeholder="+7 (___) ___-__-__"
                    // id="phone"
                    // name="phone"
                    // className={styles.inputStyle}
                    //mask="+7 (999) 999-99-99"
                    placeholder="+7 (___) ___-__-__"
                    id="phone"
                    name="user_phone"
                    type="tel"
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)}
                    className={styles.inputStyle}
                    maxLength={12}
                  />
                  <br />
                  <input
                    type="submit"
                    value="Отправить"
                    className={styles.inputSubmit}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SendReview;
