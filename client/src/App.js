import Navbar from "./Components/Navbar";
import Data from "./dataContext/Data";
import Home from "./Components/Home";
import Kendra from "./Components/Kendra";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
     
      </Routes>
     
      {/* explore={explore} */}
      <Footer/>
    </Data>
    </Router> 
  
      </>
  );
}

export default App;
