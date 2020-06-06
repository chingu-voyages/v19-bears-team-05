import styled from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #22222222;
  top: 0;
  /* backdrop-filter: blur(10px); */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  > * {
    padding: ${({ theme }) => theme.pd600};
    padding-top: ${({ theme }) => theme.pd900};
    background-color: white;
    box-shadow: ${({ theme }) => theme.sh400};
    border-radius: ${({ theme }) => theme.br100};
    position: relative;
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

export default ModalBackground;
