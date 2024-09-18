import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function TimerComponent() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log("setInterval executed");
        setSeconds(preSeconds => preSeconds+1);
      },1000);
    
      return () => {
        console.log("Time to Stop");
        clearInterval(intervalId);
      };
    }, []);

    //it will run on only first render
    

  return (
    <div>
        <h>Seconds : {seconds}</h>
    </div>
  );
}

export default TimerComponent