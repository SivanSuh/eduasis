import React, { FC } from "react";
import AvatarProps from "./props";
import Style from "./style.module.css";

const Avatar: FC<AvatarProps> = ({ image, alt }) => {
  return <img className={Style.avatar} src={image} alt={alt} />;
};
export default Avatar;
