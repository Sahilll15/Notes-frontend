import React, { useState } from "react";
import Alternates from "../components/Layout/Setting";
const Setting = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [bio, setBio] = useState("");
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
  ];

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handlePictureChange = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const newProfilePicture = event.target.result;
        // You can now update the profile picture state with the new image
        // For example, setProfilePicture(newProfilePicture);
      };

      reader.readAsDataURL(file);
    };

    input.click();
  };

  return (
    <Alternates>
      <div>
        <div className="flex flex-col md:flex-row">
          {/* Left side - 1/3 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="mt-5">
              <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-10">
                <div className="md:flex">
                 
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src=""
                      alt="Profile"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      John Doe
                    </div>

                  
                    <div className="mt-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={handlePictureChange} 
                      >
                        Change Picture
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto bg-white rounded-xl  overflow-hidden md:max-w-2xl mt-16 p-8">
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
          {/* Right side - 2/3 */}
          <div className="w-full md:w-2/3 p-4">
            <div className="mt-5">
              <div className="w-full ">
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
                          placeholder="Username"
                        />
                      ) : (
                        <div className="border p-2 rounded bg-gray-100">
                          JohnDoe123
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
                        />
                      ) : (
                        <div className="border p-2 rounded bg-gray-100">
                          johndoe@example.com
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Bio:
                      </label>
                      {isEditable ? (
                        <input
                          type="email"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Bio"
                        />
                      ) : (
                        <div className="border p-2 rounded bg-gray-100">
                          BIO
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        GitHub:
                      </label>
                      {isEditable ? (
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="GitHub"
                        />
                      ) : (
                        <div className="border p-2 rounded bg-gray-100">
                          JohnDoeGitHub
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Department:
                      </label>
                      {isEditable ? (
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Department"
                        />
                      ) : (
                        <div className="border p-2 rounded bg-gray-100">IT</div>
                      )}
                    </div>
                    <div className="mt-6 text-center">
                      {isEditable ? (
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                          onClick={toggleEdit}
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
      </div>
    </Alternates>
  );
};

export default Setting;
