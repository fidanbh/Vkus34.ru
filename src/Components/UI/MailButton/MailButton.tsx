import React from "react";
import MenuButton from "../MenuButton/MenuButton";


const MailButton = () => {
  return (
    <div>
        <span>Укажите почту:</span>
        <MenuButton id={''} type={'mail'} placeholder={'ваш@mail.ru'} inputMask={''}/>
    </div>
  );
};

export default MailButton;
