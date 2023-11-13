import React from 'react'
import '../../styles/index_styles/07_WhyUs.css'
import image12 from '../../assets/images/Image-12.jpg'

const WhyUs = () => {
  return (
    <section className="why-us">
        <div className="wrapper d-flex">
            <div className="picture-left">
                <div className="box"></div>
                    <img src={image12} alt="Two women talking to eachother looking at an iPad." />
                </div>

                <div className="container">
                    <div className="why-us-box">
                        <div className="section-title">
                            <p>Why choose us</p>
                            <h2>Why We Are The Best <br /> Business Consulting Agency</h2>
                        </div>
            
                    <div className="container container-extra">
                        <div className="reasons-box">
                            <div className="icon">
                                <i className="fa-regular fa-thumbs-up"></i>
                            </div>
                            <div className="text">
                                <h4>Process Excellence</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container container-extra">
                        <div className="reasons-box">
                            <div className="icon">
                                <i className="fa-regular fa-chess-king"></i>
                            </div>
                            <div className="text">
                                <h4>Strategic Planning</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container container-extra">
                        <div className="reasons-box">
                            <div className="icon">
                                <i className="fa-regular fa-spray-can"></i>
                            </div>
                            <div className="text">
                                <h4>Experience Design</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container container-extra">
                        <div className="reasons-box">
                            <div className="icon">
                                <i className="fa-regular fa-head-side-gear"></i>
                            </div>
                            <div className="text">
                                <h4>Artificial Inteligence</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>            
    </section>
  )
}

export default WhyUs