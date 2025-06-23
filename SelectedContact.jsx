import React, { useState, useEffect } from 'react';

function SelectedContact({ selectedContactId }) {
    const [contact, setContact] = useState(null);
  
    useEffect(() => {
      async function fetchContact() {
        try {
          const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
          const data = await response.json();
          console.log("Fetched contact:", data);
          setContact(data);
        } catch (error) {
          console.error("Error fetching contact:", error);
        }
      }
  
      if (selectedContactId) {
        fetchContact();
      }
    }, [selectedContactId]);
  
    if (!contact) return <div>Loading contact...</div>;
  
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
        <h2>{contact.name}</h2>
        <p><strong>Username:</strong> {contact.username}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Website:</strong> {contact.website}</p>
        <p><strong>Address:</strong> {contact.address}</p>
      </div>
    );
  }

  export default SelectedContact
      
