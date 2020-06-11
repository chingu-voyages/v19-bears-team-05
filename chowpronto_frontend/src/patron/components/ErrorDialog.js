import React from "react";
import styled from "styled-components";
import useError from "../../hooks/useError";
import CloseIcon from "../../shared_components/CloseIcon";

export default function ErrorDialog() {
  const error = useError();
  const currentErrors = error.get;
  return (
    <React.Fragment>
      {currentErrors.length > 0 && (
        <StyledDialog>
          <div style={{ position: "relative" }}>
            <div
              className="close-icon"
              role="button"
              onClick={() => error.pop()}
            >
              <CloseIcon />
            </div>
            <h2>Error:</h2>
            <h4>{currentErrors[0]}</h4>
          </div>
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
    border: ${({ theme }) => theme.bd900};
    padding: ${({ theme }) => theme.pd900};
    background-color: white;
    border-radius: ${({ theme }) => theme.br100};
    z-index: 100;
    box-shadow: ${({ theme }) => theme.sh400};
  }
  .close-icon {
    position: absolute;
    top: ${({ theme }) => theme.pd600};
    right: ${({ theme }) => theme.pd600};
    width: 25px;
    height: 25px;
    display: inline-block;
  }
`;
