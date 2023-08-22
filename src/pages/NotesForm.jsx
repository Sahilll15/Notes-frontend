import React, { useEffect, useState } from 'react';
import {useNote} from '../context/notesContext'

const NotesForm = () => {


  const {getFormDataAPI,AddNoteFormData,addNote} = useNote();
  const module=[1,2,3,4,5,6]
  const type=[
    "Assignment",
    "Notes",
    "Question Paper",
    "Syllabus",
    "Other"

  ]
  const [formdata, setFormdata] = useState({
    name: '',
    subject: '',
    module: '',
    type: '',
    desc: '',
    branch: '',
    file:null
  });



  const onChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };





  const handlesubmit =async (e) =>{
    e.preventDefault();
    await addNote(formdata);
    console.log(formdata)
 
  }

  useEffect(()=>{
    getFormDataAPI();
   console.log(AddNoteFormData)
  },[])

  if(!AddNoteFormData){
    return <div>Loading...</div>
  }

  
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-no-repeat bg-cover relative items-center">
     
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="sm:max-w-screen-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">Add Notes & Contribute to the Community!!</h2>
       
        </div>
        <form className="mt-8 space-y-3" onSubmit={handlesubmit}>
        <div className="grid grid-cols-1 space-y-2">
  <label className="text-sm font-bold text-gray-500 tracking-wide">
    Name
    <input
      type="text"
      className="text-base w-3/4 p-2 ml-14 border-x border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      value={formdata.name}
    placeholder='Name the note..'
      onChange={onChange}
      name="name"
    />
  </label>
</div>
        <div className="grid grid-cols-1 space-y-2">
  <label className="text-sm font-bold text-gray-500 tracking-wide">
    Subject
    <select
      className="text-base w-3/4 p-2 ml-12 border-x border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      value={formdata.subject}
      onChange={onChange}
      name="subject"
    >
      <option value="">Select Subject</option>
      {AddNoteFormData?.subject?.map((data, index) => (
    <option key={index} value={data.name}>{data.name}</option>
  ))}
  
    
    </select>
  </label>
</div>

<div className="grid grid-cols-1 space-y-2">
  <label className="text-sm font-bold text-gray-500 tracking-wide">
    Module
    <select
      className="text-base w-3/4 p-2 ml-12 border-x border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      value={formdata.module}
      onChange={onChange}
      name="module"
    >
      <option value="">Select Module</option>
      {module.map((data, index) => (
    <option key={index} value={data}>{data}</option>
  ))}
      
    </select>
  </label>
</div>

<div className="grid grid-cols-1 space-y-2">
  <label className="text-sm font-bold text-gray-500 tracking-wide">
    Type
    <select
      className="text-base w-3/4 p-2 ml-16 border-x border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      value={formdata.type}
      onChange={onChange}
      name="type"
    >
      <option value="">Select Type</option>
      {type.map((data, index) => (
    <option key={index} value={data}>{data}</option>
  ))}


      
    </select>
  </label>
</div>

<div className="grid grid-cols-1 space-y-2">
  <label className="text-sm font-bold text-gray-500 tracking-wide">
    Branch
    <select
  className="text-base w-3/4 p-2 ml-12 border-x border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
  value={formdata.branch}
  onChange={onChange}
  name="branch"
>
  <option value="">Select Branch</option>
  {AddNoteFormData?.branches?.map((data, index) => (
    <option key={index} value={data.name}>{data.name}</option>
  ))}
</select>

  </label>
</div>

<div className="grid grid-cols-1 space-y-2">
  <label className="text-sm font-bold text-gray-500 tracking-wide">
    desc
    <input
      type="text"
      className="text-base w-3/4 p-2 ml-16 border-x border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      value={formdata.desc}
      onChange={onChange}
      name="desc"
    />
  </label>
</div>


          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Attach Document
            </label>
            <div className="flex items-center justify-center w-full">
  <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-40 p-10 group text-center bg-gray-100 hover:bg-gray-200 transition-colors">
    <div className="h-full w-full text-center flex flex-col items-center justify-center">
      <div className="flex flex-auto max-h-1 w-2/5 mx-auto -mt-10">
      
      </div>
      {formdata.file ? (
        <div className="text-center p-5">
          <p className="text-xl text-gray-600  font-semibold">File Name:</p>
          <p className="text-gray-800 text-2xl font-bold">{formdata.file.name}</p>
    
        </div>
        
      ) : (
        <label className="pointer-none text-gray-600 pt-7 cursor-pointer">
          <span className="text-sm">Drag and drop</span> files here
          <br /> or{' '}
          <span className="text-blue-600 hover:underline">
            select a file
            <input type="file" name='file' className="hidden" onChange={handleFileChange} />
          </span>{' '}
          from your computer
        </label>
      )}
    </div>
  </label>
</div>


          </div>
          <p className="text-sm text-gray-300">
            <span>File type: doc,pdf,types of images</span>
          </p>
          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotesForm;