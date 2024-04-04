import React, { useState,useContext } from "react";
import { MdDone } from "react-icons/md";

import { data } from "./WorkData";

import { ThemeContext } from "../../../App";

import styles from "./workWithUs.module.scss";
import Button from "../Button/Button";

const WorkWithUs = () => {
  const [datas, setDatas] = useState(data);
  const theme = useContext(ThemeContext)
  const { open, setOpen, clickClose, openPage } = theme;
  return (
    <section className={styles.workWithUs}>
      <div className="container">

        <div className={styles.main}>
          <h1 className={styles.tittle}><span className={styles.tittleSpan}>5 шагов</span> для успешного сотрудничества</h1>
          <div className={styles.workWithUsMenu}>
            {datas.map((data) => (
              <div className={styles.workWithUsparts}>
                <img src={data.img} className={styles.workWithUsImage}></img>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
          <Button
          openPage={openPage}
            text={"Оформить заявку"}
            icon={<MdDone />}
            buttonStyle={styles.buttonStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
