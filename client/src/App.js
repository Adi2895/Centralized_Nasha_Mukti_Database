import Navbar from "./Components/Navbar";
import Data from "./dataContext/Data";
import Home from "./Components/Home";
import Kendra from "./Components/Kendra";
import Contact from "./Components/Contact";
import Register from "./Components/Register"
import Login from "./Components/Login"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Otpsend from "./Components/Otpsend";
import VerifyOTP from "./Components/VerifyOTP";
import UpdatePassword from "./Components/UpdatePassword";

function App() {
  
  return (
    <>
    <Router>
    <Data>
    <Navbar/>
   
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/kendras" element={<Kendra /> }/>
        <Route exact path="/contactus" element={<Contact/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/otpsend" element={<Otpsend/>}/>
        <Route exact path="/verifyotp" element={<VerifyOTP/>}/>
        <Route exact path="/updatepassword" element={<UpdatePassword/>}/>
        
        
      </Routes>     
    </Data>
    </Router> 
  
      </>
  );
}

export default App;
