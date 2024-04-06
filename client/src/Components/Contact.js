import React,{useEffect} from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
export default function Contact() {

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
         <div className='mt-5' style={{backgroundColor:"#f1f5f8"}}>
            <div style={{backgroundColor:"#f1f5f8", marginLeft: "50px" }}>
                <div className="row" style={{marginRight: "80px", marginLeft: "130px" }}>
                    <div className="col-md-6">
                        <div style={{marginTop: "80px", marginBottom: "30px"}}>
                            <h6 style={{color:"#678e3e",fontWeight:"400" ,fontFamily:'Catamaran , sana-serif', letterSpacing: "4px"}}>
                                <span>
                                    <i className="fas fa-location-arrow"></i>
                                </span>
                                Address
                            </h6>
                            <h6 style={{fontFamily:'Catamaran, sana-serif' , letterSpacing: "4px", fontSize: "0.9rem", fontWeight:"bolder"}}>
                                Samalkha
                                <br/>
                                Panipat
                            </h6>
                        </div>
                        <div style={{marginBottom: "30px"}}>
                            <h6 style={{fontFamily:'Catamaran, sana-serif' , letterSpacing: "4px", fontSize: "0.9rem", fontWeight:"bolder"}}>
                                <span>
                                    <i className="fas fa-envelope"></i>
                                </span>
                                Email
                            </h6>
                            <h6 style={{fontFamily:'Catamaran, sana-serif' , letterSpacing: "4px", fontSize: "0.9rem", fontWeight:"bolder"}}>nashamukt@gmail.com</h6>
                        </div>
                        <div style={{marginBottom: "16px"}}>
                            <h6 style={{fontFamily:'Catamaran, sana-serif' , letterSpacing: "4px",color:"#678e3e",  fontWeight:"400"}}>
                                <span className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </span>
                                telephone
                            </h6>
                            <h6 style={{fontSize: "0.9rem", fontFamily:'Catamaran, sana-serif',letterSpacing: "4px",fontWeight:"bolder",  }}>+91 9896493009</h6>
                        </div>
                    </div>
                    <div className="col-md-6 my-5" style={{backgroundColor:"white",width: "550px",borderRadius: "5px",display: "block",boxShadow: "5px 20px 40px #eceeee"}}>
                        <article className="contact-form ">
                            <h3 style={{fontFamily:'Catamaran, sana-serif' , letterSpacing: "4px", textAlign: "center",color:"#617d98" , fontSize:"25px", fontWeight:"bolder",marginTop: "20px",marginBottom: "30px"}}>Contact Us</h3>
                            <form>
                                <div className="form-group" style={{textAlign: "center"}}>
                                   
                                    <input
                                        style={{fontSize: "0.9rem", backgroundColor: "#f1f5f8",marginBottom: "20px",border: "none",  fontFamily:'Catamaran, sana-serif' , letterSpacing: "4px"}}
                                        type="text"
                                        placeholder="NAME"
                                        className="form-control"
                                        name="name"
                                    />
                                    <input
                                        style={{fontSize: "0.9rem", backgroundColor: "#f1f5f8",marginBottom: "20px",border: "none",  fontFamily:'Catamaran, sana-serif' , letterSpacing: "4px"}}
                                        type="email"
                                        placeholder="EMAIL"
                                        className="form-control"
                                        name="email"
                                    />
                                    <textarea
                                        style={{fontSize: "0.9rem", backgroundColor: "#f1f5f8",marginBottom: "20px",border: "none",  fontFamily:'Catamaran, sana-serif' , letterSpacing: "4px"}}
                                        name="message"
                                        placeholder="MESSAGE"
                                        className="form-control"
                                        rows="5"
                                    ></textarea>
                                </div>
                                
                                <button style={{ fontFamily:'Catamaran, sana-serif' , letterSpacing: "4px", fontSize: "0.9rem",  fontWeight: "bold", backgroundColor:"#678e3e", width: "100%" , color: "white"}} type="submit" className="btn btn-large">SUBMIT HERE</button>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        </div> 
        
        <Footer/>
    </>
  )
}
