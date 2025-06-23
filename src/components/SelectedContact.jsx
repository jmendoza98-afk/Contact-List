import React, { useState, useEffect } from 'react';

function SelectedContact({selectedContactId, setSelectedContactId}) {

  const [contact, setContact] = useState({})

    useEffect(() => {
        async function getContact () {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const json = await response.json();
                setContact(json)
            } catch (error) {
                console.log(error)
            }
        }
        getContact();
    }, [])

  return (
  contact.name ? ( <div>
    <h1>{contact.name}</h1>
    <p>Username: {contact.username}</p>
    <p>Phone: {contact.phone}</p>
    <p>Website: {contact.website}</p>
    <address>
        Address: <br></br>
        {contact.address.street} <br></br>
        {contact.address.suite} <br></br>
        {contact.address.city}<br></br>
        {contact.address.zipcode}
    </address>
    <button onClick={()=>setSelectedContactId(null)}>Back to ContactList</button>
   </div>) : <div></div>
  )
}

  export default SelectedContact
      
