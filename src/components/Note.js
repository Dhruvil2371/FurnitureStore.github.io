import React from "react";
import './note.css'

const Note = (props) => {
    return ( 
        <div className="not">
            <div className="circle">
            <i className="fa fa-shopping-cart"></i>
            </div>
            <div className="inside-wrapper">
              <p>{props.title}</p>
              <p>{props.cont}</p>
            </div>
            </div>
    )
}

export default Note