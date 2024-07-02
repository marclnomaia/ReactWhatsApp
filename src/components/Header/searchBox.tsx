import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox: React.FC = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg border border-gray-300 px-3 py-2 mx-[1px]">
      <FaSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-100 focus:outline-none w-full"
      />
    </div>
  );
};

export default SearchBox;


