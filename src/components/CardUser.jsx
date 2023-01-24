import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import "./CardUser.css";

const img =
  "https://gravatar.com/avatar/c32369a1f9f68254241bd9fd50fa4497?s=400&d=robohash&r=x";
const postTime = Date();

function CardUser() {
  const [cardContent, setCardContent] = useState({
    firstName: "Robin",
    lastName: "Hood",
    status: true,
  });

  function handleClick() {
      setCardContent({
      firstName: "Robin",
      lastName: "Hood",
      text: "Something text",
      date: postTime,
      status: false,
    });
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="card__avatar">
          <img src={img} alt="" />
        </div>
        <div className="card__bio">
          <h3 className="card_FirstName">{cardContent.firstName}</h3>
          <h3 className="card_LastName">{cardContent.lastName}</h3>
          <p className="card_text">{cardContent.text}</p>
          <span className="card_postTime">{cardContent.date}</span>
          <ToggleSwitch label="Status" isOn={cardContent.status} />
        </div>
        <button onClick={handleClick}>Change Card Content</button>
        <button onClick={refreshPage}>Click to reload!</button>
      </div>
    </React.Fragment>
  );
}

export default CardUser;