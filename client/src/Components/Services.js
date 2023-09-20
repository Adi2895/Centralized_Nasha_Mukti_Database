import React from 'react'
import "../App.css"
export default function Services(props) {
  return (
    <>
         <section ref={props.explore} className="services">
            {/* <!-- section title --> */}
            <div className="section-title services-title">
                <h3>explore</h3>
                <h2>our Kendras</h2>
                <h2>from any STATE/CITY</h2>
            </div>
            {/* <!-- end of section title --> */}
            <div className="section-center clearfix">
                {/* <!-- single card --> */}
                <article className="service-card">
                    {/* <!-- img container --> */}
                    <div className="service-img-container">
                        {/* <!-- img --> */}
                        <img src="https://nashamukticentre.com/wp-content/uploads/2022/07/depositphotos_46372445-stock-photo-man-with-addictions-1-1.jpg" className="service-img" alt="single service"/>
                        {/* <!-- service icon --> */}
                        <span className="service-icon">
                            <i className="fas fa-mortar-pestle fa-fw"></i>
                        </span>
                    </div>
                    {/* <!-- service info --> */}
                    <div className="service-info">
                        <h4>Haryana</h4>
                        <p>
                            Nasha Mukti Kendra in Haryana is the best place to recover from the addiction. Rehabilitation Center in Haryana has programs and 
                        facilities which help addicted people to recover from the addiction. It gives the assessment,treatment and support to the addicted people.
                        </p>
                        <a href="products.html" className="btn service-btn">read more</a>
                    </div>
                </article>
                {/* <!--end of  single card -->
                <!-- single card --> */}
                <article className="service-card">
                    {/* <!-- img container --> */}
                    <div className="service-img-container">
                        {/* <!-- img --> */}
                        <img src="https://nashamukticentre.com/wp-content/uploads/2022/07/depression2_img-1-1.png" className="service-img" alt="single service"/>
                        {/* <!-- service icon --> */}
                        <span className="service-icon">
                            <i className="fas fa-home fa-fw"></i>
                        </span>
                    </div>
                    {/* <!-- service info --> */}
                    <div className="service-info">
                        <h4>Punjab</h4>
                        <p>
                            Nasha Mukti Kendra in Punjab has a success recovery rate of 80.98%. We have helped many patients to quit their addiction and start a new life.
                         We have support groups where people support and appreciate each other. There are regular seminars and guest lectures where people 
                         come and share their experiences to motivate the patients.
                        </p>
                        <a href="products.html" className="btn service-btn">read more</a>
                    </div>
                </article>
                {/* <!--end of  single card -->
                <!-- single card --> */}
                <article className="service-card">
                    {/* <!-- img container --> */}
                    <div className="service-img-container">
                        {/* <!-- img --> */}
                        <img src="https://nashamuktikendralucknow.com/wp-content/uploads/2021/02/depositphotos_73420981-stock-photo-road-to-recovery-wooden-sign.jpg" className="service-img" alt="single service"/>
                        {/* <!-- service icon --> */}
                        <span className="service-icon">
                            <i className="fas fa-mug-hot fa-fw"></i>
                        </span>
                    </div>
                    {/* <!-- service info --> */}
                    <div className="service-info">
                        <h4>Uttar Pradesh</h4>
                        <p>
                            Nasha Mukti Kendra Lucknow is tremendously proud of the impact that we have made in helping the people in our 
                        community by providing quality and affordable service for deaadiction.Addiction is curable with little effort, medication, and professional guidance.
                        </p>
                        <a href="products.html" className="btn service-btn">read more</a>
                    </div>
                </article>
                {/* <!--end of  single card --> */}
            </div>
        </section> 
    </>
  )
}
