
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {

  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  //first - side Effect function
  //second - clean up function
  //third - comma separated dependency list

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

//Variation : 1
// runs on every render

  // useEffect(() =>  {
  //   alert("i will run on each render")
  // })

// variation : 2
//that runs on only first render

// useEffect(() => {
//   alert("I will run on only first render");
// }, [])

// variation : 3

// useEffect(() => {
//   alert("I will run everyytime when count get updated");
// }, [count])

// variation : 4
// Multiple dependencies

// useEffect(() => {
//   alert("I will run everyytime when count/total get updated");
// }, [count, total])

// validation : 5
// iss baar let's add a cleanUp function

// useEffect(() => {
//   alert("Count is updted")

//   return () => {
//     alert("Count is unmounted from UI");
//   }
// }, [count])



//   function handleClick() {
//     setCount(count+1);
    
//   }

  // function handleClickTotal(){
  //   setTotal(total+1);
  // }
  

  return (
    <div>

      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponent /> */}
      <MultiEffectComponent />

      {/* <button onClick={handleClick}>
        Update count
      </button>
      <br/>
      Count is : {count}
      <br/>
      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br/>
      Total is : {total} */}
    </div>
  )
}

export default App
