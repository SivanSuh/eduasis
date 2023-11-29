import React, { FC } from "react";
import Style from "./style.module.css";
import ButtonProps from "./props";

const Button: FC<ButtonProps> = ({ title, isActive }) => {
  return <button className={Style.button}>{title}</button>;
};
export default Button;
