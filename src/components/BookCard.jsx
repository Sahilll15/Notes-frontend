import React from "react";
import "./rhome.css";

import img from "./images/ADSA.png";



const BookCard = (props) => {
  return (
    <div className="flex flex-row md:flex-row sm:flex-row flex-wrap ml-4 lg:ml-4">
      <div className="post-card mx-2 mt-6">
        <div className="avatar"></div>
        <div className="title">{props.title}</div>
        <span className="datetime">{props.type}</span>
        <div className="image-preview">
          <img src={props.img} alt="" />
        </div>
        <div className="comment-like">
          <span>
            
            <i className="fa-regular fa-heart fa-beat fa-xl mx-2"></i>
            10
          </span>
          <span>
          <i className="fa-regular fa-comment fa-xl mx-2"></i>
            4
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
