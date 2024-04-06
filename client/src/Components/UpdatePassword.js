import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Authenticate.css";
export default function UpdatePassword() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/");
  });

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const port = "http://localhost:8080";
    e.preventDefault();

    if (
      credentials.password === "" ||
      credentials.email === "" ||
      credentials.confirm_password === ""
    ) {
      alert("Please Enter Your Details");
      return;
    } else if (
      credentials.password === "" &&
      credentials.confirm_password === ""
    ) {
      alert("Please Enter password");
      return;
    } else if(credentials.password !== credentials.confirm_password){
        alert("Please Confirm password");
         return;
    }

    const response = await fetch(`${port}/authenticate/resetPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (response.status === 500 || response.status === 400) {
      if (response.status === 500) {
        alert("Please fill the required details.");
      } else {
        alert(json.msg);
      }
    } else {
      alert(`Great Passowrd updated successfully`);
      navigate("/");
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
          <h1 className="welcome">Reset</h1>
          <small className="text-center mb-4 explore-heading">
            Enter new password{" "}
          </small>

          <form className="pt-4" onSubmit={handleSubmit}>
            <div className="textbox flex flex-column g text-center">
            
            <input
                className="mx-1 mt-4 mb-3 inputUserName"
                type="email"
                onChange={onChange}
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
                required
              />
              
              <input onChange={onChange}
               name="password"
               id=""
               type="password"
               aria-describedby="emailHelpId"
               placeholder="New password"
               required
                className="mx-1 mt-2 mb-3 inputUserName"
              />
            
               <input
               onChange={onChange}
                name="confirm_password"
                className="mx-1 mb-3 mt-1 inputpassword"
                type="password"
                placeholder="Confirm Password"
              />
              <Link
                type="submit"
                style={{ borderRadius: "10px" }}
                className="btn btn-sm letsGO"
                onClick={(e)=>{
                    e.preventDefault();
                    handleSubmit(e);
                }}
              > 
                Reset
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
