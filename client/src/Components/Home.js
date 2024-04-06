import React , {useEffect}from 'react'
import About from './About';
import Products from "./Products";
import Services from "./Services";
import Entry from "./Entry";
import Analytics from './Analytics';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'
export default function Home() {
  let navigate = useNavigate(); 
  // const exploreHandle=()=>{
  //   explore.current?.scrollIntoView({behavior:'smooth'});
  // }
  useEffect(()=>{
    if(!localStorage.getItem("token"))
    navigate("/login")
  })
  return (
    <>
         <Entry/>
       <About/>
       <Products/>
       <Analytics/>
      <Services />
      <Footer/>
     
       {/* exploreHandle={exploreHandle} */}
    </>
  )
}
