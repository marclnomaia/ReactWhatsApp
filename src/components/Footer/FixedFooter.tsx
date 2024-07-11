import React, { useState } from 'react';
import { FiSmile, FiPaperclip, FiMic } from 'react-icons/fi';

const FixedFooter: React.FC<{ onSendMessage: (message: string) => void }> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [showEmoticons, setShowEmoticons] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const toggleEmoticons = () => {
    setShowEmoticons(!showEmoticons);
  };

  return (
    <div className="bg-gray-200 h-16 grid grid-cols-7 items-center px-2">
      <div className="col-span-1 flex items-center space-x-2">
        <FiSmile className="text-xl cursor-pointer" onClick={toggleEmoticons} />
        <FiPaperclip className="text-xl cursor-pointer" onClick={() => alert('Attach files')} />
      </div>
      <div className="col-span-5 flex justify-center items-center">
        <div className="bg-white rounded-lg flex-grow mx-6 px-2 py-1">
          <input
            type="text"
            placeholder="Type the message"
            className="w-full bg-transparent outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
        </div>
      </div>
      <div className="col-span-1 flex justify-end items-center space-x-2">
        <FiMic className="text-xl cursor-pointer" />
      </div>
      {showEmoticons && (
        <div className="absolute bottom-16 left-4 bg-white shadow-md rounded-md p-2">
          <div>😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙
             😚 😋 😛 😜 😝 🤪 🤨 🧐 🤓 😎 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 🥺 
             😣 😖 😫 😩 🥱 😤 😠 😡 🤬 😶 😐 😑 😯 😦 😧 😮 😲 😳 🥵 🥶
              😱 😨 😰 😢 😥 🤤 😭 😓 😭</div>
        </div>
      )}
    </div>
  );
};

export default FixedFooter;


