import React from 'react';
import '../../styles.css';

const ContactsMenu = () => {
  return (
    <div className="p-4 bg-white  col-span-3">
      {/* Menu grid container */}
      <div className="border-gray-300">
        <div className="grid grid-cols-3 gap-2">
          {/* Wrapper to span all columns */}
          <div className="col-span-3 flex items-center space-x-2">
            {/* Menu items */}
            <div className="flex items-center justify-start px-2 py-0.5 border border-gray-300 bg-gray-200 
             rounded-full text-center focus:outline-none" tabIndex={-1}>
              All
            </div>
            <div className="flex items-center justify-start px-2 py-0.5 border border-gray-300 bg-gray-200 
            rounded-full text-center focus:outline-none" tabIndex={-1}>
              Unread
            </div>
            <div className="flex items-center justify-start px-2 py-0.5 border border-gray-300 bg-gray-200 
            rounded-full text-center focus:outline-none" tabIndex={-1}>
              Groups
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsMenu;








