import React from 'react'

function CounterDisplay({ count }) {
    if (count === 0) {
        return (<p className='counter-app__number'>{count}</p>);
      }
     
      if (count % 5 === 0 && count % 7 === 0) {
        return (<p className='counter-app__number'>FizzBuzz</p>);
      }
     
      if (count % 5 === 0) {
        return (<p className='counter-app__number'>Fizz</p>);
      }
     
      if (count % 7 === 0) {
        return (<p className='counter-app__number'>Buzz</p>);
      }
     
      return (<p className='counter-app__number'>{count}</p>);
}

export default CounterDisplay