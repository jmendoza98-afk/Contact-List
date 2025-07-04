import React, { useState } from 'react';
import SelectedContact from './SelectedContact';


function ContactRow({ setSelectedContactId, contact }) {
    return (
        <tr
            onClick={() => {
        setSelectedContactId(contact.id);
    }}
    >
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      );
}

export default ContactRow