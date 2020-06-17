import React from "react";
import Svgs from "../../../assets/svgs/landingPage/index";
import { CardDetail } from "./CardDetail";
import styled from "styled-components";
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
    <StyledCardList>
      {cardData.map(({ title, text, Svg }, index) => (
        <CardDetail key={index} title={title} text={text} Svg={Svg} />
      ))}
    </StyledCardList>
  );
}

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-evenly;
  align-items: flex-start;
  width: calc(100%-100px);
  align-content: stretch;
  justify-items: center;
  grid-gap: 20px;
  padding: 20px;
  position: relative;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    section {
      /* max-height: 5vh; */
      flex-direction: row;
    }
  }
`;
