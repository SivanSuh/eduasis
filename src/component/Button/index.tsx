import React, { FC } from "react";
import Style from "./style.module.css";
import ButtonProps from "./props";

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      className={disabled ? Style.disabled : Style.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
export default Button;
