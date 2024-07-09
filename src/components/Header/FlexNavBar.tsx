import React, { useState } from 'react';
import { FaUsers, FaEllipsisV } from 'react-icons/fa';
import { HiStatusOnline } from 'react-icons/hi';
import { RiChatNewFill } from 'react-icons/ri';
import { FiCircle } from 'react-icons/fi';
import profileImage from './images/profile.png';

const FlexNavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", !isMenuOpen);
  };

  const handleMouseDown = () => {
    setIsClicked(true);
    console.log("Mouse down");
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    console.log("Mouse up");
  };

  const menuItemStyle = (item: string) => ({
    padding: '8px 16px',
    color: '#333',
    cursor: 'pointer',
    backgroundColor: hoveredItem === item ? '#e0e0e0' : 'transparent',
  });

  return (
    <div className="bg-gray-200 p-2">
      <div className="grid grid-cols-4 h-10 items-center">
        <div className="flex items-center ml-2">
          <img
            src={profileImage}
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="col-span-3 flex justify-end items-center gap-4 pr-2">
          <FiCircle size={24} title="AI Icon" />
          <FaUsers size={24} title="Communities" />
          <HiStatusOnline size={24} title="Status" />
          <RiChatNewFill size={24} title="New Chat" />
          <div
            className="relative inline-block cursor-pointer w-6 h-6"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={toggleMenu}
            title="More Options"
          >
            <FaEllipsisV size={24} />
            {isClicked && (
              <div
                className="absolute top-[2px] left-1/2 w-full h-full bg-gray-500 rounded-full 
                transform -translate-x-1/2 -translate-y-1/2 opacity-50"
              />
            )}
            {isMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg py-2 z-10"
              >
                <div
                  style={menuItemStyle('New group')}
                  onMouseEnter={() => setHoveredItem('New group')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  New group
                </div>
                <div
                  style={menuItemStyle('New Community')}
                  onMouseEnter={() => setHoveredItem('New Community')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  New Community
                </div>
                <div
                  style={menuItemStyle('Archived')}
                  onMouseEnter={() => setHoveredItem('Archived')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Archived
                </div>
                <div
                  style={menuItemStyle('Starred Messages')}
                  onMouseEnter={() => setHoveredItem('Starred Messages')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Starred Messages
                </div>
                <div
                  style={menuItemStyle('Select Chats')}
                  onMouseEnter={() => setHoveredItem('Select Chats')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Select Chats
                </div>
                <div
                  style={menuItemStyle('Settings')}
                  onMouseEnter={() => setHoveredItem('Settings')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Settings
                </div>
                <div
                  style={menuItemStyle('Logout')}
                  onMouseEnter={() => setHoveredItem('Logout')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Logout
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div
                  style={menuItemStyle('Get WhatsApp for Windows')}
                  onMouseEnter={() => setHoveredItem('Get WhatsApp for Windows')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Get WhatsApp for Windows
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexNavBar;


