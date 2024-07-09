import React from 'react';
import ContactItem from './ContactItem';
import userImage1 from './images/user_1.png'; // Ensure this path is correct
import userImage2 from './images/user_2.png'; // Ensure this path is correct
import userImage3 from './images/user_3.png'; // Ensure this path is correct

type Contact = {
  picture: string;
  name: string;
  time: string;
  message: string;
  status: 'received' | 'read';
};

const contacts: Contact[] = [
  {
    picture: userImage1,
    name: 'John Doe',
    time: '12:34 PM',
    message: 'Hey, how are you?',
    status: 'received', // One tick
  },
  {
    picture: userImage2,
    name: 'Jane Smith',
    time: '11:20 AM',
    message: 'Can you send the report?',
    status: 'read', // Two ticks
  },
  {
    picture: userImage3,
    name: 'Eduard Scizor',
    time: '11:50 PM',
    message: 'Can you send the report?',
    status: 'read', // Two ticks
  },
  // Add more contacts as needed
];

const ContactsList: React.FC<{ onContactClick: (contact: Contact) => void }> = ({ onContactClick }) => {
  console.log('Rendering ContactsList:', contacts); // Debugging log
  return (
    <div className="bg-white">
      {contacts.map((contact, index) => (
        <div key={index} onClick={() => onContactClick(contact)} className="cursor-pointer hover:bg-gray-200">
          <ContactItem
            picture={contact.picture}
            name={contact.name}
            time={contact.time}
            message={contact.message}
            status={contact.status}
          />
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
