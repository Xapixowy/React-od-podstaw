import React from 'react';

function Display(props) {
   let { hours, minutes, seconds, miliseconds } = props.time;
   let displayState = '';
   if (!props.active && hours === 0 && minutes === 0 && seconds === 0 && miliseconds === 0) displayState = '';
   else {
      props.active ? (displayState = 'started') : (displayState = 'stopped');
   }
   hours = props.addZero(hours);
   minutes = props.addZero(minutes);
   seconds = props.addZero(seconds);
   miliseconds = props.addZero(miliseconds, 4);
   return <p className={displayState}>{`${hours}:${minutes}:${seconds}:${miliseconds}`}</p>;
}

export default Display;
