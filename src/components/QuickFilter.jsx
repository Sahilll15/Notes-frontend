import React from "react";

const QuickFilter = (props) => {

  return (
    <div>

<div className="flex my-5">
            <div className="flex justify-around gap-4 mb-2 w-full">
            <p
                className="border border-gray-300 bg-gray-100 w-full text-center rounded-lg p-2 hover:cursor-pointer text-black "
                 
               
              >
                For You
              </p>
              
              <p
                className="border border-gray-300 bg-gray-100 w-full text-center rounded-lg p-2 hover:cursor-pointer text-black    "          
              >
                Following
              </p>
              

            </div>
          </div>

    <div className="w-full overflow-x-auto mt-1" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
      <div className="flex text-xs md:text-base lg:justify-center lg:text-base">

      <button className="border mx-2 hover:bg-gray-300 bg-black text-white hover:text-black font-bold py-2 px-4 rounded-lg">
         All
        </button>
        <button className="border mx-2 bg-gray-300 hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-lg">
         CNS
        </button>

        <button className="border mx-2 bg-gray-300 hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-lg">
         EEB
        </button>

        <button className="border mx-2 bg-gray-300 hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-lg">
         EEB
        </button>
        <button className="border mx-2 bg-gray-300 hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-lg">
         EEB
        </button>
        <button className="border mx-2 bg-gray-300 hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-lg">
         EEB
        </button>
        <button className="border mx-2 bg-gray-300 hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-lg">
         EEB
        </button>
        <button className="border mx-2 bg-gray-300 hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-lg">
         EEB
        </button>
      </div>
      <br />
    </div>
    </div>
  );
};

export default QuickFilter;
