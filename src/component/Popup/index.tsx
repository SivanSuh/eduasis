import React, { FC } from "react";
import PopupProps from "./props";
import Style from "./style.module.css";

const Popup: FC<PopupProps> = ({ children, close, open = false, position }) => {
  return (
    <>
      {open && (
        <div
          className={Style.popup}
          style={{ left: position.x, right: position.y }}
        >
          <div className={Style.content}>
            <p onClick={close}></p>
            <main className={Style.text}>{children}</main>
          </div>
        </div>
      )}
    </>
  );
};
export default Popup;
