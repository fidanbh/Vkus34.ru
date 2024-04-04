import React from "react";
import MenuButton from "../MenuButton/MenuButton";

const MobileButton = () => {
  return (
    <div>
      <span>Введите номер телефона:</span>
      <MenuButton
        id={""}
        type={"tel"}
        placeholder={"+7 (___) ___ - __ - __"}
        inputMask={"+7 (___) ___ - __ - __"}
      />
    </div>
  );
};

export default MobileButton;
