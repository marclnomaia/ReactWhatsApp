import React from 'react';
import ContactItem from './ContactItem';

const contacts = [
  {
    picture: 'https://via.placeholder.com/150', // Replace with actual image URL
    name: 'John Doe',
    time: '12:34 PM',
    message: 'Hey, how are you?',
  },
  {
    picture: 'https://via.placeholder.com/150', // Replace with actual image URL
    name: 'Jane Smith',
    time: '11:20 AM',
    message: 'Can you send the report?',
  },
  // Add more contacts as needed
];

const ContactsList = () => {
  return (
    <div className="bg-white">
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          picture={contact.picture}
          name={contact.name}
          time={contact.time}
          message={contact.message}
        />
      ))}
    </div>
  );
};

export default ContactsList;
