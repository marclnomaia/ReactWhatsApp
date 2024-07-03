import React from 'react';
import '../../styles.css';

const ContactsMenu = () => {
  return (
    <div className="p-4">
      {/* Menu grid container */}
      <div className="bg-white">
        <div className="grid grid-cols-4 gap-2">
          {/* Wrapper to span all columns */}
          <div className="col-span-4 flex items-center space-x-2">
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
          {/* Grey line */}
          <div className="col-span-4">
            <hr className="border-t-2 border-gray-300 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsMenu;








