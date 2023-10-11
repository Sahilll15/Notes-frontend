import React from "react";
import Alternates from "../components/Layout/Setting";

const Notification = () => {
  return (
    <Alternates>
      
      <div className="flex flex-col md:flex-row">
        {/* Left side - 1/3 */}
        <div className="w-full md:w-1/3 p-4">
          <div className=" mt-5">
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-1  p-6">
              <div className="font-bold text-xl mb-2">Exam/Assignment Title</div>
              <p className="text-gray-700 text-base">
                Description of the exam/assignment goes here.
              </p>
              <p className="text-gray-700 text-base mt-2">
                Due Date: October 31, 2023
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-1   p-6">
              <div className="font-bold text-xl mb-2">Exam/Assignment Title</div>
              <p className="text-gray-700 text-base">
                Description of the exam/assignment goes here.
              </p>
              <p className="text-gray-700 text-base mt-2">
                Due Date: October 31, 2023
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-1 p-6">
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
        <div className="w-full md:w-2/3 p-4">
          <div className="mt-5">
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-auto mb-8">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">To-Do List</div>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Task 1</li>
                  <li>Task 2</li>
                  <li>Task 3</li>
                  {/* Add more tasks as needed */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Alternates>
  );
};

export default Notification;
