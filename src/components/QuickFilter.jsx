import React from "react";

const QuickFilter = (props) => {

  return (


    <div className="w-full overflow-x-auto mt-1" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
      <div className="flex  text-xs md:text-base lg:justify-center lg:text-base">

        

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          CNS
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
         EEB
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          IP
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          SE
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          ADSA
        </button>

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold p-2 rounded-lg">
          Assigment
        </button>

     

        

        <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Lecture Slides
        </button>

        




      </div>
      <br />
    </div>

  );
};

export default QuickFilter;
