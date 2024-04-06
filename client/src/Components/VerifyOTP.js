import React,{useEffect, useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import "./Authenticate.css";
export default function VerifyOTP() {

    const navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem("token")) navigate("/");
    });
  
    const [credentials, setCredentials] = useState({
      otp: "",
    });
  
    const handleSubmit = async (e) => {
      
      e.preventDefault();
  
      const port = "http://localhost:8080";
    
  
      if (credentials.otp === "" ) {
        alert("Please Enter OTP");
        return;
      }
  
      
        const response = await fetch(`${port}/authenticate/verifyOTP?otp=${credentials.otp}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const json = await response.json();
       
        if (response.status === 500 || response.status === 400) {
          if (response.status === 500) {
            alert("Please fill the required details.");
          } else {
            alert(json.msg);
          }
        } else {
          
            alert(json.msg)
          navigate("/updatepassword");
        }
      
    };
  
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  

  return (
    <section>
      <div
        style={{ marginTop: "6rem" }}
        className={`container d-flex flex-row justify-content-center align-items-center `}
      >
        <div className="d-flex flex-column justify-content-center align-items-center glass">
          <h1 className="welcome">Recover</h1>
          <small className="text-center mb-4 explore-heading">
            Enter OTP to recover password{" "}
          </small>

          
          
          
          <form className="pt-4" onSubmit={handleSubmit}>
            <div className="textbox flex flex-column g text-center">
              <small style={{ color: "#c6cfcf" }}>
                Enter 6 digit OTP sent to your email address.
              </small>
              <input
                className="mx-1 mb-3 mt-4 inputUserName"
                type="text"
                name="otp"
                onChange={onChange}
                placeholder="OTP"
                required
              />
              
              
              <button
                style={{ borderRadius: "10px" }}
                className={`signup-button `}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e)
                }}
              >
                <span>Submit</span>
              </button>
            </div>

            <div className="text-center py-3">
              <span style={{ color: "#ccc2c2" }}>
                Can't get OTP?{" "}
                <Link to="/otpsend" className="register">
                  {" "}
                  Resend
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
