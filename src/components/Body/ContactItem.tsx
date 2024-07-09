import React from 'react';
import { MdDone, MdDoneAll } from 'react-icons/md'; // Importing check icons

interface ContactItemProps {
  picture: string;
  name: string;
  time: string;
  message: string;
  status: 'received' | 'read'; // Explicitly define the type for status
}

const ContactItem: React.FC<ContactItemProps> = ({ picture, name, time, message, status }) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <img
        src={picture}
        alt={name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <div className="flex items-center">
          {status === 'received' && <MdDone className="text-gray-500 mr-1" />} {/* One tick */}
          {status === 'read' && <MdDoneAll className="text-blue-500 mr-1" />} {/* Two ticks in blue */}
          <p className="text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;



