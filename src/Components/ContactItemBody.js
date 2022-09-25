import React from 'react'

function ContactItemBody({name, tag}) {
  return (
    <div className='contact-item__body'>
        <h5 className='contact-item__title'>{name}</h5>
        <p className='contact-item__username'>@{tag}</p>
    </div>
  )
}

export default ContactItemBody;