import React, { useEffect, useState } from "react";
import Alternates from "../components/Layout/Setting";
import { useSelector, useDispatch } from 'react-redux'
import { getLogedinUser } from "../redux/auth/authActions";
import { editProfile } from "../redux/user/userActions";
const Setting = () => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  //get the user from the redux
  const user = useSelector((state) => state.user.user)

  const [profile, setProfile] = useState(user?.profile);
  const [formData, setFormData] = useState({
    username: user?.username,
    email: user?.email || "No Email",
    bio: user?.Bio || "No Bio",
    github: user?.githubUsername || "No GitHub",
    department: user?.Department || "Add Department",
  });
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
  ];

  const toggleEdit = (e) => {
    e.preventDefault();
    setIsEditable(!isEditable);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePictureChange = (e) => {
    setProfile(e.target.files[0]);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(editProfile(formData))

  };

  useEffect(() => {
    dispatch(getLogedinUser())
  }, [])


  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <Alternates>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-4">
              <div className="mt-5">
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-10">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className=" h-64 w-full object-cover md:w-48 "
                        src={profile}
                        alt="Profile"
                      />
                    </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {user?.username}
                      </div>
                      <div className="mt-4">
                        <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
                          Change Picture
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handlePictureChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-16 p-8">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Skills:
                    </label>
                    <div className="flex flex-wrap">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full m-1"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 p-4">
              <div className="mt-5">
                <div className="w-full">
                  <div className="mt-5">
                    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-10 p-8">
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Username:
                        </label>
                        {isEditable ? (
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="username"
                            name="username"
                            value={formData.username}
                            onChange={onChange}
                          />
                        ) : (
                          <div className="border p-2 rounded bg-gray-100">
                            {formData.username}
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Email:
                        </label>
                        {isEditable ? (
                          <input
                            type="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                          />
                        ) : (
                          <div className="border p-2 rounded bg-gray-100">
                            {formData.email}
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Bio:
                        </label>
                        {isEditable ? (
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Bio"
                            name="bio"
                            value={formData.bio}
                            onChange={onChange}
                          />
                        ) : (
                          <div className="border p-2 rounded bg-gray-100">
                            {formData.bio}
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          GitHub Username <br/> (for example : adityashah7867):
                        </label>
                        {isEditable ? (
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="GitHub Username"
                            name="github"
                            value={formData.github}
                            onChange={onChange}
                          />
                        ) : (
                          <div className="border p-2 rounded bg-gray-100">
                            {formData.github}
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Department:
                        </label>
                        {isEditable ? (
                          <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="department"

                            onChange={onChange}
                            value={formData.department}
                          >
                            <option value="IT">IT</option>
                            <option value="COMPS">COMPS</option>
                            <option value="CSE">CSE</option>
                            <option value="AIDS">AIDS</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="MECH">MECH</option>
                            <option value="EXTC">EXTC</option>
                          </select>
                        ) : (
                          <div className="border p-2 rounded bg-gray-100">
                            {formData.department}
                          </div>
                        )}
                      </div>
                      <div className="mt-6 text-center">
                        {isEditable ? (
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                            type="submit"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                            onClick={toggleEdit}
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Alternates>
  );
};

export default Setting;
