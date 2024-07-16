import React, { useState } from 'react';
import FlexNavBar from './components/Header/FlexNavBar';
import SearchBox from './components/Header/searchBox';
import ContactsMenu from './components/Body/ContactsMenu';
import ContactsList from './components/Body/ContactsList';
import FixedNavBar from './components/Header/FixedNavBar';
import FixedFooter from './components/Footer/FixedFooter';
import Workspace from './components/Body/Workspace';

const App: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [messages, setMessages] = useState<Array<{ id: number; text: string; time: string; sent: boolean; status: string }>>([]);

  const handleContactClick = (contact: any) => {
    setSelectedContact(contact);
    const initialMessage = {
      id: messages.length + 1,
      text: "Hello, How are you?",
      time: new Date().toLocaleTimeString(),
      sent: false,
      status: 'received',
    };
    setMessages([...messages, initialMessage]);
  };

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: message,
      time: new Date().toLocaleTimeString(),
      sent: true,
      status: 'sent',
    };
    setMessages([...messages, newMessage]);
  };

  
  return (
    <div className="h-screen w-screen bg-gray-100 relative">
      {/* Green background at the top */}
      <div className="bg-green-700 h-20 absolute top-0 left-0 right-0 z-0"></div>
      
      {/* Main content area */}
      <div className="grid grid-cols-12 h-full pt-20 relative z-10">
        <div className="col-span-1"></div>
        <div className="col-span-3 relative">
          {/* FlexNavBar */}
          <div className="absolute top-0 w-full z-20">
            <FlexNavBar />
          </div>

          {/* Grid container for SearchBox and ContactsMenu */}
          <div className="mt-16 mx-0 bg-white p-2 grid grid-rows-auto gap-2">
            {/* SearchBox */}
            <div className="h-10 ">
              <SearchBox />
            </div>
            {/* ContactsMenu */}
            <div>
              <ContactsMenu />
            </div>
          </div>
          {/* ContactsList */}
          <div className="mt-0 mx-0 bg-white">
            <ContactsList onContactClick={handleContactClick} />
          </div>
        </div>
        
        <div className="col-span-8 relative h-full">
          {/* FixedNavBar */}
          <div className="absolute top-0 w-full z-20">
            <FixedNavBar selectedContact={selectedContact} />
          </div>

          {/* Workspace */}
          <div className="absolute top-20 bottom-16 w-full z-10">
            <Workspace selectedContact={selectedContact} messages={messages} />
          </div>

          {/* FixedFooter */}
          {selectedContact && (
            <div className="absolute bottom-0 w-full z-20">
              <FixedFooter onSendMessage={handleSendMessage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

