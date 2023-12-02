import React, { FC } from "react";
import Style from "./style.module.css";
import FlashCardProps from "./props";

const FlashCard: FC<FlashCardProps> = ({ content, text }) => {
  return (
    <div className={Style.flashCard}>
      <p>{text?.en}</p>
      <br />
      <p>{content.tr}</p>
    </div>
  );
};
export default FlashCard;
