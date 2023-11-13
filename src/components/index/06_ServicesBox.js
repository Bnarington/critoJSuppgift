import React from 'react'
import '../../styles/index_styles/06_ServicesBox.css'
import backgroundLines from '../../assets/images/background-lines-right.svg'

const ServicesBox = () => {
  return (
    <section className="services-box">
        <div className="wrapper">
            <div className="container">
                <div className="section-title">
                    <p>Our services</p>
                    <h2>We Provide The best <br />Service For Consulting</h2>
                </div>

            <div className="consulting-grid-parent">
                <div className="whitebox">
                    <div className="consulting-grid">
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus laudantium nihil neque.</p>
                        <button className="btn-intro"><i className="fa-light fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className="whitebox">
                    <div className="consulting-grid">
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus laudantium nihil neque.</p>
                        <button className="btn-intro"><span><i className="fa-light fa-arrow-right"></i></span></button>
                    </div>
                </div>


                <div className="whitebox">
                    <div className="consulting-grid">
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus laudantium nihil neque.</p>
                        <button className="btn-intro"><i className="fa-light fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className="whitebox">
                    <div className="consulting-grid">
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus laudantium nihil neque.</p>
                        <button className="btn-intro"><span><i className="fa-light fa-arrow-right"></i></span></button>
                    </div>
                </div>
            </div>    
        </div>

            <div className="container container-extra">
                <button className="btn-transparent">Browse More<i className="fa-regular fa-arrow-up-right"></i></button>
            </div>

            <div className="lines">
                <div className="bg-line"><img src={backgroundLines} alt="" /></div>
            </div>
        </div>    
    </section>
  )
}

export default ServicesBox