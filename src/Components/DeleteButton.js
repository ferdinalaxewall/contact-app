import React from 'react'

function DeleteButton({id, onDelete}) {
  return (
    <button className='contact-item__delete' onClick={() => onDelete(id)}>
        <i className='bx bx-x'></i>
    </button>
  )
}

export default DeleteButton