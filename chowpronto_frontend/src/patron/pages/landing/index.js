import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// Local imports
import Svgs from "../../../assets/svgs/landingPage/index";

// ---------------------
//     Landing Page
// ---------------------

function LandingPage() {
  return (
    <Layout>
      <LocationSearch />
      <Hero />
    </Layout>
  );
}

function LocationSearch() {
  // TODO: In the future State will be used for displaying location options.  Otherwise it should live inside <Search />
  const [input, setInput] = useState("");
  // Handle user input
  function handleChange(event) {
    const { value } = event.target;

    setInput(value);
  }
  return (
    <div
      style={{
        height: "20em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Search input={input} onChange={handleChange} />
    </div>
  );
}
function Search({ input, onChange }) {
  return (
    <ElevatedContainer>
      <Flex>
        <InputParent>
          <Input placeholder="Location" value={input} onChange={onChange} />
          <Label>Location</Label>
        </InputParent>
        <Grid>
          <SearchSVG />
          <SearchButton>Search</SearchButton>
        </Grid>
      </Flex>
      <div
        style={{
          gridRow: "3",
          alignSelf: "center",
          justifySelf: "flex-start",
          paddingLeft: "1.54em",
        }}
      >
        Are you in{" "}
        <span
          style={{
            color: "#3949AB",
            letterSpacing: "0.02em",
            fontWeight: 500,
            fontSize: 17,
            cursor: "pointer",
          }}
        >
          Berlin?
        </span>
      </div>
    </ElevatedContainer>
  );
}

// ---------------------
//  Hero call to action
// ---------------------
// How to get started
//  ____ ____ ____
//  |__| |__| |__|
//
//  Already A Member?
//  | Sign up here |

function Hero() {
  return (
    <HeroLayout>
      <HeroTitle> How to get started </HeroTitle>
      <CardList />
      <CallToAction />
    </HeroLayout>
  );
}

// Returns Cards
function CardList() {
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
      {cardData.map(({ title, text, Svg }) => (
        <CardDetail title={title} text={text} Svg={Svg} />
      ))}
    </div>
  );
}

// Individual Card. Returns svg, title, and text.
function CardDetail(props) {
  const {
    title,
    text,
    Svg: { src, alt },
  } = props;

  return (
    <section
      style={{
        padding: "1em",
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.09)",
        height: "336px",
        width: "320px",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ padding: " 0 1em 0 1m" }}>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
        <p style={{ textAlign: "start" }}>{text}</p>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <div>
      <H2>Already a member?</H2>
      <Link to="/login">
        <SignInBtn>Sign in Here</SignInBtn>
      </Link>
    </div>
  );
}

// ===================
//  Styled Components
// ===================

// ------------------------------
// Landing Page Styled-Components

// Page Layout
const Layout = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

// ---------------------------------
// Location Search Styled-Components

// Container for Search elements
const ElevatedContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  height: 180px;
  width: 540px;
`;

// Button SVG ICON
function SearchSVG() {
  return (
    <svg
      style={{
        zIndex: 1,
        alignSelf: "center",
        paddingLeft: ".6em",
        pointerEvents: "none",
      }}
      width="17"
      height="17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.64 11.417L15.221 16M12.77 6.885a5.885 5.885 0 11-11.77 0 5.885 5.885 0 0111.77 0z"
        stroke="#E2E5FA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.28 6.885a5.395 5.395 0 11-10.79 0 5.395 5.395 0 0110.79 0z"
        fill="#DCE1FF"
      />
    </svg>
  );
}
// OverLays button and SVG on same level with grid-area: 1 / 1;
const Grid = styled.div`
  display: grid;
  > * {
    grid-area: 1 / 1;
  }
`;

// Aligns button and input
const Flex = styled.div`
  grid-row: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SearchButton = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  background: #3949ab;
  border-radius: 3px;
  padding: 0.71em 2em;
  color: white;
  cursor: pointer;
`;

const InputParent = styled.div`
  width: 340px;
  height: 72px;
  border: 2px solid #545e97;
  box-sizing: border-box;
  border-radius: 4px;
  display: grid;
  > * {
    grid-area: 1 / 1;
  }
`;

// Location TextInput
const Input = styled.input`
  display: block;
  border: none;
  color: #111739;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  width: 100%;
  padding: 20px 16px 5px;
  box-sizing: border-box;
  &:focus {
    & + label {
      transform: translateY(-55%);
      transition: transform 0.18s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
  &:not(:placeholder-shown) {
    & + label {
      transform: translateY(-55%);
    }
  }
  ::placeholder {
    visibility: hidden;
  }
  ::-moz-placeholder {
    opacity: 0;
  }
`;
const Label = styled.label`
  display: block;
  color: #545e97;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  width: 100%;
  align-self: center;
  padding: 20px 16px 5px;
  pointer-events: none;
  box-sizing: border-box;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

// -----------------------
//  Hero Styled-Components

//  Hero Layout
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

const HeroTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  align-self: center;
  color: #3949ab;
`;

// ----------------------
// CTA Styled-Components

const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.primary.bg};
    font-size: 42px;
    font-weight: 500;
  `}
`;

const SignInBtn = styled.button`
  ${({ theme }) => css`
    background: ${theme.primary.bg};
    border: none;
    padding: 0.333em 2em;
    color: ${theme.primary.colorText};
    letter-spacing: 0.01em;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    cursor: pointer;
    &:active {
      transform: translateY(0.1rem);
    }
  `}
`;
export default LandingPage;
