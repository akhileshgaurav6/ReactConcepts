import { useState } from 'react';
import './App.css'
import { useEffect, useRef } from 'react';

function App() {
//   const [count, setCount] = useState(0);
//   let val = useRef(0);

//   let btnRef = useRef();

//   function handleIncrment(){
//     val.current = val.current+1;
//     console.log("Value of val is: ", val);
//     setCount(count+1);
//   }
// //it runs on every render
//   useEffect(() => {
//     console.log('mai fir se render ho gya')
//   })

//   function changeColor(){
//     btnRef.current.style.backgroundColor = "red";
//   }

const [time, setTime] = useState(0);

let timerRef = useRef(null);

function startTimer(){
  timerRef.current = setInterval(() => {
    setTime(time => time+1)
  },1000);
}

function stopTimer(){
  clearInterval(timerRef.current);
  timerRef.current = null;
}

function resetTimer(){
  stopTimer();
  setTime(0);
}
  return (
    <div>

    <h1>StopWatch: {time} seconds</h1>
    <button onClick={startTimer}>
      Start
    </button>
    <br/><br/>

    <button onClick={stopTimer}>
      Stop
    </button>
    <br/><br/>

    <button onClick={resetTimer}>
      Reset
    </button>

      {/* <button 
      ref={btnRef}
      onClick={handleIncrment}>
        Increment
      </button>
      <br/>
      <br/>

      <button onClick={changeColor}>
        Change color of 1st button
      </button>
      <br/>

      <div>
        Count:  {count}
      </div> */}
    </div>
  )
}

export default App
