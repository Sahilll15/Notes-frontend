import React from "react";
import DashLay from "../components/Layout/Dash";

const Newdashboard = () => {
  return (
    <div>
    <DashLay>
      <div className="flex-col lg:flex lg:flex-row  gap-4 mb-4">
  
        <div class="flex items-center  justify-center lg:w-3/12  w-full h-28 rounded bg-gray-50 dark:bg-gray-800 mt-2 pl-3">
        <h3 class="text-base font-semibold text-gray-900">Rank: 12</h3>
        </div>
  
        <div class="flex items-center  justify-center lg:w-3/12 w-full h-28 rounded bg-gray-50 dark:bg-gray-800 mt-2 pl-3">
        <h3 class="text-base font-semibold text-gray-900">Rank: 12</h3>
        </div>
  
        <div class="flex items-center  justify-center lg:w-3/12 w-full h-28 rounded bg-gray-50 dark:bg-gray-800 mt-2 pl-3">
        <h3 class="text-base font-semibold text-gray-900">Rank: 12</h3>
        </div>
  
        <div class="flex items-center  justify-center lg:w-3/12 w-full h-28 rounded bg-gray-50 dark:bg-gray-800 mt-2 pl-3">
        <h3 class="text-base font-semibold text-gray-900">Rank: 12</h3>
        </div>
  
      </div>
    </DashLay>
  </div>
  );
};

export default Newdashboard;
