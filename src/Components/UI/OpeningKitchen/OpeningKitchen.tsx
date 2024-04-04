import React,{useContext} from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../../App";
import Button from "../Button/Button";
import { uslugiPart, uslugiKuxni, uslugiData, data } from "./OpeningData";

import { MdDone } from "react-icons/md";

import styles from "./openingKitchen.module.scss";
import UslugiChast from "../ServicesPart/UslugiChast";
import SendReview from "../SendReview/SendReview";

const OpeningKitchen = () => {
  const theme = useContext(ThemeContext)
  const { open, setOpen, clickClose, openPage } = theme;
  return (
    <section className={styles.openingKitchen}>
      <div className="container">
        <div className={styles.firstPartStyle}>
          <div>
            <h1 className={styles.tittle}>Открытие столовой на предприятии</h1>
            <div className={styles.spanText}>
              <span>
                <Link to="/">Главная</Link>
              </span>{" "}
              <span>/</span> <span> Открытие столовой на предприятии</span>
            </div>
          </div>
          <div className={styles.firstPart}>
            <div className={styles.firstPartDiv}>
              <p>
                Полностью берем на себя функцию по организации питания и
                оснащению столовой. Вам больше не придется следить за
                квалификацией работников, разработкой, адаптацией и качеством
                меню. Это достигается путем передачи непрофильных активов под
                наше профессиональное управление. Благодаря опыту работы с
                крупными клиентами мы научились адаптировать и регламентировать
                на практике системы менеджмента качества продукции и сервиса, а
                также внедрить собственные наработки индивидуально под каждого
                клиента.
              </p>
              <p>
                Мы проводим Контроль Качества всего входящего сырья, продуктов и
                материалов на основании требований санитарно-эпидемиологических
                норм и внутренних норм нашей компании.
              </p>
              <p>
                Одним из наших конкурентных преимуществ является применение
                инновационных технологий в процессе производства. Под ними мы
                подразумеваем:
                <ul>
                  <li>постоянное внедрение новых, улучшенных товаров;</li>
                  <li>
                    сохранение вкуса каждого ингредиента за счет минимизации
                    тепловой обработки свежих продуктов;
                  </li>
                  <li>
                    сокращение времени производства продукции благодаря
                    повышению эффективности работы персонала.
                  </li>
                </ul>
              </p>
            </div>
            <div className={styles.firstPartDivImage}>
              <img src="/img/eatpakr.jpg" className={styles.menu__img}></img>
            </div>
          </div>
          {/* </div> */}
        </div>
        <Button
          openPage={openPage}
          text={"Оформить заявку"}
          icon={<MdDone />}
          buttonStyle={styles.buttonStyle}
        />
        <div className={styles.uslugiSecondPart}>
          {uslugiPart.map((item, index) => (
            <UslugiChast text={item} style={styles.uslugiChast} key={index} />
          ))}
        </div>
        <div>
          <h1 className={styles.tittle}>
            Чем удобен{" "}
            <span className={styles.textColor}>формат столовой?</span>
          </h1>
          <div className={styles.uslugiKuxni}>
            <div className={styles.uslugiKuxniFirstPart}>
              <p>
                Руководители предприятий, которые хотят наладить корпоративное
                питание, всегда оказываются перед выбором — заключить договор на
                доставку обедов или открыть собственную столовую. Второй вариант
                предполагает более высокие расходы, зато имеет определенные
                преимущества.
              </p>
            </div>
            <div className={styles.uslugiKuxniSecondPart}>
              <span className={styles.uslugiText}>Это:</span>
              {uslugiKuxni.map((item, index) => (
                <ul key={index} className={styles.noSpacing}>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div>
              <SendReview open={open} clickClose={clickClose} />
            </div>
        <div className={styles.uslugiChastStyleMain}>
          {uslugiData.map((item, index) => (
            <UslugiChast
              text={item}
              style={styles.uslugiChastStyle}
              key={index}
            />
          ))}
        </div>
        <div className={styles.posledniyeChasti}>
          <div className={styles.posledniyeChastiFirst}>
            <div className={styles.posledniyeChastitext}>
              <h1 className={styles.tittle}>
                Варианты открытия <br />
                <span className={styles.textColor}>корпоративной столовой</span>
              </h1>
              <span className={styles.tittleSpan}>
                У предприятия есть несколько вариантов организации питания.
              </span>
              <p className={styles.textStyle}>
                <span className={styles.perviy}>Первый</span> — это столовая
                полного цикла, когда все этапы приготовления блюд происходят на
                территории заказчика. <br />
                Преимущества этого варианта:
                <ul className={styles.noSpacing}>
                  <li>возможность приготовления блюд по заказу сотрудников;</li>
                  <li>широкий ассортимент;</li>
                  <li>более высокий уровень сервиса.</li>
                </ul>
                Но для того, чтобы организовать такую столовую, нужно выделить
                помещение под кухню — не менее 100 кв.м, также потребуется
                полноценный обеденный зал, площадь которого рассчитывается как
                2,5 кв. м на каждого сотрудника. Возрастут и расходы на
                электричество.
              </p>
            </div>
            <div className={styles.posledniyeChastiImage}>
              <img src="/img/borsh.jpg"></img>
            </div>
          </div>
          <div className={styles.posledniyeChastiFirst1}>
            <div>
              <p className={styles.textStyle1}>
                <span className={styles.perviy}>Более удобный вариант</span> —
                столовая раздаточного типа. Все блюда мы готовим на наших
                производственных мощностях и затем доставляем на ваше
                предприятие в специальных термоконтейнерах. На месте нужно
                выстроить только состоящую из нескольких модулей раздаточную
                линию. <br />
                Преимущества этого варианта:
                <ul className={styles.noSpacing}>
                  <li>
                    экономия площади, поскольку не нужно искать помещение под
                    производство;
                  </li>
                  <li>
                    небольшой расход электричества (только на модули с
                    охлаждением или подогревом);
                  </li>
                  <li>
                    быстрый запуск такой столовой — в течение нескольких дней.
                  </li>
                </ul>
                Но все равно на ее устройство понадобится выделить помещение под
                организацию самой раздаточной линии (обычно хватает 6 кв.м) и
                обеденной зоны.
              </p>
            </div>
            <div>
              <p className={styles.textStyle2}>
                <span className={styles.perviy}>Еще один вариант</span> —
                столовая доготовочного типа. Блюда в виде полуфабрикатов готовят
                на нашей фабрике-кухне, а на территории вашего предприятия их
                нужно только разогреть. Салаты и холодные закуски привозят уже в
                готовом виде или готовят в столовой — зависит от того, как
                устроено производство.
                <br />
                Преимущества этого варианта:
                <ul className={styles.noSpacing}>
                  <li>компактность, не нужно иметь просторное помещение;</li>
                  <li>отсутствие оборудования высокой мощности;</li>
                  <li>большой ассортимент блюд.</li>
                </ul>
                Но зону кухни все равно придется оборудовать отдельно, и на
                организацию такой столовой уйдет много времени.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.tittle}>
            <span className={styles.textColor}>Требования к помещениям</span>{" "}
            различного формата
          </h1>
          <p className={styles.pText}>
            Независимо от того, налажена ли доставка блюд с нашей фабрики-кухни,
            или привозят полуфабрикаты высокой степени готовности, нужно
            подготовить помещение. Возможно несколько форматов:
          </p>
          <div className={styles.parts}>
            {data.map((data) => (
              <div key={data.id} className={styles.partsBox}>
                <div>
                  <div>
                    <span className={styles.numberStyle}>{data.number}</span>
                  </div>

                  <div className={styles.secondDiv}>
                    {" "}
                    <p>
                      <span className={styles.secondText}>
                        {data.firstSpan}
                      </span>
                      {data.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningKitchen;
