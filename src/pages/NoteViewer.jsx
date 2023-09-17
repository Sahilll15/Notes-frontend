import React, { useEffect } from 'react';
import '../nviewer.css';
import { useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { getSingleNote } from '../redux/notes/noteActions';

const Nviewer=()=> {

  const dispatch=useDispatch();
  const {noteId}=useParams();
  const singlenote=useSelector((state)=>state?.note?.singlenote)
  useEffect(()=>{
    dispatch(getSingleNote(
      noteId
    ))
    console.log(singlenote)
  },[dispatch])

  

    if(!singlenote){
      return <h1>Loading...</h1>
    }


  
  return (
    <>
      <div className="lg:flex md:flex-row" style={{ color: 'white' }}>
        <div className="lg:w-2/3 md:w-full bg-lightgray p-4">
          <iframe
            className="iframe"
            src={singlenote?.file+`#toolbar=0`}
            width="100%"
            height="800"
        
          ></iframe>
        </div>
        <div className="lg:w-1/3 md:w-full bg-darkgray p-4">
          {/* Content for the right part */}
          <div className="second">
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>

            <br />
            <br />
            <br />
            <h1 className="text-2xl font-bold">ADD COMMENTS</h1>
            <br />
            <div className="relative flex h-10 w-full min-w-[200px] max-w-[34rem]">
              <input
                type="email"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                required
              />
              <button
                className="!absolute right-1 top-1 z-10 select-none rounded bg-white-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-white-500/20 transition-all hover:shadow-lg hover:shadow-white-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                SEND
              </button>
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                suggestions
              </label>
            </div>
          </div>
          <br />
          <div className="relative flex h-80 w-full min-w-[200px] max-w-[34rem] rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2">
            Comments appear here
          </div>
        </div>
      </div>

    </>
  );
}

export default Nviewer;
