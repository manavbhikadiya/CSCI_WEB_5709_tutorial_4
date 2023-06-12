import * as React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const ProfileCard = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="profileCard">
        <img src={props.picture} className="imageContainer" alt="" />
        <div className="contentContainer">
            <h6>{props.name}</h6>
            <p>{props.phone}</p>
        </div>
        <div className="balanceContainer">
            <p>Balance {props.balance}</p>
            <NavLink to={`/profileDetail?id=${props.id}`} className="btn btnContainer">View Profile</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
