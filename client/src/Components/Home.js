import React from 'react'
import About from './About';
import Products from "./Products";
import Services from "./Services";
import Entry from "./Entry";
export default function Home() {
  
  // const exploreHandle=()=>{
  //   explore.current?.scrollIntoView({behavior:'smooth'});
  // }
  return (
    <>
         <Entry/>
       <About/>
       <Products/>
      <Services />
     
       {/* exploreHandle={exploreHandle} */}
    </>
  )
}
