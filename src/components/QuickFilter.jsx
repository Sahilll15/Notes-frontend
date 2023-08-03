import React from "react";

const QuickFilter = (props) => {
    
  return (

    // style = {{width: "1300px", whiteSpace: "nowrap", overflowX : "scroll" }}
    
    <div className="w-full" >
        <center>
    <div>
      <button class="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
        ADSA
      </button>

    <button class="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
        CNS
      </button>

      <button class="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
        DEVOPS
      </button>

      <button class="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
        ADV. DEVOPS
      </button>

      <button class="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
        PCE
      </button>

      <button class="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
        IP
      </button> 
      <button class="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
        SW ENGG.
      </button> 
    
      <button class="border mx-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
        EEB
      </button> 
      
    </div>
    </center>
    </div>
  );
};

export default QuickFilter;
