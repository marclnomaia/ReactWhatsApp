import React from 'react';
//import Contacts from './components/Body/Contacts';
//import Workspace from './components/Body/Workspace';
//import Wspacetext from './components/Body/Wspacetext';
//import FixedNavBar from './components/Header/FixedNavBar';
import FlexNavBar from './components/Header/FlexNavBar';
import SearchBox from './components/Header/searchBox';
import ContactsMenu from './components/Body/ContactsMenu';
import ContactItem from './components/Body/ContactItem';
//import FlexFooter from './components/Footer/FlexFooter';
//import FixedFooter from './components/Footer/FixedFooter';

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="grid grid-rows-[auto,1fr,auto] grid-cols-4 h-full">
        {/*<div className="col-span-4">
          <FixedNavBar />
        </div>*/}

        {/* Main content area */}
         
         {/*<div className="col-span-2 bg-white">
          <Workspace />
          <Wspacetext />
        </div>*/}
        <div className="col-span-1 bg-white">
          <FlexNavBar />
        
         {/* SearchBox: occupies 4 columns out of 12 */}
         
          <div className="col-span-1 mt-2 mx-[4px]">
            <SearchBox />
          </div>
          <div className="col-span-1">
            <ContactsMenu />
          </div>
          <div className="col-span-1 bg-white">
          <ContactItem picture={''} name={''} time={''} message={''} />
        </div>
        </div>

        {/* Footer */}
         {/*<div className="col-span-4">
          <FixedFooter />
          <FlexFooter />
        </div>*/}
      </div>
    </div>
  );
};

export default App;
