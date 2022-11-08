import React from "react";
import styles from './Featured.module.css'
import './Featured.css'

const Featured = (props) => {
    return(<div className='hello'>
        <img className='F-image' src={props.image} alt='Feautered Product'></img>
        <div className="desc">
        <p>{props.title}</p>
        <p>{props.price}</p>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        </div>
    </div>)
}

export default Featured