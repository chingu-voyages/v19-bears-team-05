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

      <CallToAction />
    </HeroLayout>
  );
}

const HeroLayout = styled.article`
  display: grid;
  grid-template-rows: 14em auto;
  height: 50em;
  width: 100vw;

  /* 
  -----------------------------------------------------------
  Expand child beyond parent with margin left and margin right magic
  */
  margin-left: calc(49% - 50vw);
  margin-right: calc(49% - 50vw);
  /* 
  -----------------------------------------------------------
  */
  background: #f2f5f7;
`;

export const HeroTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  align-self: center;
  color: #3949ab;
`;
