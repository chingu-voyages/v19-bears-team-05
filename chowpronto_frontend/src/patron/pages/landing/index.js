import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../../../shared_components/Logo";
import { SearchSVG } from "../old_landing/SearchSVG";
import { useContext } from "react";
import { MenuContext } from "../../../state/MenuContext";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function TempLandingPage() {
  const [location, setLocation] = useState("");
  const [loginVisible, setLoginVisible] = useState(false);
  const { state, dispatch } = useContext(MenuContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  function onChange(e) {
    setLocation(e.target.value);
  }
  const { login } = useAuth();
  return (
    <PageContainer>
      <ImgContainer>
        <Img
          src="https://d1ralsognjng37.cloudfront.net/f3e697ff-8ff4-45a4-89f7-90e51dd3bb08.jpeg"
          alt="pizza-image"
        />
      </ImgContainer>
      <StuffContainer>
        <Logo />
        <LandingInput label="search">
          <Button
            onClick={() => {
              dispatch({ type: "set_delivery_postcode", postcode: location });
              history.push({
                pathname: "/menu",
              });
            }}
          >
            <SearchSVG />
            Search
          </Button>
        </LandingInput>
        <div>
          Already Registered?
          <input
            type="checkbox"
            name="registered"
            id="registered"
            checked={loginVisible}
            onChange={() => setLoginVisible(!loginVisible)}
          />
        </div>
        <LoginParent>
          {loginVisible ? (
            <LoginContainer
              action="POST"
              onSubmit={(e) => {
                console.log("Hey Ho");
                e.preventDefault();
                login(formData.email, formData.password);
                history.push({
                  pathname: "/menu",
                });
              }}
            >
              <LandingInput
                label="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <LandingInput
                label="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              >
                <Button type="submit">Login</Button>
              </LandingInput>
            </LoginContainer>
          ) : (
            <StyledList>
              <li>
                Choose the food that <strong>you</strong> want
              </li>
              <li>Signup as a registered user or guest checkout</li>
              <li>Easy payment & quick delivery</li>
            </StyledList>
          )}
        </LoginParent>
      </StuffContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageAnimation = keyframes`
  from {
    transform: scale(1.25,1.25);
    opacity: 1;
  }

  to {
    transform: scale(1.2,1.2);
    opacity: 0.2;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #d9dfe5;
  animation: ${ImageAnimation} 2s;
  animation-fill-mode: forwards;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContainerAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StuffContainer = styled.div`
  z-index: 10;
  background: white;
  padding: ${({ theme }) => theme.pd600};
  border-radius: ${({ theme }) => theme.br100};
  opacity: 0;
  box-shadow: ${({ theme }) => theme.sh400};
  animation: ${ContainerAnimation} 1s 1s;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 40vw;
  height: 50vh;
  min-width: 530px;
  min-height: 500px;
  position: relative;
  @media screen and (max-width: 530px) {
    background: none;
    box-shadow: none;
    min-width: 100%;
    padding: 20px;
  }
`;

function LandingInput(props) {
  return (
    <React.Fragment>
      <InputParentContainer>
        <Input placeholder={props.label} type={props.type} />
        {/* <Label>{props.label}</Label> */}
        {props.children}
      </InputParentContainer>
    </React.Fragment>
  );
}

const InputParentContainer = styled.div`
  border: 2px solid #545e97;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  padding: 10px;
  height: 67px;
  position: relative;
  @media screen and (max-width: 530px) {
    background: white;
    box-shadow: none;
    margin: 20px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 3;
  font-family: inherit;
  text-align: left;
  margin-left: 10px;
`;

function Button(props) {
  console.log("props", props);
  return (
    <StyledButton role="button" type={props.type} {...props}>
      {props.children}
      {props.buttonLegend}
    </StyledButton>
  );
}
const StyledButton = styled.button`
  flex: 1;
  font-weight: 500;
  font-size: 17px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 0.02em;
  background: #3949ab;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
`;

const AnimatedLogin = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ReverseLogin = keyframes`
  0% {
    translate(0,0);
  }
  100% {
    translate(50px, 100px);
  }
`;

const LoginContainer = styled.form`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0;
  justify-content: space-between;
  align-items: stretch;
  animation: ${AnimatedLogin} 0.3s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

const StyledList = styled.ul`
  list-style-type: none;
  position: absolute;
  bottom: 15%;
  opacity: 1;
  animation: ${ReverseLogin} 1s;
  animation-timing-function: ease;
  animation-direction: reverse;
`;

const LoginParent = styled.div`
  height: 30%;
`;
