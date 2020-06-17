import React from "react";
import styled, { css } from "styled-components";

// Local imports
import { Hero } from "./Hero";
import { LocationSearch } from "./LocationSearch";

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

// ----------------------
// CTA Styled-Components

export default LandingPage;
