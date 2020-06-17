import React from "react";
import styled, { css } from "styled-components";

// Local imports
import { Hero } from "./Hero";
import { LocationSearch } from "./LocationSearch";
import { CallToAction } from "./CallToAction";

// ---------------------
//     Landing Page
// ---------------------

function LandingPage() {
  return (
    <Layout>
      <LocationSearch />
      <Hero />
      <CallToAction />
    </Layout>
  );
}

// ===================
//  Styled Components
// ===================

// ------------------------------
// Landing Page Styled-Components

// Page Layout
const Layout = styled.main`
  width: 100vw;
  max-width: 1200px;
  height: 100vh;
  display: grid;
  grid-template-rows: 250px 1fr 200px;
  /* flex-direction: column; */
  overflow-x: hidden;
  overflow-y: hidden;
  /* margin: 0 auto; */
`;

// ----------------------
// CTA Styled-Components

export default LandingPage;
