import React , {useState} from 'react'

export default function Footer() {

    const [color, setcolor] = useState("white");

    


  return (
    <>
        <footer className="footer" style={{backgroundColor: "#222", textAlign: "center",  display: "block," ,paddingTop: "80px"}}>
            <div className="section-center">
                <div className="social-icons" style={{paddingBottom: "40px"}}>
                    {/* <!-- social icon --> */}
                    <a href="#" style={{textDecoration: "none"}} className="social-icon">
                        <i
                            onMouseMove={()=>{setcolor("green")}}
                            onMouseOut={()=>{ setcolor("white")}}
                            style={{color: color}}
                            className="fab fa-facebook fa-xl mx-2"
                        ></i>
                    </a>
                    {/* <!-- end of social icon -->
                    <!-- social icon --> */}
                    <a href="#" className="social-icon" style={{textDecoration: "none"}}>
                        <i
                            onMouseMove={()=>{setcolor("green")}}
                            onMouseOut={()=>{ setcolor("white")}}
                            style={{color: color}}
                            className="fab fa-twitter fa-xl mx-2"
                        ></i>
                    </a>
                    {/* <!-- end of social icon -->
                    <!-- social icon --> */}
                    <a href="#" className="social-icon" style={{textDecoration: "none"}}>
                        <i
                            onMouseMove={()=>{setcolor("green")}}
                            onMouseOut={()=>{ setcolor("white")}}
                            style={{color: color}}
                            className="fab fa-instagram fa-xl mx-2"
                        ></i>
                    </a>
                    {/* <!-- end of social icon --> */}
                    <h4 style={{color:"white",fontSize: "0.9rem", letterSpacing:"4px", paddingTop: "20px"}} className="footer-text">
                        ©
                        <span id="date">2023</span>
                        <span className="company">
                            <a href="https://whoisjerode.com" style={{textDecoration: "none"}} target="_blank">NASHA MUKT BHARAT FOUNDATION</a>
                        </span>
                        ALL RIGHTS RESERVED
                    </h4>
                </div>
            </div>
        </footer> 
    </>
  )
}
