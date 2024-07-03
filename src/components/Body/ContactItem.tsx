import React from 'react';

interface ContactItemProps {
  picture: string;
  name: string;
  time: string;
  message: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ picture, name, time, message }) => {
  return (
    <div className="flex items-start py-2 px-4 hover:bg-gray-100">
      {/* User Picture */}
      <img src={picture} alt={`${name}'s profile`} className="w-12 h-12 rounded-full" />
      <div className="flex-1 ml-4 border-b border-gray-300">
        <div className="flex justify-between items-center">
          {/* User Name */}
          <span className="font-medium">{name}</span>
          {/* Time */}
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <div className="flex items-center">
          {/* Double Tick Icon */}
          <svg
            className="w-4 h-4 text-gray-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M13.59 3.41a1 1 0 0 1 1.42 0l5.3 5.3a1 1 0 1 1-1.42 1.42L14 5.83l-5.29 5.3a1 1 0 0 1-1.42-1.42l5.3-5.3zM7.59 7.41a1 1 0 0 1 1.42 0l5.3 5.3a1 1 0 1 1-1.42 1.42L8 9.83l-5.29 5.3a1 1 0 0 1-1.42-1.42l5.3-5.3z" />
          </svg>
          {/* Message Text */}
          <span className="text-sm text-gray-600">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;