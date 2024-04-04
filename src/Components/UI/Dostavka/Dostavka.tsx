import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../App";
import {
  variantsData,
  servicedata,
  dostavkaData,
  uslugiData,
  dostavkaDataSecond,
  dostavka,
  dostavkaPart,
} from "./DostavkaData";

import { MdDone } from "react-icons/md";
import Button from "../Button/Button";

import SendReview from "../SendReview/SendReview";

import styles from "./dostavka.module.scss";
import UslugiChast from "../ServicesPart/UslugiChast";

const Dostavka = () => {
  const [data, setData] = useState(variantsData);
  const [serviceData, setServiceData] = useState(servicedata);
  const theme = useContext(ThemeContext);
  const { open, openPage,setOpen, clickClose } = theme;

  return (
    <section className={styles.dostavkaStyle}>
      <div className="container">
        <div className={styles.firstPartStyle}>
          <div>
            <h1 className={styles.tittle}>Доставка питания на предприятия</h1>
            <div className={styles.spanText}>
              <span>
                <Link to="/">Главная</Link>
              </span>{" "}
              <span>/</span> <span> Доставка питания на предприятия</span>
            </div>
          </div>
          <div className={styles.firstPart}>
            <div className={styles.firstPartDiv}>
              <p>
                <span className={styles.firstPartDivText}>
                  Питание на предприятии – неотъемлемая и важная часть рабочего
                  процесса. От того, насколько оно полноценно, сбалансированно и
                  своевременно зависит:
                </span>
                <ul>
                  <li>эффективность рабочего процесса и повышение прибыли;</li>
                  <li>
                    благоприятная обстановка в коллективе и доброжелательность;
                  </li>
                  <li>здоровье сотрудников и отличное настроение.</li>
                </ul>
              </p>
              <p>
                Организация общественного питания на предприятии не всегда
                возможна на базе компании – требуется внушительная площадь,
                специальное оборудование и соблюдение санитарно-гигиенических
                норм. Но выход есть и в этой ситуации. Чтобы организовать
                вкусный, полезный и, конечно же, горячий обед на предприятии,
                вам достаточно позвонить нам. Мы возьмем на себя все текущие
                вопросы и предоставим вам комфортные условия для сотрудничества.
                Это:
                <ul>
                  <li>
                    оперативная организация обедов на предприятии и
                    своевременность предоставления пищи;
                  </li>
                  <li>
                    гарантию высокого качества пищи и напитков, их максимальной
                    свежести и безопасности;
                  </li>
                  <li>
                    минимальные цены на услуги и скидки для постоянных клиентов;
                  </li>
                  <li>
                    подбор индивидуального питания на производственном, пищевом
                    предприятии и организациях другого профиля;
                  </li>
                  <li>разнообразное питание для рабочих по любым рецептам;</li>
                  <li>строгое соблюдение норм гигиены.</li>
                </ul>
              </p>
            </div>
            <div className={styles.firstPartDivImage}>
              <img src="/img/yeda.jpg" className={styles.menu__img}></img>
            </div>
          </div>
        </div>
        <Button
          openPage={openPage}
          text={"Оформить заявку"}
          icon={<MdDone />}
          buttonStyle={styles.buttonStyle}
        />
        <div className={styles.dostavkaSecondPart}>
          {dostavkaData.map((item, index) => (
            <UslugiChast text={item} style={styles.uslugiChast} key={index} />
          ))}
        </div>
        <div>
              <SendReview open={open} clickClose={clickClose} />
            </div>
        <div>
          <div>
            <div>
              <h1 className={styles.dostavkaTittle}>
                Что входит{" "}
                <span className={styles.dostavkaSpan}>в услуги доставки?</span>
              </h1>
              <div className={styles.uslugiDataStyle}>
                {uslugiData.map((item,index) => (
                  <p key={index}>
                    <span>{item.textFirst}</span>
                    {item.textSecond}
                  </p>
                ))}
              </div>
              <div>{/* <img src='/img/yeda.jpg'></img> */}</div>
            </div>
          </div>
          <p className={styles.dostavkaText}>
            Мы предлагаем на выбор обширное меню, которое включает блюда
            европейской и русской кухни. Возможно несколько вариантов:
          </p>
          <div className={styles.parts}>
            {serviceData.map((data) => (
              <div key={data.id} className={styles.partsBox}>
                <div>
                  <div>
                    <span className={styles.numberStyle}>{data.number}</span>
                  </div>

                  <div className={styles.secondDiv}>
                    {" "}
                    <p>
                      {/* <span className={styles.secondText}>{data.text}</span> */}
                      {data.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.obedKafeteriy}>
            <div className={styles.obedKafeteriyFirst}>
              <h1 className={styles.dostavkaTittle}>
                <span className={styles.dostavkaSpan}>Доставка обедов</span> или
                кафетерий
              </h1>
              <p className={styles.obedKafeteriyText}>
                Считается, что собственная столовая — это более удобный вариант,
                потому что там у сотрудников больше возможности для отдыха и
                общения. Но не всегда предприятие может ее обустроить:
              </p>
            </div>
            <div className={styles.obedKafeteriySecond}>
              {dostavkaDataSecond.map((item) => (
                <ul key={item.id} className={styles.obedKafeteriyUl}>
                  <li className={styles.obedKafeteriyDisplay}>
                    <div>
                      {<MdDone className={styles.iconStyleObedKafeteriy} />}
                    </div>
                    <div>{item.text}</div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className={styles.uslugiChastStyleMain}>
            {dostavka.map((item, index) => (
              <UslugiChast
                text={item}
                style={styles.uslugiChastStyle}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className={styles.posledniyeChasti}>
          <div className={styles.posledniyeChastiFirst}>
            <div className={styles.posledniyeChastitext}>
              <h1 className={styles.tittle}>
                Как будет организована <br />
                <span className={styles.textColor}>доставка обедов</span>
              </h1>
              <div className={styles.textStyle}>
                <span className={styles.perviy}>
                  Для того, чтобы заказать доставку обедов, вам нужно больше
                  рассказать о вашем бизнесе:
                </span>
                <br />
                <ul className={styles.noSpacing}>
                  <li>сколько человек будет обедать ежедневно;</li>
                  <li>
                    какой вариант меню вы предпочитаете — выбор отдельных блюд
                    или комплексные обеды (суп, мясное блюдо с гарниром и
                    салат), возможно, будут отдельные требования для
                    вегетарианцев;
                  </li>
                  <li>есть ли оборудованная столовая;</li>
                  <li>
                    как работает предприятие, какой будет график работы
                    (посменный или нет).
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.posledniyeChastiImage}>
              <img src="/img/borsh.jpg"></img>
            </div>
          </div>
          <div className={styles.posledniyeChastiFirst1}>
            <p className={styles.textStyle1}>
              В зависимости от этого наши менеджеры могут порекомендовать вам
              формат работы, полностью соответствующий особенностям вашего
              бизнеса. Мы работаем на основании официального договора. В нем
              будут прописаны все права и обязанности сторон, будет зафиксирован
              объем услуги и размер ежемесячных платежей. Схема формирования
              цены прозрачна, вы сможете убедиться в правильности расчетов.
              Предприятие само решит, как стоимость обедов будут оплачивать
              сотрудники, будут ли для них предусмотрены скидки или субсидии.
            </p>

            <p className={styles.textStyle2}>
              <span className={styles.perviy}>
                Все блюда мы готовим на собственных производственных мощностях.
              </span>{" "}
              — столовая Наше производство проходит строгий внутренний и внешний
              аудит, все санитарные нормы неукоснительно соблюдаются. Можно
              посмотреть фотографии нашего производства в соответствующем
              разделе сайта и самому в этом убедиться — нам нечего скрывать, и
              мы всегда готовы рассказать больше о нашей работе.
              
                На фабрике-кухне также происходит расфасовка по термобоксам, в
                которых потом эти блюда будут доставлены к пункту назначения. Не
                только наши повара, но и весь остальной персонал регулярно
                проходят медицинский осмотр, поэтому вы можете быть уверены, что
                на этапе упаковку все санитарные правила будут соблюдены.
              
            </p>
          </div>
        </div>
        <div className={styles.nashiPreimushestva}>
          <h1 className={styles.tittle}>
            Наши <span className={styles.textColor}>преимущества</span>
          </h1>
          <div className={styles.dostavkaLastPart}>
            <div className={styles.dostavkaLastPartFirst}>
              <p>
                Наша компания «Вкус Кейтеринг» предлагает услуги доставки
                питания в Калининграде по доступным ценам. Наши преимущества:
              </p>
              {dostavkaPart.map((item, index) => (
                <ul key={index} className={styles.noSpacing}>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
            <div className={styles.dostavkaLastPartSecond}>
              <p>
                Все блюда готовятся в день доставки. Мы заботимся об их
                правильной упаковке, чтобы они сохранили свою свежесть и
                хранились при правильном температурном режиме. Также у нас можно
                дополнительно заказать одноразовую посуду для организации
                питания на отдаленных участках.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dostavka;
