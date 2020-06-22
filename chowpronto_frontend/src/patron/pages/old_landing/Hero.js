import React from "react";
import { CallToAction } from "./CallToAction";
import { CardList } from "./CardList";
import styled from "styled-components";
// ---------------------
//  Hero call to action
// ---------------------
// How to get started
//  ____ ____ ____
//  |__| |__| |__|
//
//  Already A Member?
//  | Sign up here |
export function Hero() {
  return (
    <HeroLayout>
      <HeroTitle> How to get started </HeroTitle>
      <CardList />
    </HeroLayout>
  );
}

const HeroLayout = styled.article`
  display: flex;
  flex-direction: column;
  grid-row: 2;
  grid-column: 1;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HeroTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 56px;
  text-align: center;
  align-self: center;
  color: #3949ab;
`;
