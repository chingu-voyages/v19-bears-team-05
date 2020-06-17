import React from "react";
import styled from "styled-components";
// Individual Card. Returns svg, title, and text.

export function CardDetail(props) {
  const {
    title,
    text,
    Svg: { src, alt },
  } = props;

  return (
    <StyledCard>
      <div style={{ padding: " 0 1em 0 1m" }}>
        <CardImageContainer>
          <img src={src} alt={alt} />
        </CardImageContainer>
        <h3>{title}</h3>
        <p style={{ textAlign: "start" }}>{text}</p>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  padding: 1em;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.09);
  height: 100%;
  max-height: 300px;
  max-width: 90%;
  background: white;
  display: flex;
  flex-direction: column;
  @media (max-height: 900px) {
    display: none;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    max-height: 100px;
    height: content;
    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        max-height: 100px;
        flex: 1;
      }
      h3 {
        flex: 4;
      }
      p {
        display: none;
      }
    }
  }
  justify-content: center;
  align-items: flex-start;
`;

const CardImageContainer = styled.div`
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
