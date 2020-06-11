import React from "react";
import styled from "styled-components";
import useError from "../../hooks/useError";

export default function ErrorDialog() {
  const error = useError();
  const currentErrors = error.get;
  return (
    <React.Fragment>
      {currentErrors.length > 0 && (
        <StyledDialog>
          <div>Error:</div>{" "}
        </StyledDialog>
      )}
    </React.Fragment>
  );
}

const StyledDialog = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    border: solid red 2px;
    padding: ${({ theme }) => theme.pd900};
    background-color: white;
    border-radius: ${({ theme }) => theme.br100};
    z-index: 100;
    box-shadow: ${({ theme }) => theme.sh400};
  }
`;
