import React from 'react'
import Buttons from '../sitewide/Buttons'
import '../../styles/index_styles/04_featuresBox.css'

const FeaturesBox = () => {
  return (
    <section className="container features-box">
    <div className="container features-box-child">
        <div className="section-title">
            <p>Features</p>
            <h2>Our Accounting Is Trusted By Thousands Of Companies</h2>
            <Buttons type="features-btn" title="Learn More" url="/"/>
        </div>
    

    </div>
    <div className="container features-grid-parent">
        <div className="features-grid-child"><i className="fa-regular fa-handshake"></i><br  /><span className="span1">Business Advice</span><br /><span className="span2">Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.</span> </div>
        <div className="features-grid-child"><i className="fa-light fa-lightbulb-dollar"></i><br /><span className="span1">Startup Business</span><br /><span className="span2">Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.</span> </div>
        <div className="features-grid-child"><i className="fa-solid fa-chart-mixed-up-circle-dollar"></i><br /><span className="span1">Financial Advice</span><br /><span className="span2">Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.</span></div>
        <div className="features-grid-child"><i className="fa-light fa-gear-complex"></i><br /><span className="span1">Risk Management</span><br /><span className="span2">Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.</span></div>
    </div>
</section>
  )
}

export default FeaturesBox