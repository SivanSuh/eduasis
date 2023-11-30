import React, { FC } from "react";
import PopupProps from "./props";
import Style from "./style.module.css";

const Popup: FC<PopupProps> = ({ children, close, open = false }) => {
  return (
    <>
      {open && (
        <div className={Style.popup}>
          <p onClick={() => close?.(false)}>X</p>
          <main>{children}</main>
        </div>
      )}
    </>
  );
};
export default Popup;
