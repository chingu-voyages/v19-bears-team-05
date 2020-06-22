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
    <>
      <Layout>
        <LocationSearch />
        <Hero />
        <CallToAction />
        <div className="background-fill" />
      </Layout>
    </>
  );
}

// ===================
//  Styled Components
// ===================

// ------------------------------
// Landing Page Styled-Components

// Page Layout
const Layout = styled.main`
  margin: 0 auto;
  display: grid;
  height: 100vh;
  grid-template-columns: 1;
  grid-template-rows: 350px 1fr 250px;
  .background-fill {
    grid-row: 2/5;
    grid-column: 1;
    background: #f2f5f7;
    height: 100%;
    position: relative;
    z-index: -2;
  }
`;

// ----------------------
// CTA Styled-Components

export default LandingPage;
