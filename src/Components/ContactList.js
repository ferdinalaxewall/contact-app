import React from 'react';
import ContactItem from "./ContactItem";

function ContactList({contacts, onDelete}) {
  return (
    <div className='contact-list'>
        {
            contacts.map((contact) => (
                <ContactItem key={contact.id} name={contact.name} tag={contact.tag} imageUrl={contact.imageUrl} id={contact.id} onDelete={onDelete} />
            ))
        }
    </div>
  )
}

export default ContactList