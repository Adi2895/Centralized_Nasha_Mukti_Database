import "../App.css"
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Entry(props) {

  return (
    <>
     <div className="header">
            <div className="banner">
                <h2>"Break free from the chains of addiction and embrace the freedom of a nasha mukt life."</h2>
                <h1>
                    Nasha todo , Jeevan Jiyo
                    <br/>
                </h1>
                <NavLink to="#" onClick={props.exploreHandle} className="btn banner-btn"> explore</NavLink>
            </div>
        </div>
        <div style={{marginBottom:"10px"}} className="content-divider"></div> 
    </>
  )
}
