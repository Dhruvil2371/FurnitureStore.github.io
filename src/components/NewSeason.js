import React from "react";
import "./newseason.css";

const NewSeason = (props) => {
  return (
    <li className="new_li">
      <img className='season-image' src={props.image} alt="stool" />
      <p>Persist Modern Bar Stool</p>
      <p>$149.00</p>
    </li>
  );
};

export default NewSeason;
