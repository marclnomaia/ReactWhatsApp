import React from 'react';
import backgroundImage from './images/whatBack.png'; // Adjust the path as needed

type Message = {
  id: number;
  text: string;
  time: string;
  sent: boolean;
  status: string;
};

const WorkSpace: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div
      className="relative grid grid-cols-7 gap-4 h-full p-4"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-opacity-75 rounded-lg p-4 overflow-y-auto h-full">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sent ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`bg-white p-2 rounded-lg shadow-md max-w-xs`}>
              <div>{message.text}</div>
              <div className="text-sm text-gray-500 mt-1 flex justify-between">
                <span>{message.time}</span>
                {message.sent && (
                  <span className={`ml-2 ${message.status === 'read' ? 'text-blue-500' : ''}`}>
                    {message.status === 'read' ? '✔✔' : '✔'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSpace;






