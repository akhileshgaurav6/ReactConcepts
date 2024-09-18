

import './App.css'
// import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'

function App() {

  const {count, setCount} = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>


      <Button handleClick = {handleClick}
      text="click me ">
        <h1>{count}</h1>
      </Button>
      
      

      {/* <Card name="akhilesh gaurav">
        <h1>Welcome to React Course</h1>
        <p>Trying to Manage time for this course</p>
        <p>Will complete this course soon</p>
      </Card> */}
    </div>
  )
}

export default App
