
import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(true);
  
  // if(isLoggedIn){
  //   return(
  //     <LoginBtn />
  //   )
  // }
  // else{
  //   return(
  //     <LogoutBtn  />
  //   )
  // }

  return(
    <div>
      {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
    </div>
  )

}

export default App
