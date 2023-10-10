import React, { useEffect } from 'react';
import '../nviewer.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getSingleNote } from '../redux/notes/noteActions';
import Comments from '../components/Comments';

const Nviewer = () => {

  const dispatch = useDispatch();
  const { noteId } = useParams();
  const singlenote = useSelector((state) => state?.note?.singlenote)
  useEffect(() => {
    dispatch(getSingleNote(
      noteId
    ))
    console.log(singlenote)
  }, [dispatch])



  if (!singlenote) {
    return <h1>Loading...</h1>
  }



  return (
    <>
      <div className="lg:flex md:flex-row" style={{ color: 'white' }}>
        <div className="lg:w-2/3 md:w-full bg-lightgray p-4">
          <h1 className="text-3xl font-bold mt-10 text-center">{singlenote?.name} </h1>
          <h3 className="text-3xl font-bold text-center">-by {singlenote?.author?.username}</h3>

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

    </>
  );
}

export default Nviewer;
