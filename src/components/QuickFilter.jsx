import React from "react";

const QuickFilter = (props) => {

  return (
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
  );
};

export default QuickFilter;
