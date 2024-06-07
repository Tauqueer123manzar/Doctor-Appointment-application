import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Context = createContext({isAuthenticate:false});
const AppWrapper=()=>{
  const[isAuthenticate,setIsAuthenticate]= useState(false);
  const[user,setUser]= useState({});

  return(
    <Context.Provider value={{isAuthenticate,setIsAuthenticate,user,setUser}}>
     <App />
    </Context.Provider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppWrapper/>
  </React.StrictMode>,
)
