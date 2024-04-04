import React from "react";

import styles from "./whatWeService.module.scss";

const WhatWeService = () => {
  return (
    <section className={styles.whatWeService}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.serviceMenu}>
            <h3>Мы обслуживаем:</h3>
            <ul>
              <li>
                корпоративных клиентов на постоянной основе, предлагая доставку
                обедов или организацию столовой;
              </li>
              <li>
                различные мероприятия типа конференций, семинаров и тренингов;
              </li>
              <li>семейные праздники, включая свадебные банкеты и юбилеи.</li>
            </ul>
          </div>
          <div className={styles.serviceSecondMenu}>
            <p>
              Организация питания в Волгограде с нашей фирмой — это просто и легко.
              Нужно только позвонить нам или заполнить форму на сайте.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatWeService;
