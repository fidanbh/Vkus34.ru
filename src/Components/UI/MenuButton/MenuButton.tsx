import React from "react";

import styles from "./menuButton.module.scss";

const MenuButton = ({ id, type, inputMask, placeholder }) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        data-inputmask-mask={inputMask}
        placeholder={placeholder}
      className={styles.input}></input>
    </div>
  );
};

export default MenuButton;
