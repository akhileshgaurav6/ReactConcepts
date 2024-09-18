
import './App.css'

function App() {
  
function handleClick() {
  alert("I am clicked");
}

function handleMouseOver() {
  alert("para ke upar mouse le kar aaye ho");
}

function handleSubmit(e){
  e.preventDefault();
  //i am writing my custom behaviour down
  alert("Form submit kar du kya ");
}

function handleInputChange(e){
  // console.log("Input me value change hue hai");
  console.log("Value till now: ", e.target.value);
} 

  return (
    <div>

      <button onClick={() => alert("Button clicked")}>
        Click me
      </button>

      {/* <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange}/>
        <button type='submit'>
          Submit
        </button>
      </form> */}


      {/* <p onMouseOver={handleMouseOver} style={{color:"red", border:"1px solid black"}}>
        I am para
      </p>

      <button onClick={handleClick}>
        Click me
      </button> */}
    </div>
  )
}

export default App
