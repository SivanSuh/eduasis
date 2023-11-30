import React, { FC } from "react";
import Style from "./style.module.css";
import FlashCardProps from "./props";

const FlashCard: FC<FlashCardProps> = ({ content }) => {
  return <div className={Style.flashCard}>{content}</div>;
};
export default FlashCard;
