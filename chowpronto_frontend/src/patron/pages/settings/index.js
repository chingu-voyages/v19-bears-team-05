import React from "react";
import styled from "styled-components";
import PersonalDetails from "./PersonalDetails";
import PreviousOrders from "./PreviousOrders";

// ----------------------
// The settings page
//-----------------------
function Settings() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container>
        <PersonalDetails />
        <PreviousOrders />
      </Container>
    </main>
  );
}

// ======================
//   Styled Components
// ======================

// ---------------
// Settings Page

const Container = styled.div`
  width: 668px;
`;

// ---------------
// Personal Details

export default Settings;
