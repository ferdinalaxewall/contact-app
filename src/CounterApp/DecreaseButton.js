import React from 'react'

export default function DecreaseButton({decrease}) {
  return (
    <button className='counter-app__button' onClick={decrease}>
        <i className='bx bx-minus'  ></i>
    </button>
  )
}
