import React from 'react'
import "../App.css"
export default function About() {
  return (
    <>
         <section >
            <div className="section-center clearfix">
                {/* <!-- about-img --> */}
                <article className="about-img">
                    <div className="about-picture-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqs8hhFBDtKacy4qSX8cMEQ8AfTqHLExqcDyU12NsxuE-wYNb48EXLeab09xy4jp2pan8&usqp=CAU" alt="Addiction" className="about-picture"/>
                    </div>
                </article>
                {/* <!-- about-info --> */}
                <article className="about-info">
                    {/* <!-- section title --> */}
                    <div className="section-title">
                        <h3>About our</h3>
                        <h2>Nasha Mukt Bharat Foundation</h2>
                    </div>
                    {/* <!-- end of section title --> */}
                    <p className="about-text"></p>
                    <p className="about-text">
                        For, true healing we have found happens only in freedom. Our list of treatments include, detoxification, counselling, meditation, therapy sessions for better progress. The program is essentially voluntary with absolutely no use of Psychiatric medications unless there is an underlying disorder that surfaces during or after detoxification. We aim at treating our clients in the best possible manner and help them in a way that makes their life better and happier.
                    </p>
                    <a href="about.html" className="btn">learn more</a>
                </article>
            </div>

            <section className="skills clearfix">
            {/* <!-- single skill --> */}
            <article className="skill">
                <span className="skill-icon">
                <i class="fa-solid fa-pills" ></i>
                </span>
                <h4 className="skill-title">Drug De Addiction Centres</h4>
                <p className="skill-text">
                    We are one of the best drug de-addiction centres 
                offfering effective and successful treatments for 
                addicts.
                </p>
            </article>
            {/* <!-- end of single skill -->
            <!-- single skill --> */}
            <article className="skill">
                <span className="skill-icon">
                    <i className="fas fa-glass-cheers"></i>
                </span>
                <h4 className="skill-title">Alcohal De-addiction</h4>
                <p className="skill-text">
                    We bring the best doctors for treatments , 
                care and services for common addiction like alcohal , 
                tobacco etc.
                </p>
            </article>
            {/* <!-- end of single skill -->
            <!-- single skill --> */}
            <article className="skill">
                <span className="skill-icon">
                <i class="fa-solid fa-smoking"></i>
                </span>
                <h4 className="skill-title">Smoking De-addictiion Centres</h4>
                <p className="skill-text">
                    We have a team of expert doctors providing
                 treatments,care and services for common addiction
                  like smoking.
                </p>
            </article>
            {/* <!-- end of single skill -->
            <!-- single skill --> */}
            <article className="skill">
                <span className="skill-icon">
                <i class="fa-solid fa-globe"></i>
                </span>
                <h4 className="skill-title">Internet De-Addiction Centres</h4>
                <p className="skill-text">
                    We are leading internet de-addiction centres aimed at helping
                youngsters wean themselves off the internet.
                </p>
            </article>
            {/* <!-- end of single skill --> */}
        </section>
        </section>
    </>
  )
}
