import React, { useState } from 'react';
import FlexNavBar from './components/Header/FlexNavBar';
import SearchBox from './components/Header/searchBox';
import ContactsMenu from './components/Body/ContactsMenu';
import ContactsList from './components/Body/ContactsList';
import FixedNavBar from './components/Header/FixedNavBar';
import FixedFooter from './components/Footer/FixedFooter';
import Workspace from './components/Body/Workspace';

export type Message = {
  sender: string;
  text: string;
  time: string;
};

type Contact = {
  picture: string;
  name: string;
  time: string;
  message: string;
  status: 'received' | 'read';
};

const App = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    // Fetch messages for the selected contact here
    setMessages([
      { sender: contact.name, text: contact.message, time: contact.time },
      // Add more messages as needed
    ]);
  };

  const handleSendMessage = (message: string) => {
    if (selectedContact) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'You', text: message, time: new Date().toLocaleTimeString() },
      ]);
    }
  };
  
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      {/* Main container */}
      <div className="h-full w-full grid grid-cols-12 relative bg-gray-100" style={{ paddingTop: '10px' }}>
        {/* Green background at the top */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-green-600 z-0"></div>

        <div className="col-span-1"></div>
        
        {/* Sidebar */}
        <div className="col-span-3 border-r border-gray-300 bg-white relative z-10">
          {/* FlexNavBar */}
          <div className="absolute top-0 left-0 w-full z-20 h-20">
            <FlexNavBar />
          </div>

          {/* SearchBox and ContactsMenu */}
          <div className="mt-20 p-2">
            <div className="mb-4">
              <SearchBox />
            </div>
            <div>
              <ContactsMenu />
            </div>
          </div>

          {/* ContactsList */}
          <div className="overflow-y-auto">
            <ContactsList onContactClick={handleContactClick} />
          </div>
        </div>

        {/* Main area */}
        <div className="col-span-7 relative z-10 bg-white">
          {/* FixedNavBar */}
          <div className="absolute top-0 left-0 w-full z-20 h-20">
            <FixedNavBar selectedContact={selectedContact} />
          </div>

          {/* Workspace */}
          <div className="pt-18 pb-16 overflow-y-auto h-full bg-gray-50">
            <Workspace selectedContact={selectedContact} messages={messages} />
          </div>

          {/* FixedFooter */}
          {selectedContact && (
            <div className="absolute bottom-0 w-full z-20 bg-gray-100">
              <FixedFooter onSendMessage={handleSendMessage} />
            </div>
          )}
        </div>

        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default App;
  
