import React from 'react'
import '../../styles/index_styles/04_featuresBox.css'

const FeaturesBox = () => {
  return (
    <section class="container features-box">
    <div class="container features-box-child">
        <div class="section-title">
            <p>Features</p>
            <h2>Our Accounting Is Trusted By Thousands Of Companies</h2>
            <button class="btn-ylw">Learn More<i class="fa-regular fa-arrow-up-right"></i></button>
        </div>
    

    </div>
    <div class="container features-grid-parent">
        <div class="features-grid-child"><i class="fa-regular fa-handshake"></i><br  /><span class="span1">Business Advice</span><br /><span class="span2">Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.</span> </div>
        <div class="features-grid-child"><i class="fa-light fa-lightbulb-dollar"></i><br /><span class="span1">Startup Business</span><br /><span class="span2">Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.</span> </div>
        <div class="features-grid-child"><i class="fa-solid fa-chart-mixed-up-circle-dollar"></i><br /><span class="span1">Financial Advice</span><br /><span class="span2">Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.</span></div>
        <div class="features-grid-child"><i class="fa-light fa-gear-complex"></i><br /><span class="span1">Risk Management</span><br /><span class="span2">Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.</span></div>
    </div>
</section>
  )
}

export default FeaturesBox