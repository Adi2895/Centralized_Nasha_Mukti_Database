import React, { useState } from 'react'
import UserContext from './UserContext'
export default function Data({children}) {
  const port = "http://localhost:8080/api"
  
  const getCitiesName = async(stateSelected)=>{
    try {
      const response = await fetch(`${port}/getAllCity`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          state:stateSelected
        }),
      })
      const json  = await response.json();
      if(response.status === 500 || response.status === 404 || response.status === 400) 
        alert(json.msg)        
       else
        return json;
      
     } catch (error) {
      console.log(error);
    }
  }

  const getStatesName = async()=>{
    try {
      const response = await fetch(`${port}/getAllState`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const json = await response.json();
      if(response.status === 500 || response.status === 404 || response.status === 400) 
      alert(json.msg);
      else 
      return json;
    
    } catch (error) {
      console.log({error:error});
    }
  }

  const [kendras, setKendras] = useState([]);
  const getAllKendra = async(state, city)=>{
    try {
      const response = await fetch(`${port}/getAllKendra`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          state:state,
          city:city,
        }),
      })
      const json  = await response.json();
      if(response.status === 500 || response.status === 404 || response.status === 400) 
        alert(json.msg)        
      else
      setKendras(json);      
     } catch (error) {
      console.log(error);
    }
  }

  return (
    <>  
      <UserContext.Provider value={{getStatesName,getCitiesName,getAllKendra,kendras}}>
        {children}
        </UserContext.Provider>
    </>
  )
}
