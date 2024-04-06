import React from "react";

export default function Analytics() {
  return (
    <>
          <section style={{backgroundColor:"orange"}} className="skills clearfix">
            {/* <!-- single skill --> */}
            <article className="skill">
                <span className="skill-icon">
                <i class="fa-solid fa-hospital-user" style={{color: "#4576c9"}}></i>
                </span>
                <h4 className="skill-title">No of Patients Recovered</h4>
                <p style={{fontSize:"35px"}} className="skill-text">
                    45678+
                </p>
            </article>
            {/* <!-- end of single skill -->
            <!-- single skill --> */}
            <article className="skill">
                <span className="skill-icon">
                <i class="fa-solid fa-file" style={{color: "#4576c9"}}></i>
                </span>
                <h4 className="skill-title">Total case pending</h4>
                <p style={{fontSize:"35px"}} className="skill-text">
                    5678+
                </p>
            </article>
            {/* <!-- end of single skill -->
            <!-- single skill --> */}
            <article className="skill">
                <span className="skill-icon">
                <i class="fa-regular fa-handshake" style={{color: "#4576c9"}}></i>
                </span>
                <h4 className="skill-title">Total counselling done</h4>
                <p style={{fontSize:"35px"}} className="skill-text">
                   9834+
                </p>
            </article>
            {/* <!-- end of single skill -->
            <!-- single skill --> */}
            <article className="skill">
                <span className="skill-icon">
                <i class="fa-solid fa-building-columns" style={{color: "#4576c9"}}></i>
                </span>
                <h4 className="skill-title">Total number of associated Kendras</h4>
                <p style={{fontSize:"35px"}} className="skill-text">
                   7463+
                </p>
            </article>
            {/* <!-- end of single skill --> */}
        </section>
    </>
  );
}
