import React from 'react'

export default function IncreaseButton({increase}) {

  return (
    <button className='counter-app__button' onClick={increase}>
        <i className='bx bx-plus'></i>
    </button>
  )
}
