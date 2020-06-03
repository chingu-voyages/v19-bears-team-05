import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "./ModalBackground";
import CloseIcon from "../../shared_components/CloseIcon";
import TextDisplayBox from "../../shared_components/TextDisplayBox";
import ChowButton from "../../shared_components/ChowButton";
import { MenuContext } from "../../state/MenuContext";
import MONTHS from "../../helpers/months";

const DeliverySelect = (props) => {
  const { state, dispatch } = useContext(MenuContext);
  const [startOffset, setStartOffset] = useState(0);
  const [times, setTimes] = useState([]);
  const [dates, setDates] = useState([]);
  console.log("state", state);
  useEffect(() => {
    let timesArray = new Array(8)
      .fill({})
      .map(
        (val, ind) =>
          new Date(
            state.deliveryDate.getTime() +
              1000 * 60 * 10 * ind +
              1000 * 60 * startOffset
          )
      );
    setTimes(timesArray);
  }, [startOffset]);
  useEffect(() => {
    let datesArray = new Array(5)
      .fill({})
      .map(
        (val, ind) =>
          new Date(state.deliveryDate.getTime() + 1000 * 60 * 60 * 24 * ind)
      );
    setDates(datesArray);
  }, []);
  return (
    <Modal>
      <div>
        <Link to={(history) => history.back}>
          <div className="close-icon">
            <CloseIcon />
          </div>
        </Link>
        <TextDisplayBox title="delivery postcode" value="EX1 1AA" {...props} />
        <TextDisplayBox
          title="delivery address lookup"
          value="1 Longroad Lane"
          {...props}
        />
        <div className="time-select">
          <h3>delivery time</h3>
          <ChowButton
            secondary
            title="earlier"
            onClick={() => setStartOffset(startOffset - 10)}
          />
          {times.map((v, i) => (
            <ChowButton
              secondary
              primary={v.getTime() === state.deliveryDate.getTime()}
              title={`${v.getHours()}:${
                v.getMinutes() === 0 ? "0" : ""
              }${v.getMinutes()}`}
              className="slot"
              // style={{ backgroundColor: "#DCE1FF", margin: "2px" }}
              key={v}
              onClick={() => {
                dispatch({ type: "change_delivery_time", date: v });
              }}
            >
              {v} hello
            </ChowButton>
          ))}
          <ChowButton
            secondary
            title="later"
            onClick={() => setStartOffset(startOffset + 10)}
          />
        </div>
        <div className="date-select">
          <h3>delivery date</h3>
          {dates.map((v, i) => (
            <ChowButton
              secondary
              primary={v.toDateString() === state.deliveryDate.toDateString()}
              title={`${v.getDate()}th ${MONTHS[v.getMonth()]}`}
              className="slot"
              // style={{ backgroundColor: "#DCE1FF", margin: "2px" }}
              key={v}
              onClick={() => {
                dispatch({ type: "change_delivery_date", date: v });
              }}
            >
              {v} hello
            </ChowButton>
          ))}
        </div>
        <ChowButton secondary title="cancel" />
        <ChowButton primary title="change" />
      </div>
    </Modal>
  );
};

export default DeliverySelect;
