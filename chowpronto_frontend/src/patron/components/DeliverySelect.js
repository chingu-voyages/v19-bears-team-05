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
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    setPostcode(
      state.formState.postcode.length > 0
        ? state.formState.postcode
        : state.userDetails.postcode
    );
    setAddress(
      state.formState.address.length > 0
        ? state.formState.address
        : state.userDetails.address
    );
  }, [
    state.formState.address,
    state.formState.postcode,
    state.userDetails.address,
    state.userDetails.postcode,
  ]);
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
        <TextDisplayBox
          title="delivery postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          {...props}
        ></TextDisplayBox>
        <TextDisplayBox
          title="delivery address lookup"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
            style={{ margin: "5px" }}
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
              style={{ margin: "5px" }}
            />
          ))}
          <ChowButton
            secondary
            title="later"
            onClick={() =>
              setDisplayStart(new Date(displayStart.getTime() + 1000 * 60 * 10))
            }
            style={{ margin: "5px" }}
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
        <div
          className="confirmation-buttons"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "20px",
          }}
        >
          <Link to={(history) => history.back}>
            <ChowButton
              secondary
              title="cancel"
              style={{ margin: "5px", padding: "15px" }}
            />
          </Link>
          <Link
            onClick={() => {
              dispatch({ type: "set_delivery_date", date: deliveryDate });
              dispatch({
                type: "update_form_state",
                field: "address",
                value: address,
              });
              dispatch({
                type: "update_form_state",
                field: "postcode",
                value: postcode,
              });
            }}
            to={(history) => history.back}
          >
            <ChowButton
              primary
              title="change"
              style={{ margin: "5px", fontWeight: 700, padding: "15px" }}
            />
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default DeliverySelect;
