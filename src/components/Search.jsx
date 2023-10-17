import React, { useState } from "react";

const Search = ({ search, setSearch }) => {

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };


  
  return (
    <div>
      <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div class="md:flex">
          <div class="w-full p-3">
            <div class="relative">
              <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
              <input
                type=""
                id="default-search"
                placeholder="Search Notes.."
                autoComplete="off"
                onChange={(e) => setSearch(e.target.value)}
                class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none border-2 border-gray-400 hover:cursor-pointer"
                name=""
              />

              <button class="absolute top-4 right-16 border-l pl-4"
               type="submit">
                <i class="fa fa-paper-plane text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
              </button>

               <span className="absolute top-4 right-5 border-l pl-4">
                <i
                  className="fa fa-filter text-gray-500 hover:text-green-500 hover:cursor-pointer"
                  onClick={openFilterModal}
                ></i>
              </span>
              
            </div>
          </div>
        </div>
      </div>

      {isFilterModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

              <div className="mb-4">
                  <label
                    htmlFor="module"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    BRANCH
                  </label>
                  <select
                    id="module"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  >
                    <option value="">Select Branch</option>
                    <option value="module1">b 1</option>
                    <option value="module2">b 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="module"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="module"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  >
                    <option value="">Select branch to load subjects </option>
                    <option value="module1">sub 1</option>
                    <option value="module2">sub 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Module
                  </label>
                  <select
                    id="subject"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  >
                    <option value="">Select Module</option>
                    <option value="subject1">mod 1</option>
                    <option value="subject2">mod 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Type
                  </label>
                  <select
                    id="type"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  >
                    <option value="">Select Type</option>
                    <option value="type1">Type ass</option>
                    <option value="type2">Type exp</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="mt-3 text-center sm:mt-0">
                  <button
                    onClick={closeFilterModal}
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Search;
