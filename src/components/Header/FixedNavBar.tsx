import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';

const FixedNavBar: React.FC<{ selectedContact: any }> = ({ selectedContact }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-gray-200 h-12 z-20 grid grid-cols-7 items-center px-4" style={{ height: '3rem' }}>
      {selectedContact && (
        <div className="col-span-6 flex items-center p-2">
          <img src={selectedContact.picture} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <div className="font-bold">{selectedContact.name}</div>
            <div className="text-sm text-gray-600">Last seen {selectedContact.time}</div>
          </div>
        </div>
      )}
      <div className="col-span-1 flex justify-end items-center p-2">
        <FiSearch className="text-xl mr-4 cursor-pointer" />
        <FaEllipsisV className="text-xl cursor-pointer" onClick={toggleMenu} />
        {showMenu && (
          <div className="absolute top-16 right-0 bg-white shadow-md rounded-md p-2">
            <ul>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Contact Info</li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Select Messages</li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Close Chat</li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Mute Notifications</li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Disappearing Message</li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Clear Chat</li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Delete Chat</li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Report</li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">Block</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FixedNavBar;
