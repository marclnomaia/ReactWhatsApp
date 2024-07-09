import React, { useState } from 'react';
//import Contacts from './components/Body/Contacts';
//import Workspace from './components/Body/Workspace';
//import Wspacetext from './components/Body/Wspacetext';
//import FixedNavBar from './components/Header/FixedNavBar';
import FlexNavBar from './components/Header/FlexNavBar';
import SearchBox from './components/Header/searchBox';
import ContactsMenu from './components/Body/ContactsMenu';
import ContactsList from './components/Body/ContactsList';
import FixedNavBar from './components/Header/FixedNavBar';
//import FlexFooter from './components/Footer/FlexFooter';
//import FixedFooter from './components/Footer/FixedFooter';

const App: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<any>(null);

  const handleContactClick = (contact: any) => {
    setSelectedContact(contact);
  };

  return (
    <div className="h-screen w-screen bg-gray-100 relative">
      {/* Green background at the top, spanning full width */}
      <div className="bg-green-700 h-20 absolute top-0 left-0 right-0">
      </div>

      {/* FixedNavBar */}
      <div className="absolute top-10 w-full">
        <div className="grid grid-cols-12">
          <div className="col-start-5 col-span-7">
            <FixedNavBar selectedContact={selectedContact} />
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-12 h-full pt-4">
        <div className="col-span-1"></div>
        <div className="col-span-3 relative">
          {/* FlexNavBar with 20px top margin */}
          <div className="mt-5 mx-1">
            <FlexNavBar />
          </div>

          {/* Grid container for SearchBox and ContactsMenu */}
          <div className="mt-0 mx-1 bg-white p-2 grid grid-rows-auto gap-2">
            {/* SearchBox */}
            <div className="h-10">
              <SearchBox />
            </div>
            
            {/* ContactsMenu */}
            <div>
              <ContactsMenu />
            </div>
          </div>
          
          {/* ContactsList */}
          <div className="mt-0 mx-1 bg-white ">
            <ContactsList onContactClick={handleContactClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
