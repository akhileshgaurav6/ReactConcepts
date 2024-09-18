import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function LoggerComponent() {

    const [count, setCount] = useState(0);

    //this run on every render
    useEffect(() => {
        console.log('component rendered or count changed: ', count);
    });

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LoggerComponent