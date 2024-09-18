
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// Step 1-> create context
const UserContext = createContext();

//step 2->  wrap all the child inside a provider
//step 3-> passs value
//step 4-> consumer ke andar ja ke consume kar lo

const ThemeContext = createContext();

function App() {

  const[user, setUser] = useState({name:"Akhilesh"})

  const [theme, setTheme] = useState('light');
  
  return (

   <UserContext.Provider value={user}>
     <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light' ? "beige" : "black"}}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
   </UserContext.Provider>






  //  <>

  //  <UserContext.Provider value={user}>
  //   <ChildA />
  //  </UserContext.Provider>
    
  //  </>
  )
}

export default App
export {UserContext}
export {ThemeContext}
