import React, { useContext } from "react";
import { ThemeContext } from "../../../App";

import Button from "../Button/Button";
import {
  orgData,
  uslugiOrganizachiyiFirst,
  uslugiOrganizachiyiSecond,
  uslugiDataText,
  serviceData,
  pravilaOrganizachiyi,
  pravilaOrg,
  pravilaOrg1,
  pochemuNamDoveryatData,
  pochemuMi,
} from "./OrganizationData";
import SendReview from "../SendReview/SendReview";
import UslugiChast from "../ServicesPart/UslugiChast";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from "./organizationKitchen.module.scss";

const OrganizationKitchen = () => {
  const theme = useContext(ThemeContext);
  const { open, openPage, setOpen, clickClose } = theme;
  return (
    <section className={styles.organizationKitchen}>
      <div className="container">
        <div className={styles.firstPartStyle}>
          <div>
            <h1 className={styles.tittle}>
              Организация питания на предприятии, производстве, в учреждениях
            </h1>
            <div className={styles.spanText}>
              <span>
                <Link to="/">Главная</Link>
              </span>{" "}
              <span>/</span>{" "}
              <span>
                {" "}
                Организация питания на предприятии, производстве, в учреждениях
              </span>
            </div>
          </div>
          <div className={styles.firstPart}>
            <div className={styles.firstPartDiv}>
              <p>
                <span>
                  Организация питания на предприятии по типу раздаточных – один
                  из основополагающих моментов в устройстве работ фирмы,
                  проведении различных внутренних мероприятий. Полноценный
                  кейтеринг позволяет не только подкрепиться, но и пообщаться с
                  коллегами и партнерами в непринужденной обстановке. Компания
                  «Вкус Кейтеринг» занимается организацией питания для
                  сотрудников в различных форматах. Организуем доставку
                  корпоративных обедов для офисов и мероприятий любого масштаба.
                  Наше предложение включает в себя:
                </span>
                <ul>
                  <li>
                    Разнообразное меню из блюд русской, европейской и других
                    национальных кухонь.
                  </li>
                  <li>Многообразие вариантов комплексного питания на выбор.</li>
                  <li>Скидки корпоративным клиента.</li>
                  <li>Выгодная доставка обедов.</li>
                </ul>
              </p>
              <p>
                <span className={styles.firstPartDivText}>
                  Услуги питания от компании «Вкус Кейтеринг» станут оптимальным
                  выбором для:
                </span>
                <ul>
                  <li>Руководителей, владельцев крупных фирм, организаций.</li>
                  <li>Предприятий, работающих по сложному графику.</li>
                  <li>
                    Компаний, организующих семинары, тренинги, конференции.
                  </li>
                </ul>
              </p>
            </div>
            <div className={styles.firstPartDivImage}>
              <img src="/img/sup.jpg" className={styles.firstPartImage}></img>
            </div>
          </div>
        </div>
        <Button
          openPage={openPage}
          text={"Оформить заявку"}
          icon={<MdDone />}
          buttonStyle={styles.buttonStyle}
        />
        <div>
          {orgData.map((item, index) => (
            <UslugiChast text={item} style={styles.uslugiChast} key={index} />
          ))}
        </div>
        <div>
          <SendReview open={open} clickClose={clickClose} />
        </div>
        <div className={styles.posledniyeChasti}>
          <h1 className={styles.tittle}>
            <span className={styles.textColor}>Буфет или столовая:</span> что
            выбрать
          </h1>
          <div className={styles.posledniyeChastiFirst}>
            <div>
              <p className={styles.textStyle1}>
                <span className={styles.firstPartDivText}>
                  Корпоративная столовая
                </span>{" "}
                — прекрасный способ организации питания. Однако для организации
                полноценной столовой нужно выделить большую площадь — и для
                приготовления пищи, и для самой обеденной зоны. Кроме того,
                столовая удобна тем компаниям, у которых все подразделения
                работают по одному графику. Потому что столовая обычно
                открывается только в обед, а потом закрывается.
              </p>
            </div>
            <div>
              <p className={styles.textStyle2}>
                <span className={styles.perviy}>Корпоративный буфет</span> —
                решение, которое позволит наладить корпоративное питание на
                предприятиях с различными графиками работы. Она также может
                заинтересовать компании, которые часто организуют семинары,
                конференции, другие масштабные мероприятия. Особенности его
                организации следует рассмотреть подробнее.
              </p>
            </div>
          </div>
          <div className={styles.posledniyeChastiFirst1}>
            <div className={styles.posledniyeChastitext}>
              <p className={styles.textStyle}>
                <span className={styles.perviy}>
                  Организация питания на производстве в Волгограде
                </span>
                — важное направление деятельности нашей компании «Общепит 39».
                Мы предлагаем несколько форматов, в том числе организацию
                столовой, буфет и доставку готовых блюд. С точки зрения ГОСТ
                30389-2013 буфет — это форма организации общественного питания,
                которая предполагает продажу несложных в приготовлении блюд
                (например, из полуфабрикатов высокой готовности), выпечки и
                кондитерских изделий. С технологической точки зрения понадобится
                комплекс, в который входят несколько единиц оборудования,
                предназначенного для непродолжительного хранения горячих или
                холодных блюд и напитков.
              </p>
            </div>
            <div className={styles.posledniyeChastiImage}>
              <img src="/img/borsh.jpg"></img>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.uslugiKuxni}>
            <div className={styles.uslugiKuxniFirstPart}>
              {uslugiOrganizachiyiFirst.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={styles.uslugiKuxniSecondPart}>
              <p>
                Строгие критерии для организации ни для одной из перечисленных
                форм питания законодательством и санитарными нормами не
                предусмотрено.
              </p>
              <span className={styles.uslugiText}>
                Организация питания по типу буфета:
              </span>
              {uslugiOrganizachiyiSecond.map((item, index) => (
                <ul key={index} className={styles.noSpacing}>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.uslugiChastStyleMain}>
          {uslugiDataText.map((item, index) => (
            <UslugiChast
              text={item}
              style={styles.uslugiChastStyle}
              key={index}
            />
          ))}
        </div>
        <div>
          <div>
            <div>
              <h1 className={styles.dostavkaTittle}>
                Что входит{" "}
                <span className={styles.dostavkaSpan}>в услуги доставки?</span>
              </h1>
              <div className={styles.uslugiDataStyle}>
                {serviceData.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
              <div>{/* <img src='/img/yeda.jpg'></img> */}</div>
            </div>
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
            <div className={styles.partsBox}>
              <div>
                <div>
                  <span className={styles.numberStyle}>1</span>
                </div>

                <div className={styles.secondDiv}>
                  {" "}
                  <p>
                    <span className={styles.secondText}>Буфетная стойка</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.partsBox}>
              <div>
                <div>
                  <span className={styles.numberStyle}>2</span>
                </div>

                <div className={styles.secondDiv}>
                  {" "}
                  <p>
                    <span className={styles.secondText}>
                      Холодильные витрины для блюд, требующих особого
                      температурного режима
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.partsBox}>
              <div>
                <div>
                  <span className={styles.numberStyle}>3</span>
                </div>

                <div className={styles.secondDiv}>
                  {" "}
                  <p>
                    <span className={styles.secondText}>
                      Витрины для выпечки
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.partsBox}>
              <div>
                <div>
                  <span className={styles.numberStyle}>4</span>
                </div>

                <div className={styles.secondDiv}>
                  {" "}
                  <p>
                    <span className={styles.secondText}>
                      СВЧ-печи для подогрева блюд
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.partsBox}>
              <div>
                <div>
                  <span className={styles.numberStyle}>5</span>
                </div>

                <div className={styles.secondDiv}>
                  {" "}
                  <p>
                    <span className={styles.secondText}>Кофе-машины и т.д</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.partsBoxSix}>
              <div className={styles.secondDiv}>
                {" "}
                <p>
                  <span className={styles.secondText}>
                    Если на предприятии происходит расчет наличными, то нужно
                    будет позаботиться о соответствующем оборудовании. В буфете
                    также могут быть установлены дополнительные приборы,
                    например, сокоохладитель.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.nashiPreimushestva}>
          <h1 className={styles.tittle}>
            <span className={styles.textColor}>Правила организации</span>{" "}
            столовой и буфета
          </h1>
          <div className={styles.dostavkaLastPart}>
            <div className={styles.dostavkaLastPartFirst}>
              <p>Сотрудники нашей компании:</p>
              {pravilaOrganizachiyi.map((item, index) => (
                <ul key="index" className={styles.noSpacing}>
                  <li>{item}</li>
                </ul>
              ))}

              {pravilaOrg.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={styles.dostavkaLastPartSecond}>
              {pravilaOrg1.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.obedKafeteriy}>
          <div className={styles.obedKafeteriyFirst}>
            <h1 className={styles.dostavkaTittle}>
              Почему
              <span className={styles.dostavkaSpan}> нам доверяют?</span>
            </h1>
            <p className={styles.obedKafeteriyText}>
              Организация питания в учреждениях в Калининграде — задача, которую
              наша компания успешно решает много лет.{" "}
              <span className={styles.textPochemu}>Наши преимущества:</span>
            </p>
          </div>
          <div className={styles.obedKafeteriySecond}>
            {pochemuNamDoveryatData.map((item, index) => (
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
        <div className={styles.uslugiChastStyleMain}>
          {pochemuMi.map((item, index) => (
            <UslugiChast
              text={item}
              style={styles.uslugiChastStyle}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationKitchen;
