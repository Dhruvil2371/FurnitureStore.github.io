import React from "react";
import './InstaImage.css'

const InstaImage = (props) => {
    return ( <div className="instaimage">
        <img src={props.image} alt='Instagram'></img>
    </div>
    )
}

export default InstaImage