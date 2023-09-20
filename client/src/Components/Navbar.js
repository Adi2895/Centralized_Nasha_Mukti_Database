import React, { useContext, useEffect, useState } from "react";
import UserContext from "../dataContext/UserContext";
import {Link} from "react-router-dom"
export default function Navbar() {
  // const navigate = useNavigate();
  const { getStatesName,getCitiesName ,getAllKendra} = useContext(UserContext);
  const [stateData, setStateData] = useState([]);
  const [currentState, setCurrentState] = useState("Haryana"); 
  const[cityData, setCityData] = useState([]);
  const[currentCity, setCurrentCity] = useState("")

  
 
  useEffect(()=>{
    getCitiesName(currentState).then((res)=>{
       
        setCityData(res);
        setCurrentCity(res[0].cityName)
        getAllKendra(currentState, res[0].cityName)
        
    }).catch((error)=>{
        console.log(error)
    })
  },[currentState])

  useEffect(() => {
    getStatesName().then((res)=>{
        setStateData(res);
    }).catch((error)=>{
        console.log(error)
    })

    getCitiesName(currentState).then((res)=>{
        setCityData(res);
        
        setCurrentCity(res[0].cityName)
    }).catch((error)=>{
        console.log(error)
    })
    
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Nasha Mukti kendra
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
             
          
           
              {/* State */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{fontSize:"25px"}}
                >{currentState}</a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {stateData.length !== 0 ? (
                    stateData.map((value) => (
                      <div className="container" key={value._id}>
                        <a onClick={(e)=>{
                          e.preventDefault()
                          setCurrentState(value.state)}} className="dropdown-item" href="/kendras">
                          {value.state}
                        </a>
                      </div>
                    ))
                  ) : (
                    <p>Can't get state from database.</p>
                  )}
                </div>
              </li>



              {/* City */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{fontSize:"25px"}}
                >{currentCity}</a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {cityData.length !== 0 ? (
                    cityData.map((value) => (
                      <div className="container"  key={value._id}>
                        <Link to="/kendras" onClick={()=>{setCurrentCity(value.cityName)
                        getAllKendra(currentState, value.cityName )
                        }} className="dropdown-item" >
                          {value.cityName}
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p>No city data available.</p>
                  )}
                </div>
              </li>
            </ul>

            <Link className="navbar-brand"
                  to="/"
                  style={{fontSize:"25px"}}>
            Home
          </Link>
            <Link className="navbar-brand" to="/contactus">
            Contact US
          </Link>
          </div>
         
        </div>
      </nav>
    </>
  );
}
