import React from 'react';
import whatBack from './images/whatBack.png';

type Message = {
  sender: string;
  text: string;
  time: string;
};

type WorkspaceProps = {
  selectedContact: {
    name: string;
    picture: string;
  } | null;
  messages: Message[];
};

const Workspace: React.FC<WorkspaceProps> = ({ selectedContact, messages }) => {
  if (!selectedContact) {
    return <div className="p-4">Please select a contact to view the messages.</div>;
  }

  return (
    <div
    className="p-4 h-full overflow-hidden"
    style={{
      backgroundImage: `url(${whatBack})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="flex items-center mb-4">
      <img src={selectedContact.picture} alt={selectedContact.name} className="w-10 h-10 rounded-full mr-2" />
      <div>{selectedContact.name}</div>
    </div>
    <div className="h-full overflow-y-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 flex ${message.sender === selectedContact.name ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`inline-block p-2 rounded-lg border border-gray-300 ${message.sender === selectedContact.name ? 'bg-green-200 text-right' : 'bg-white text-left'}`}
            style={{ maxWidth: '70%' }}
          >
            <div>{message.text}</div>
            <div className="text-xs text-gray-500">{message.time}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Workspace;










