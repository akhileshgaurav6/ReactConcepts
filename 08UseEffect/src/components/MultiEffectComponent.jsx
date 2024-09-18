import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function MultiEffectComponent() {

    const[count, setCount] = useState(0);
    const[seonds, setSeconds] = useState(0);

    useEffect(() => {
        console.log('Count changed:', count);
    }, [count]);
// side effect logic will run only when count is changed

    useEffect(() => {
        const intervalid = setInterval(() => {
            console.log("SetInterval started");
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("Time to Stop");
            clearInterval(intervalid);
        }
    }, []);
//it will run only on first render

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count+1)}>Inrement Count</button>
        <h2>Seconds: {seonds}</h2>
    </div>
  );
}

export default MultiEffectComponent