import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../dataContext/UserContext";
export default function Kendra() {
  const { kendras } = useContext(UserContext);
  console.log(kendras)
  return (
    <>
      <header className="mt-5 pt-4 text-center">
        <h2>Nasha Mukti Kendras</h2>
      </header>
      {Array.isArray(kendras) && kendras.length === 0 ? (
        <p>
          {" "}
          We don't have data to show about kendras of the current selected city{" "}
        </p>
      ) : (
        kendras.kendrasFound.map((value) => (
          <div
            key={value._id}
            style={{ fontFamily: "sans-serif" }}
            className="container"
          >
            <div className="row">
              <div className="col-md-10">
                <div className="info-card">
                  <h3>{value.Name} </h3>
                  <p style={{ width: "80%" }}>
                    {" "}
                    <span style={{ fontSize: "1.2rem" }}>Address </span> :{" "}
                    <em> {value.address} </em>
                  </p>
                  <p style={{ textAlign: "justify" }}>{value.description}</p>

                  {value.image.length === 0 ? (
                    ""
                  ) : (
                    <>
                      <div className="gallery row">
                        {value.image.map((imageLink, index) => {
                          return (
                            <div
                              key={index}
                              className="col-md-6 col-sm-12 mt-2 mb-2"
                            >
                              <img
                                style={{ height: "300px", width: "450px" }}
                                src={imageLink}
                                className="img-fluid rounded-top"
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-card">
                  <h3>Contact Info</h3>
                  <p>
                    Phone Number:{" "}
                    <NavLink href="">
                      {value.contactInfo.phone
                        ? value.contactInfo.phone
                        : "Phone number not available"}
                    </NavLink>
                  </p>
                  <span style={{fontSize:"1rem"}}> Email:</span><NavLink  onClick={()=>{
                    if(value.contactInfo.email) {
                      window.location.href = `mailto:${value.contactInfo.email}`;
                    }
                  }}>
                   
                    
                    {value.contactInfo.email
                      ? value.contactInfo.email
                      : " Email not available"}{" "}
                  </NavLink>
                  <p>
                    {value.contactInfo.website ? (
                      <>
                        {" "}
                        Website:{" "}
                        {
                          <a
                            href={`${value.contactInfo.website}`}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Visit our website
                          </a>
                        }{" "}
                      </>
                    ) : (
                      ""
                    )}{" "}
                  </p>
                </div>

                <div>
            <iframe
              title="Map"
              width="100%"
              height="400"
              src={value.location.link}
            ></iframe>
          </div>
              </div>


            </div>

            <div>

              <p>
                {value.location.coordinates.map((coordinate) => {
                  <p> {coordinate} </p>;
                })}
              </p>
            </div>
          </div>
        ))
      )}
    </>
  );
}
