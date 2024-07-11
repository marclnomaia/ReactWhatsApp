import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';

const FixedNavBar: React.FC<{ selectedContact: any }> = ({ selectedContact }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-gray-200 h-16 z-20 grid grid-cols-7 items-center px-2" style={{ height: '4rem' }}>
      {selectedContact && (
        <>
          <div className="col-span-5 flex items-center p-2">
            <img src={selectedContact.picture} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
            <div>
              <div className="font-bold">{selectedContact.name}</div>
              <div className="text-sm text-gray-600">Last seen {selectedContact.time}</div>
            </div>
          </div>
          <div className="col-span-2 flex justify-end items-center space-x-4">
            <FiSearch className="text-xl cursor-pointer mr-6" />
            <FaEllipsisV className="text-xl cursor-pointer" onClick={toggleMenu} />
            {showMenu && (
              <div className="absolute top-16 right-25 bg-white shadow-md rounded-md p-2">
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
        </>
      )}
    </div>
  );
};

export default FixedNavBar;

