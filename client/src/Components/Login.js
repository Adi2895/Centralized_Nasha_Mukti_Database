import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Link, useNavigate } from "react-router-dom";
import "./Authenticate.css";
export default function Login() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("token"))
      navigate("/")
  })

  const [credentials, setCredentials] = useState({
      email: "",
    password: "",
  });
  
  function isValidEmail(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Test the email address against the regular expression pattern.
    return regex.test(email); // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const port = "http://localhost:8080";
    e.preventDefault();

    if (
      credentials.email === "" ||
      credentials.password === ""
    ) {
      alert("Please enter required details");
      return;
    }

    if (!isValidEmail(credentials.email)) {
      // seterr2("Invalid email")
      alert("Invalid email");
      return;
    } else {
      const response = await fetch(`${port}/authenticate/login`, {
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
      // console.log(json)

      // alert(response.status)
      if (response.status === 500 || response.status === 400) {
        if (response.status === 500) {
          alert("Please fill the required details.");
        } else {
          alert(json.msg);
        }
      } else {
        localStorage.setItem("token", json.authToken)
        alert(`Great You Logged successfully`);
        navigate("/");
      }
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
          <h2 className="welcome">Login now</h2>
          <small className="text-center pb-2 explore-heading">
            Do connect with us
          </small>

          <form className="py-1 " method="POST" onSubmit={handleSubmit}>
            <div className="textbox flex g text-center ">
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

              {/* <small style={{color:"white"}} className="mb-1">{err2}</small> */}
                 <input
                onChange={onChange}
                name="password"
                id=""
                type="password"
                aria-describedby="emailHelpId"
                placeholder="Enter password"
                required
                className="mx-1 mt-2 mb-3 inputUserName"
              />

              {/* <small style={{color:"white"}} >{err3}</small> */}
              <br />

              <button
                style={{ borderRadius: "10px" }}
                className={`signup-button mt-3`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                <span>Login</span>
              </button>
            </div>

            <div className="text-center py-3">
              <span style={{ color: "#ccc2c2" }}>
                Didn't Register?
                <Link
                  style={{ paddingRight: "62px" }}
                  to="/register"
                  className="register "
                >
                  {" "}
                  Sign up
                </Link>
                <Link to="/otpsend" className="register ">
                  {" "}
                  Forgot password
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
