import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ADSA from "./images/ADSA.png";
import DEVEOPS from "./images/DEVEOPS.png";
import SE from './images/SE.png';
import CNS from './images/cns.jpg';
import IP from './images/IP.png';
import { useSelector ,useDispatch} from "react-redux";
import { buyNote,getNotes } from "../redux/notes/noteActions";
import { get } from "mongoose";
import { getLogedinUser } from "../redux/auth/authActions";




const BookCard = ({ note }) => {
  const dispatch=useDispatch();
  const currentuser=useSelector((state)=>state?.user?.user);
  const buyNotesLoading=useSelector((state)=>state.note.noteLoading)

  const handleBuyNote=async(noteId)=>{
    await dispatch(buyNote(noteId));
    await dispatch(getNotes());
  }

  useEffect(()=>{
    dispatch(getLogedinUser())
  },[dispatch])

  return (
    <div className="flex flex-row md:flex-row sm:flex-row flex-wrap ml-4 lg:ml-4">
  <div className="post-card mx-2 mt-6 w-80 bg-lightgray dark:bg-white  rounded-lg border border-gray-600">
    <div className="flex items-center">
      <span className="title text-white mr-2 text-2xl font-semibold">
        {note.name}
      </span>
    </div>
    <p className="text-gray-500 text-lg">
      {note.desc || "No Desc"}
    </p>
    {/* <span className="text-gray-400">by {note.author.username}</span> */}
    <div className="image-preview min-h-48 w-full rounded-full mb-4">
      {note.subject === "DEVEOPS" ? (
        <img src={DEVEOPS} alt="" className="w-full h-full rounded-sm" />
      ) : note.subject === "SE" ? (
        <img src={SE} alt="" className="w-full h-full rounded-xl" />
      ) : note.subject === "CNS" ? (
        <img src={CNS} alt="" className="w-full h-full rounded-xl" />
      ) : note.subject === "IP" ? (
        <img src={IP} alt="" className="w-full h-full rounded-xl" />
      ) : (
        <img src={ADSA} alt="" className="w-full h-full rounded-xl" />
      )}
    </div>
    <div className="flex justify-between items-center">
      <span className="datetime text-gray-400">
        {new Date(note.uploadedAt).toLocaleDateString()}
      </span>

    </div>


  

    <div className="comment-like flex justify-around items-center p-2">
    <span className="cursor-pointer h-40 w-50 p-3 flex items-center justify-center font-bold rounded-2xl bg-transparent hover:bg-purple-300 transition duration-150">
            <i className="fa-regular fa-heart fa-xl mx-2"></i>
            {note?.likes?.length || 0}
          </span>
          <span className="cursor-pointer h-40 w-50 p-3 flex items-center justify-center font-bold rounded-2xl bg-transparent hover:bg-purple-300 transition duration-150">
            <i className="fa-regular fa-comment fa-xl mx-2"></i>4
          </span>
         

      {note.purchased.includes(currentuser.id) ? (
         <NavLink to={`/nviewer/${note._id}`}>
        <button className="border border-black px-4 py-1 rounded-lg bg-white text-black hover:bg-black hover:text-white hover:border-white">
          View
        </button>
        </NavLink>
      ) : (
       
          <button className="border border-black px-4 py-1 rounded-lg bg-white text-black hover:bg-black hover:text-white hover:border-white" onClick={()=>{
            handleBuyNote(note._id)
          }}>
            {buyNotesLoading ? 'Loading...' : 'Buy'}
          </button>
   
      )}
    </div>
  </div>
</div>

  );
};

export default BookCard;
