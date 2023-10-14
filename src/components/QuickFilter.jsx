import React from "react";

const QuickFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <div className="w-full overflow-x-auto mt-2" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex text-xs md:text-base lg:justify-center lg:text-base">
          <button
            className={`border mx-2 py-2 px-4 rounded-lg ${filter === 'ALL' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setFilter('ALL')}
          >
            All
          </button>
          <button
            className={`border mx-2 py-2 px-4 rounded-lg ${filter === 'CNS' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setFilter('CNS')}
          >
            CNS
          </button>
          <button
            className={`border mx-2 py-2 px-4 rounded-lg ${filter === 'EEB' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setFilter('EEB')}
          >
            EEB
          </button>
          <button
            className={`border mx-2 py-2 px-4 rounded-lg ${filter === 'IP' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setFilter('IP')}
          >
            IP
          </button>
          <button
            className={`border mx-2 py-2 px-4 rounded-lg ${filter === 'SE' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setFilter('SE')}
          >
            SE
          </button>
          <button
            className={`border mx-2 py-2 px-4 rounded-lg ${filter === 'ADSA' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setFilter('ADSA')}
          >
            ADSA
          </button>
          <button
            className={`border mx-2 py-2 px-4 rounded-lg ${filter === 'ADEVEOPS' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setFilter('ADEVEOPS')}
          >
            ADEVEOPS
          </button>
          <button
            className={`border mx-2 py-2 px-4 rounded-lg ${filter === 'DEVEOPS' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setFilter('DEVEOPS')}
          >
            DEVEOPS
          </button>
        </div>
        <br />
      </div>
      <div className="flex my-4">
        <div className="flex justify-around gap-4 mb-2 w-full">
          <p
            className={`border w-full text-center rounded-lg py-2 px-4 ${filter === 'Liked' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}
            onClick={() => setFilter('Liked')}
          >
            Liked
          </p>
          <p
            className={`border w-full text-center rounded-lg py-2 px-4 ${filter === 'BookMarked' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}
            onClick={() => setFilter('BookMarked')}
          >
            BookMarked
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickFilter;
