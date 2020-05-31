import React, { useReducer } from "react";
import {
  Title,
  BorderedContainer,
  InnerTitle,
  Grid,
} from "./components/styledComponents";

// ----------------------
// Personal Details Container
//-----------------------

export default function PersonalDetails() {
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
  // initialize reducer with state: 'idle', items, and openID: null
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
  function handleTextInputClick(state, id) {
    if (state === "idle") {
      send({ type: "editing", payload: { id } });
    } else if (state === "editing") {
      // TODO: do we need this?
    }
  }
  function handleEditClick(text, id) {
    // if 'idle' change state to 'editing'
    if (data.state === "idle") send({ type: "editing", payload: { id } });
    // only save if 'editing' and openID is equal to id
    if (data.state === "editing" && text.length > 0 && data.openId === id) {
      send({ type: "save", payload: { id, text } });
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
              justifySelf: "flex-start",
            }}
          >
            {label}
          </div>
          {data.state === "editing" && data.openId === id ? (
            <Input text={text} send={send} id={id} />
          ) : (
            <div
              onClick={(_) => handleTextInputClick(data.state, id)}
              style={inputDetailStyles.shared}
            >
              {text}
            </div>
          )}
          <div onClick={(_) => handleEditClick(text, id)}>
            {data.state === "editing" && data.openId === id ? "Save" : "Edit"}
          </div>
        </InputDetail>
      ))}
    </div>
  );
}

function InputDetail({ children }) {
  return <Grid>{children}</Grid>;
}

// ---------------------
//  Input List Reducer
// state can only be in two states --> 'idle' and 'editing'
// inside the states of 'editing and 'idle' are specific actions.  Example 'save' or 'update'

function inputReducer(data, action) {
  switch (data.state) {
    case "editing":
      switch (action.type) {
        case "save":
          return {
            ...data,
            state: "idle",
            openId: null,
            items: data.items.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, text: action.payload.text };
              }
              return item;
            }),
          };
        case "update":
          return {
            ...data,
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
function Input({ text, send, id }) {
  return (
    <input
      autoFocus
      style={{
        ...inputDetailStyles.shared,
        ...inputDetailStyles.textInput,
      }}
      value={text}
      onChange={(e) =>
        send({ type: "update", payload: { id, text: e.target.value } })
      }
    />
  );
}

// ======================
//       Styling
// ======================

const inputDetailStyles = {
  shared: {
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "23px",
    justifySelf: "flex-start",
    padding: "1em 1.2em",
  },
  textInput: {
    border: "none",
    background: "#D0D3E5",
    fontFamily: "inherit",
    borderRadius: "4px",
  },
};
