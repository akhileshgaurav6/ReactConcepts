import UserCard from "./components/UserCard"
import "./App.css"

function App() {
 

  return (
    <div className="container">
      <UserCard name="Dhoni" desc="Desc of Dhoni" style={{"border-radius":"10px"}}/>
      <UserCard name="Virat" desc="Desc of Virat" style={{"border-radius":"10px"}}/>
      <UserCard name="Rohit" desc="Desc of Rohit" style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
