import React from "react";
import Alternates from "../components/Layout/Setting";
import Edit from "../components/Land/edit.png"

const Notification = () => {
  return (
    <Alternates>

      <div className="flex flex-col md:flex-row">
        {/* Left side - 1/3 */}
        <div className="w-full md:w-1/3 p-4 ">
          <div className=" mt-5">
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-sm md:max-w-2xl mt-1  p-6">
              <div className="font-bold text-xl mb-2">Exam/Assignment Title</div>
              <p className="text-gray-700 text-base">
                Description of the exam/assignment goes here.
              </p>
              <p className="text-gray-700 text-base mt-2">
                Due Date: October 31, 2023
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl mt-1   p-6">
              <div className="font-bold text-xl mb-2">Exam/Assignment Title</div>
              <p className="text-gray-700 text-base">
                Description of the exam/assignment goes here.
              </p>
              <p className="text-gray-700 text-base mt-2">
                Due Date: October 31, 2023
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl mt-1 p-6">
              <div className="font-bold text-xl mb-2">Exam/Assignment Title</div>
              <p className="text-gray-700 text-base">
                Description of the exam/assignment goes here.
              </p>
              <p className="text-gray-700 text-base mt-2">
                Due Date: October 31, 2023
              </p>
            </div>


          </div>
        </div>

        {/* Right side - 2/3 */}
        <div className="xl:w-2/4 border-2  mx-auto mt-9">
          <div className="container border-2 bg-white rounded-xl overflow-hidden shadow-lg mx-auto p-4">
            <h1 className="text-3xl mb-4">My To-Do List</h1>
            <div className="flex space-x-2 mb-4">
              <input id="task" className="flex-1 border rounded py-2 px-3" type="text" placeholder="Add a new task..." />
              <button onclick="addTask()" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Add</button>
            </div>
            <ul id="taskList">
              {/* Tasks will be displayed here */}
              <div className="flex items-center justify-between border-b border-gray-300 py-2">
                <div className="flex items-center space-x-2 w-4/5">
                  <input type="checkbox" className="form-checkbox" id="complete" />
                  <span className="ml-2">${'{'}taskText{'}'}</span>
                </div>
                <button onclick="editTask(this)" className="text-white border-2 bg-green-500 border-green-500 p-1 hover:bg-green-600">Edit</button>
                <button onclick="deleteTask(this)" className="text-white border-2 bg-red-500 border-red-500 p-1 ml-1 hover:bg-red-600">Delete</button>
              </div>
              <div className="flex items-center justify-between border-b border-gray-300 py-2">
                <div className="flex items-center space-x-2 w-4/5">
                  <input type="checkbox" className="form-checkbox" id="complete" />
                  <span className="ml-2">${'{'}taskText{'}'}</span>
                </div>
                <button onclick="editTask(this)" className="text-white border-2 bg-green-500 border-green-500 p-1 hover:bg-green-600">Edit</button>
                <button onclick="deleteTask(this)" className="text-white border-2 bg-red-500 border-red-500 p-1 ml-1 hover:bg-red-600">Delete</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Alternates>
  );
};

export default Notification;
