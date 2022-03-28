import React from 'react'

const Breakinterval = (props) => {
  const{
    breakLength,
    increaseBreakOneMinute,
    reduceBreakOneMinute,
    clockFormat,
  } = props;
  
  return (
    <div>
      <p id="break-label">PomoBreak</p>
      <p id='break-length'>{clockFormat(breakLength)}</p>

      <button id='break-reduce' onClick={reduceBreakOneMinute}>-</button>
      <button id='break-increase' onClick={increaseBreakOneMinute}>+</button>
    </div>
  )
};

export default Breakinterval
