import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import "./CardUser.css";

const img =
  "https://gravatar.com/avatar/c32369a1f9f68254241bd9fd50fa4497?s=400&d=robohash&r=x";

function CardUser() {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card__avatar">
          <img src={img} alt=""  />
        </div>
        <div className="card__bio">
          <h3 className="card_FirstName">Robin</h3>
          <h3 className="card_LastName">Hood</h3>
          <ToggleSwitch label="Status" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardUser;




