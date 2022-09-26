import React from 'react'

export default function ResetButton({reset}) {
  return (
    <button className='counter-app__reset-button' onClick={reset}>
        Reset Counter
    </button>
  )
}
