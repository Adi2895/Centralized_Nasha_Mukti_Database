import React from 'react'
import "../App.css"
export default function Products() {
  return (
    <>
        <section className="products">
            <div className="section-center clearfix">
                {/* <!-- products info --> */}
                <article className="products-info">
                    {/* <!-- section title --> */}
                    <div className="section-title">
                        <h2>Services</h2>
                    </div>
                    {/* <!-- end of section title --> */}
                    <p className="product-text">
                        Nasha Mukti Kendra provides you the best facilities. Some of them are highlighted below:

 We have a team of experienced and trained professionals to offer you 24 hours assistance.

We offer you a pick and drop service.

 There are 24 hours operating ambulance services to help you in case of any emergency.

 There are regular yoga and meditation sessions by the experts. These experts help you in learning proper breathing tips and techniques to control your urge of addiction.

We offer a vegetarian and non-vegetarian food menu. We have nutritionist who takes care of all the needs and requirements of the patient.

The rooms are well furnished with proper sitting and comfy bed setting.

We have a satellite television facility available as well.
                    </p>
                    <a href="products.html" className="btn">EXPLORE MORE</a>
                </article>
                {/* <!-- products inventory --> */}
                <article className="products-inventory clearfix">
                    {/* <!-- single product --> */}
                    <div className="product">
                        <img src="https://image3.jdomni.in/library/3E/CF/FE/719111D8149AA5E546B4B36874_1496260051224_cropped_450X450.jpeg" alt="single product" className="product-img"/>
                        <h4 className="product-title">Detoxification</h4>
                    </div>
                    {/* <!-- end of single product -->
                    <!-- single product --> */}
                    <div className="product">
                        <img src="https://image2.jdomni.in/library/12122017/0B/67/23/241EC5026171D8726CAEADF253_1513065575208_cropped_450X450.jpeg" alt="single product" className="product-img"/>
                        <h4 className="product-title">Meditation</h4>
                    </div>
                    {/* <!-- end of single product -->
                    <!-- single product --> */}
                    <div className="product">
                        <img src="https://image3.jdomni.in/banner/19062018/73/43/F9/B567B63370E36774D057CB0B8A_1529388768613.jpg?output-format=webp" alt="single product" className="product-img"/>
                        <h4 className="product-title">Therapy Sessions</h4>
                    </div>
                    {/* <!-- end of single product --> */}
                </article>
            </div>
        </section> 
    </>
  )
}
