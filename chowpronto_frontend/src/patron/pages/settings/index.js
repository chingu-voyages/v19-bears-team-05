import React, { useState, useReducer } from "react";
import styled from "styled-components";
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
const Container = styled.div`
  width: 668px;
`;

// ----------------------
// Personal Details Container
//-----------------------

function PersonalDetails() {
  const data = [
    { label: "Name", text: "Joe Smith" },
    { label: "Email", text: "joesmith@gmail.com" },
    { label: "Address", text: "Street, City, Country" },
    { label: "Post Code", text: "50000" },
    { label: "Phone", text: "983457131" },
  ];
  return (
    <article>
      <Title>You can change your private data here</Title>
      <BorderedContainer>
        <InnerTitle>Personal Details</InnerTitle>
        <InputList />
      </BorderedContainer>
    </article>
  );
}
function InputList() {
  const [data, send] = useReducer(inputReducer, {
    state: "idle",
    items: [
      { id: 0, label: "Name", text: "Joe Smith" },
      { id: 1, label: "Email", text: "joesmith@gmail.com" },
      { id: 2, label: "Address", text: "Street, City, Country" },
      { id: 3, label: "Post Code", text: "50000" },
      { id: 4, label: "Phone", text: "983457131" },
    ],
    openId: null,
  });
  function actionTest(state, id) {
    if (state === "idle") {
      send({ type: "editing", payload: { id } });
    } else if (state === "editing") {
      console.log("here");
    }
  }
  return (
    <div>
      {data.items.map(({ label, text, id }) => (
        <InputDetail key={`${label}-${id} `}>
          <div
            style={{
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "19px",
              textTransform: "uppercase",
            }}
          >
            {label}
          </div>
          {data.state === "editing" && data.openId === id ? (
            <Input>
              {" "}
              <input
                style={inputDetailStyles}
                value={text}
                onClick={(_) =>
                  send({ type: "save", payload: { text: "change", id } })
                }
              />
            </Input>
          ) : (
            <div
              onClick={(_) => actionTest(data.state, id)}
              style={inputDetailStyles}
            >
              {text}
            </div>
          )}
        </InputDetail>
      ))}
    </div>
  );
}

function InputDetail({ children }) {
  return (
    <Flex>
      {children}
      <div>Edit</div>
    </Flex>
  );
}
function inputReducer(data, action) {
  switch (data.state) {
    case "editing":
      switch (action.type) {
        case "save":
          return {
            ...data,
            state: "idle",
            items: data.items.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, text: action.payload.text };
              }
              return item;
            }),
          };

        default:
          throw new Error(
            `1 State ${data.state}: Error: Invalid action ${data.state}`
          );
      }
    case "idle":
      switch (action.type) {
        case "editing":
          console.log("Editing");
          return { ...data, state: "editing", openId: action.payload.id };
        default:
          throw new Error(
            `2 State ${data.state}: Error: Invalid action ${data.state}`
          );
      }
    default:
      throw new Error(`Error: Invalid State ${data.state}`);
  }
}
function Input({ children }) {
  return <>{children}</>;
}
const inputDetailStyles = {
  fontWeight: "normal",
  fontSize: "20px",
  lineHeight: "23px",
};
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// ----------------------
// Previous Orders Container
//-----------------------

function PreviousOrders() {
  return (
    <article>
      <Title>See your previous orders</Title>
      <BorderedContainer>
        <InnerTitle>Previous Orders</InnerTitle>
      </BorderedContainer>
    </article>
  );
}

const InnerTitle = styled.h2`
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  text-align: left;
  margin: 0;
`;
const BorderedContainer = styled.div`
  border: 1px solid #3949ab;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 2em 2.9em;
`;
const Title = styled.h2`
  color: #2f3249;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;
export default Settings;
