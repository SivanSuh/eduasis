import React, { FC } from "react";
import Style from "./style.module.css";
import NavbarProps from "./props";

const Navbar: FC<NavbarProps> = ({ title }) => {
  return (
    <nav className={Style.navbar}>
      <h2 className={Style.title}>{title}</h2>
    </nav>
  );
};
export default Navbar;
