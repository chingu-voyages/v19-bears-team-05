import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../../../shared_components/Logo";
import { Search } from "../landing/Search";

export default function TempLandingPage() {
  return (
    <PageContainer>
      <ImgContainer>
        <Img
          src="https://d1ralsognjng37.cloudfront.net/f3e697ff-8ff4-45a4-89f7-90e51dd3bb08.jpeg"
          alt="pizza-image"
        />
      </ImgContainer>
      <StuffContainer>
        <Logo />
        <Search />
      </StuffContainer>
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

const ImageAnimation = keyframes`
  from {
    transform: scale(1.25,1.25);
    opacity: 1;
  }

  to {
    transform: scale(1.2,1.2);
    opacity: 0.2;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #d9dfe5;
  animation: ${ImageAnimation} 2s;
  animation-fill-mode: forwards;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContainerAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StuffContainer = styled.div`
  z-index: 10;
  background: white;
  padding: ${({ theme }) => theme.pd900};
  border-radius: ${({ theme }) => theme.br100};
  opacity: 0;
  box-shadow: ${({ theme }) => theme.sh400};
  animation: ${ContainerAnimation} 1s 1s;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
