import React from "react";
import styled from "styled-components";
import { PageLayout } from "../../components/PageLayout";
import { StyledSidebar } from "../../components/StyledSidebar";
import { StyledPageMain } from "../../components/StyledPageMain";
import ChowButton from "../../../shared_components/ChowButton";
import OrderDetails from "./components/OrderDetails";
import Login from "./components/Login";
import UserDetailsForm from "../../components/UserDetailsForm";

const ConfirmOrderPage = (props) => {
  return (
    <PageLayout>
      <StyledSidebar style={{ flex: 1.5 }}>
        <OrderDetails />
        <Login />
      </StyledSidebar>
      <StyledPageMain>
        <UserDetailsForm />
        <SubmitButton
          title="submit"
          primary
          onClick={() => console.log("Clicked!")}
        />
      </StyledPageMain>
    </PageLayout>
  );
};

const SubmitButton = styled(ChowButton)`
  max-width: 150px;
  align-self: flex-end;
`;

export default ConfirmOrderPage;
