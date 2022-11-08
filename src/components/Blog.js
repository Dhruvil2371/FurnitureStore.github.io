import React from "react";
import "./blog.css";

const Blog = (props) => {
  return <div className="blog">
    <img src={props.image} alt='blog'></img>
    <h6 className="blog-header">How to Create a Dining Room in Small Spaces</h6>
    <p className="blog-cont">Everyone wants to enjoy a dining room, but not
     everyone has the space to accommodate a…</p>
    <div className="end-content">
        <p>CODAZON UNLIMITED</p>
        <p>MAR 15 2018</p>
    </div>
  </div>;
};

export default Blog;
