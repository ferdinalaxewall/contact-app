import React from 'react';
import ContactItem from "./ContactItem";

function ContactList({contacts}) {
  return (
    <div className='contact-list'>
        {
            contacts.map((contact) => (
                <ContactItem key={contact.id} name={contact.name} tag={contact.tag} imageUrl={contact.imageUrl} />
            ))
        }
    </div>
  )
}

export default ContactList