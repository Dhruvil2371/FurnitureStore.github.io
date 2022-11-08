import React from "react";
import "./similarItems.css";
import Ysofa from "../photos/Ysofa.png";
import chair from "../photos/chair.png";
import pillow from "../photos/pillow.png";
import table from "../photos/table.png";
import sofa from "../photos/sofa.png";
// import styles from './Main.module.css'

const SimilarItems = (props) => {
  return ( <div className="div-similar">
    <p className="sim-title">
    Comfortable Sofa
    </p>
  <img clasName='sim-image' src={props.image} alt="similar product" />
  
  </div>);
};

export default SimilarItems;
