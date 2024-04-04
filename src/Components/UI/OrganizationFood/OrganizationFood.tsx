import React, { useContext } from "react";

import { ThemeContext } from "../../../App";

import {
  orgFood,
  orgDataSecond,
  orgDataBox,
  korporativnoyePitaniye,
  korporativnoyePitaniye3,
  pochemuNujnokNam,
  pochemuNujnokNamSecond,
} from "./OrganizationOfFood";

import SendReview from "../SendReview/SendReview";
import Button from "../Button/Button";
import UslugiChast from "../ServicesPart/UslugiChast";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./organizationFood.module.scss";

const OrganizationFood = () => {
  const theme = useContext(ThemeContext);
  const { open, setOpen, clickClose, openPage } = theme;
  return (
    <section className={styles.firstPartStyle}>
      <div className="container">
        <div>
          <div>
            <h1 className={styles.tittle}>
              Организация питания на работников, сотрудников,
              <br /> персонала
            </h1>
            <div className={styles.spanText}>
              <span>
                <Link to="/">Главная</Link>
              </span>{" "}
              <span>/</span>{" "}
              <span>
                {" "}
                Организация питания на работников, сотрудников, персонала
              </span>
            </div>
          </div>
          <div className={styles.firstPart}>
            <div className={styles.firstPartDiv}>
              <div>
                {orgFood.map((item, index) => (
                  <div>
                    <p>{item.firstText}</p>
                    <p>{item.secondText}</p>
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

            <div className={styles.firstPartDivImage}>
              <img
                src="/img/kuricha.jpg"
                className={styles.firstPartImage}
              ></img>
            </div>
          </div>
          <div>
            <SendReview open={open} clickClose={clickClose} />
          </div>
        </div>
        <div className={styles.obedKafeteriy}>
          <div className={styles.obedKafeteriyFirst}>
            <h1 className={styles.dostavkaTittle}>
              Кого заинтересует
              <span className={styles.dostavkaSpan}> организация питания</span>
            </h1>
            <p className={styles.obedKafeteriyText}>
              Организация питания — актуальный вопрос для предприятий всех форм
              собственности. Этот вопрос заинтересует:
            </p>
          </div>
          <div className={styles.obedKafeteriySecond}>
            {orgDataSecond.map((item, index) => (
              <ul key={index} className={styles.obedKafeteriyUl}>
                <li className={styles.obedKafeteriyDisplay}>
                  <div>
                    {<MdDone className={styles.iconStyleObedKafeteriy} />}
                  </div>
                  <div>{item}</div>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div>
          <h1 className={styles.dostavkaTittle}>
            <span className={styles.dostavkaSpan}>Какое оборудование</span>{" "}
            может потребоваться
          </h1>
          <span>
            Обычно оборудование подбирают с учетом того, какое меню
            предусмотрено, сколько посетителей <br />
            сможет обслуживать буфет и т.д. Для него могут потребоваться:
          </span>
          <div className={styles.mainBox}>
            {orgDataBox.map((item) => (
              <div className={styles.partsBox}>
                <div key={item.id}>
                  <div>
                    <span className={styles.numberStyle}>{item.number}</span>
                  </div>

                  <div className={styles.secondDiv}>
                    {" "}
                    <p>
                      <span className={styles.secondText}>
                        {item.bolderText}
                      </span>
                      <p>{item.text}</p>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.partsBoxSix}>
              <div className={styles.secondDiv}>
                {" "}
                <p>
                  <span className={styles.secondText}>
                    Организация питания сотрудников в Калининграде — это задача,
                    которую вы можете доверить нашей компании «Общепит 39». Мы
                    работаем в этой отрасли с 2009 года и знаем, какую важную
                    роль играет корпоративное питание.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.posledniyeChasti}>
          <h1 className={styles.tittle}>
            Как можно организовать{" "}
            <span className={styles.textColor}>корпоративное питание?</span>
          </h1>
          <span>
            Существует несколько вариантов, выбор конкретного зависит от
            ситуации на предприятии. Наша компания «Вкус Кейтеринг» предлагает:
          </span>
          <div className={styles.posledniyeChastiFirst}>
            {korporativnoyePitaniye.map((item) => (
              <div key={item.id} className={styles.textStyle2}>
                <span>{item.tittle}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.posledniyeChastiFirst1}>
            <div className={styles.posledniyeChastitext}>
              {korporativnoyePitaniye3.map((item) => (
                <div key={item.id} className={styles.textStyle2}>
                  <span>{item.tittle}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className={styles.posledniyeChastiImage}>
              <img src="/img/borsh.jpg"></img>
            </div>
          </div>
        </div>
        <div className={styles.nashiPreimushestva}>
          <h1 className={styles.tittle}>
            <span className={styles.textColor}>Почему стоит</span> обратиться к
            нам?
          </h1>
          <p>
            Наша компания «Вкус Кейтеринг» сможет организовать корпоративное
            питание в любой точке Калининградской области, в том числе и на
            отдаленных площадках (например, там, где ведется строительство).
          </p>
          <div className={styles.dostavkaLastPart}>
            <div className={styles.dostavkaLastPartFirst}>
              <p>Наши преимущества:</p>
              {pochemuNujnokNam.map((item, index) => (
                <ul key="index" className={styles.noSpacing}>
                  <li>
                    <span>{item.first}</span>
                    <span>{item.second}</span>
                  </li>
                </ul>
              ))}
            </div>
            <div className={styles.dostavkaLastPartSecond}>
              {pochemuNujnokNamSecond.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationFood;
