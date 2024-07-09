import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox: React.FC = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg  py-2 mx-4 my-2">
      <FaSearch className="text-gray-500 mr-2 mt-2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-100 focus:outline-none w-full"
      />
    </div>
  );
};

export default SearchBox;




