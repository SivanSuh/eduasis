import React, { FC } from "react";
import Style from "./style.module.css";
import FlashCardProps from "./props";

const FlashCard: FC<FlashCardProps> = ({ content, text }) => {
  return (
    <div className={Style.flashCard}>
      <p>{content}</p>
      {/* {text.translations.map((item) => (
        <p>{item.translatedText}</p>
      ))} */}
    </div>
  );
};
export default FlashCard;
