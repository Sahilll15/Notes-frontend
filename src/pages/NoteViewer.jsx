import React, { useEffect, useState } from 'react';
import '../nviewer.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getSingleNote } from '../redux/notes/noteActions';
import Comments from '../components/Comments';
import Alternates from "../components/Layout/Nviewer"
import { toast } from 'react-toastify';

const Nviewer = () => {
  const user = useSelector((state) => state?.user?.user)
  const [loader,setloader]=useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const singlenote = useSelector((state) => state?.note?.singlenote)

  useEffect(() => {
    const loading =setTimeout(() => {
      setloader(false)
    }, 2000);
    dispatch(getSingleNote(
      noteId
    ))
    console.log(singlenote)
  }, [dispatch])

  if (!singlenote?.purchased?.includes(user?._id)) {  


    navigate('/')
    toast.error('Stop cheap methods and purchase notes JERK!')

  }



  if (loader) {
    return <h1>Loading...</h1>
  }



  return (
    <Alternates >
      <div className="lg:flex md:flex-row -mt-16" style={{ color: 'white' }}>
        <div className="lg:w-2/3 md:w-full bg-lightgray p-4">
          <h1 className="text-3xl font-bold mt-16 text-left">{singlenote?.name} </h1>
          <h3 className="text-3xl font-bold text-left">-by {singlenote?.author?.username}</h3>

          <iframe
            className="iframe mt-10"
            src={singlenote?.file + `#toolbar=0`}
            width="100%"
            height="800"

          ></iframe>
        </div>
        <div className="lg:w-1/3 md:w-full bg-darkgray p-4 mt-10">

          <Comments note={singlenote} />
        </div>
      </div>

    </Alternates>
  );
}

export default Nviewer;
