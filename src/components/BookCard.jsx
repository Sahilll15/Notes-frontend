import React from "react";
import "./rhome.css";
import { NavLink } from "react-router-dom";
import ADSA from "./images/ADSA.png";
import DEVEOPS from "./images/DEVEOPS.png"
import SE from './images/SE.png'
import CNS from './images/cns.jpg'

import IP from './images/IP.png'


const BookCard = ({ note }) => {
  return (
    <div className="flex flex-row md:flex-row sm:flex-row flex-wrap ml-4 lg:ml-4">
      <div className="post-card mx-2 mt-6">
        <div className="avatar"></div>
        <div className="flex ">
        <span className="title text-white mr-2">{note.name}</span>
          <span className="mt-2" >Subject:{note.subject || "No sub"}</span>
        </div>
       
        <span className="datetime">{note.desc || "No Desc"}</span>
        
        <div className="image-preview">
      
          {note.subject === "DEVEOPS" ? (
            <img src={DEVEOPS} alt="" />
          ) : note.subject === "SE" ? (
            <img src={SE} alt="" />
          ) : note.subject === "CNS" ? (
            <img src={CNS} alt="" />
          ) : note.subject === "IP" ? (
            <img src={IP} alt="" />
          ) : (
            <img src={ADSA} alt="" />
          )}
        </div>
        <div className="comment-like">
          <span>
            <i className="fa-regular fa-heart fa-beat fa-xl mx-2"></i> {
              note?.likes?.length || 0
            }
          </span>
       
          <span>
            <i className="fa-regular fa-comment fa-xl mx-2"></i> 4
          </span>
          <span>
          <NavLink to={`/nviewer/${note._id}`}>
          <button 
        className="border border-black px-4 py-1 rounded-lg bg-white text-black hover:bg-black hover:text-white hover:border-white">
          BUY
        </button>
          </NavLink>
         
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
