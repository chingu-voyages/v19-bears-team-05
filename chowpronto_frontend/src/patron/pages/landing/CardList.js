import React from "react";
import Svgs from "../../../assets/svgs/landingPage/index";
import { CardDetail } from "./CardDetail";
// Returns Cards

export function CardList() {
  const cardText = [
    {
      title: "1. Search For Food",
      text:
        "Start searching immediately.  Enter an area and your favourite food!",
    },
    {
      title: "2. Simple SignUp",
      text:
        "SignUp is simple and safe.  A user name, email and password are you need to pay.",
    },
    {
      title: "3. Pay for your food.",
      text:
        "Pay via your card and ChowPronto will handle the rest. Your food is now on the way! ",
    },
  ];

  // Combine svg data with corresponding card
  function combineTextWithSvgs(textArray, svgArray) {
    return textArray.map((card, i) => {
      card.Svg = svgArray[i];
      return card;
    });
  }
  const cardData = combineTextWithSvgs(cardText, Svgs);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
      }}
    >
      {cardData.map(({ title, text, Svg }, index) => (
        <CardDetail key={index} title={title} text={text} Svg={Svg} />
      ))}
    </div>
  );
}
