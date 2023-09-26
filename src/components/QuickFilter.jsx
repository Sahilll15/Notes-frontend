import React from "react";

const QuickFilter = (props) => {
    
  return (

    // style = {{width: "1300px", whiteSpace: "nowrap", overflowX : "scroll" }}
    
    <div className="w-full overflow-x-auto mt-1" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
  <div className="flex text-xs md:text-base lg:text-base">

  <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
      Assigment
  </button>

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
      Experiment
    </button>

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
      PYQ
    </button> 

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
      Lecture Slides
    </button> 

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
      Reference Book
    </button> 

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
      Notes
    </button> 

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
      Subject-1
    </button>

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
      Subject-2
    </button>

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
    Subject-3
    </button>

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
    Subject-4
    </button>

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
    Subject-5
    </button>

    <button className="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
    Subject-6
    </button>

    

    
  </div>
  <br/>
</div>

  );
};

export default QuickFilter;
