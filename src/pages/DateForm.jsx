import React, { useEffect, useState } from "react";
import { useNote } from "../context/notesContext";
import { useDispatch, useSelector } from "react-redux";
import { getFormData, addNote } from "../redux/notes/noteActions";
import { getNotes } from "../redux/notes/noteActions";
import { toast } from "react-toastify";
import Alternates from "../components/Layout/MainLayout"

const NotesForm = () => {
  const dispatch = useDispatch();
  const AddNoteFormData = useSelector((state) => state?.note?.formdata);
  const branches = useSelector((state) => state?.note?.branches);
  const subjects = useSelector((state) => state?.note?.subjects);
  const noteAddLoading = useSelector((state) => state?.note?.noteLoading);

  const module = [1, 2, 3, 4, 5, 6];
  const type = ["Assignment", "Notes", "Question Paper", "Syllabus", "Other"];
  const [formdata, setFormdata] = useState({
    name: "",
    subject: "",
    module: "",
    type: "",
    desc: "",
    branch: "",
    file: null,
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
  const maxDescLength = 20;

  const handleDescChange = (e) => {
    if (e.target.value.length <= maxDescLength) {
      onChange(e);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    
    if (formdata.name.length < 10) {
      toast.error("Name must be at least 10 characters long");
      return;
    }
    if (formdata.desc.length < 10) {
      toast.error("Description must be at least 10 characters long");
      return;
    }
  
    if (!formdata.subject) {
      toast.error("Please select a subject");
      return;
    }
  
    if (!formdata.module) {
      toast.error("Please select a module");
      return;
    }
  
    if (!formdata.type) {
      toast.error("Please select a type");
      return;
    }
  
    if (!formdata.file) {
      toast.error("Please upload a file");
      return;
    }
  
    await dispatch(addNote(formdata));
    await dispatch(getNotes());
    console.log(formdata);
  };
  
  

  useEffect(() => {
    dispatch(getFormData());
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <Alternates>
    <div className="relative min-h-screen flex  items-center justify-center  py-12 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
      <div className="absolute g w-full p-10 bg-white  z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Add Reminder and important Dates!
          </h2>
        </div>
        <form className="mt-8 space-y-3" onSubmit={handlesubmit}>
          
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Subject
              <select
                className="text-base w-3/4 p-2 ml-12 border-x border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                value={formdata.subject}
                onChange={onChange}
                name="subject"
                required
              >
                <option value="">Select Subject</option>
                {subjects?.map((data, index) => (
                  <option key={index} value={data._id}>
                    {data.name}
                  </option>
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
                required
              >
                <option value="">Select Module</option>
                {module.map((data, index) => (
                  <option key={index} value={data}>
                    {data}
                  </option>
                ))}
              </select>
              <p>Module not compulsory but if available then good</p>
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
                required
              >
                <option value="">Select Type</option>
                {type.map((data, index) => (
                  <option key={index} value={data}>
                    {data}
                  </option>
                ))}
              </select>
              <p>Typw will be Exam date , assigment , experiment , practical exam</p>
            </label>
          </div>

          {/* <div className="grid grid-cols-1 space-y-2">
  <label className="text-sm font-bold text-gray-500 tracking-wide">
    Branch
    <select
  className="text-base w-3/4 p-2 ml-12 border-x border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
  value={formdata.branch}
  onChange={onChange}
  name="branch"
  required
>
  <option value="">Select Branch</option>
  {branches?.map((data, index) => (
    <option key={index} value={data.name}>{data.name}</option>
  ))}



</select>

  </label>
</div> */}

          <div className="  w-full space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Desc:
              <input
                type="text"
                className="text-base w-3/4 p-2 ml-16 border-x border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                value={formdata.desc}
                onChange={handleDescChange}
                name="desc"
                maxLength={maxDescLength}
                required
              />
              <span className="text-gray-400 text-sm">
                {formdata.desc.length}/{maxDescLength}
              </span>
            </label>
            
          </div>

          
        
          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              {noteAddLoading ? "Loading..." : "Add Reminder"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </Alternates>
  );
};

export default NotesForm;