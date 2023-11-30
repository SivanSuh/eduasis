import React, { FC } from "react";
import Style from "./style.module.css";
import ButtonProps from "./props";

const Button: FC<ButtonProps> = ({ title, onClick, type = "button" }) => {
  return (
    <button className={Style.button} onClick={onClick} type={type}>
      {title}
    </button>
  );
};
export default Button;
