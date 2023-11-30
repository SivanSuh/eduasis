import Navbar from "../Navbar";
import Style from "./style.module.css";
import React, { FC } from "react";
import LayoutProps from "./props";

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className={Style.layout}>
      <Navbar title={title} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
