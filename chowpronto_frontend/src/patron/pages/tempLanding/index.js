import React from "react";
import styled from "styled-components";

export default function TempLandingPage() {
  return (
    <PageContainer>
      <ImgContainer>
        <img
          src="https://d1ralsognjng37.cloudfront.net/f3e697ff-8ff4-45a4-89f7-90e51dd3bb08.jpeg"
          alt="pizza-image"
        />
      </ImgContainer>
      <stuff-container>Hello from stuff container</stuff-container>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #d9dfe5;
  -webkit-animation: bummer 2s;
  animation: image-fade 2s;
  -webkit-transform: scale(1.25, 1.25);
  transform: scale(1.25, 1.25);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  opacity: 1;
`;
