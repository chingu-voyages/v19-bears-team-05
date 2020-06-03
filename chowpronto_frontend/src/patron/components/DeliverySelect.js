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
  const [deliveryDate, setDeliveryDate] = useState(
    new Date(state.deliveryDate.getTime())
  );
  const [displayStart, setDisplayStart] = useState(
    new Date(state.deliveryDate.getTime())
  );
  const [times, setTimes] = useState([]);
  const [dates, setDates] = useState([]);
  useEffect(() => {
    let timesArray = new Array(8)
      .fill({})
      .map(
        (val, ind) => new Date(displayStart.getTime() + 1000 * 60 * 10 * ind)
      );
    setTimes(timesArray);
  }, [displayStart]);
  useEffect(() => {
    let datesArray = new Array(5)
      .fill({})
      .map(
        (val, ind) =>
          new Date(state.deliveryDate.getTime() + 1000 * 60 * 60 * 24 * ind)
      );
    setDates(datesArray);
  }, [state.deliveryDate]);
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
            onClick={() =>
              setDisplayStart(new Date(displayStart.getTime() - 1000 * 60 * 10))
            }
          />
          {times.map((v, i) => (
            <ChowButton
              secondary
              primary={v.getTime() === deliveryDate.getTime()}
              title={`${v.getHours()}:${
                v.getMinutes() === 0 ? "0" : ""
              }${v.getMinutes()}`}
              className="slot"
              key={v}
              onClick={() => {
                setDeliveryDate(new Date(v.getTime()));
              }}
            />
          ))}
          <ChowButton
            secondary
            title="later"
            onClick={() =>
              setDisplayStart(new Date(displayStart.getTime() + 1000 * 60 * 10))
            }
          />
        </div>
        <div className="date-select">
          <h3>delivery date</h3>
          {dates.map((v, i) => (
            <ChowButton
              secondary
              primary={v.toDateString() === deliveryDate.toDateString()}
              title={
                i === 0
                  ? "today"
                  : i === 1
                  ? "tomorrow"
                  : `${v.getDate()}th ${MONTHS[v.getMonth()]}`
              }
              className="slot"
              // style={{ backgroundColor: "#DCE1FF", margin: "2px" }}
              key={v}
              onClick={() => {
                const newStartDate = new Date(
                  v.getFullYear(),
                  v.getMonth(),
                  v.getDate(),
                  displayStart.getHours(),
                  displayStart.getMinutes()
                );
                setDisplayStart(newStartDate);
                const newDeliveryDate = new Date(
                  v.getFullYear(),
                  v.getMonth(),
                  v.getDate(),
                  deliveryDate.getHours(),
                  deliveryDate.getMinutes()
                );
                setDeliveryDate(newDeliveryDate);
              }}
              style={{ width: "100px", margin: "5px" }}
            />
          ))}
        </div>
        <ChowButton secondary title="cancel" />

        <ChowButton
          primary
          title="change"
          onClick={() =>
            dispatch({ type: "set_delivery_date", date: deliveryDate })
          }
        />
      </div>
    </Modal>
  );
};

export default DeliverySelect;
