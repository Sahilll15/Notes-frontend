import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard'
import Search from '../components/search'

import { getNotes } from '../redux/notes/noteActions';
import { useDispatch, useSelector } from 'react-redux';
import BookCardSkeletion from '../components/skeletons/BookCardSkeletion';

const Home = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state?.note?.notes)
  const noteLoading=useSelector((state)=>state.note.noteLoading)

  useEffect(() => {
    dispatch(getNotes())
  }, [])

  return (
    <>
      <Navbar />
      <div className=' bg-black dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border border-solid border-gray-800 dark:border-gray-600 h-screen'>
        <div className=' text-white container mx-auto mt-3'>
          <Search /><br />
          <div className='flex flex-wrap justify-center'>
          {
            noteLoading?
            [1,2,3,4,5,6,7,8,9,10].map((n)=>(
              <BookCardSkeletion key={n}/>
            )):
            
            notes?.map((note, index) => (
              <BookCard note={note} key={index} />
            ))
          }
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Home;
